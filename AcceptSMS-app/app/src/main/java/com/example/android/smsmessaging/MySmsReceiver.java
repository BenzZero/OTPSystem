
/*
 * Copyright (C) 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.example.android.smsmessaging;

import android.annotation.TargetApi;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.RequiresApi;
import android.telephony.SmsMessage;
import android.widget.Toast;

import com.android.volley.RequestQueue;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

// request post
// date
// md5

public class MySmsReceiver extends BroadcastReceiver {
    private static final String TAG = MySmsReceiver.class.getSimpleName();
    public static final String pdu_type = "pdus";

    /**
     * Called when the BroadcastReceiver is receiving an Intent broadcast.
     *
     * @param context  The Context in which the receiver is running.
     * @param intent   The Intent received.
     */
    @TargetApi(Build.VERSION_CODES.M)
    @Override
    public void onReceive(Context context, Intent intent) {
        // Get the SMS message.
        Bundle bundle = intent.getExtras();
        SmsMessage[] msgs;
        String strMessage = "";
        String[] strMessagesplit,dataTimesplit;
        String date = "";
        String[] date_s;
        String time = "";
        String format = bundle.getString("format");
        int status = 0;

        Calendar calendar = Calendar.getInstance();
        SimpleDateFormat dateformate = new SimpleDateFormat("dd/MM/yyyy HH:mm");
        String formattedDate = dateformate.format(calendar.getTime());

        SimpleDateFormat dateformate_tmp = new SimpleDateFormat("Edd");
        String formattedDate_tmp = dateformate_tmp.format(calendar.getTime());

        String bank = "";     //  ธนาคารที่โอนเข้า
        String dateTime = ""; //  วันที่และเวลาโอน
        String money = "";    //  จำนวนเงินที่โอน
        String addres = "";

        String token = null;
        try {
            token = md5("Chada.311");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        addres="https://www.chadalotto.com/cd-admin/api/autosms/"+token;
        RequestQueue requestQueue;

        // Retrieve the SMS message received.
        Object[] pdus = (Object[]) bundle.get(pdu_type);
        if (pdus != null) {
            // Check the Android version.
            boolean isVersionM = (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M);
            // Fill the msgs array.
            msgs = new SmsMessage[pdus.length];
            for (int i = 0; i < msgs.length; i++) {
                // Check Android version and use appropriate createFromPdu.
                if (isVersionM) {
                    // If Android version M or newer:
                    msgs[i] = SmsMessage.createFromPdu((byte[]) pdus[i], format);
                } else {
                    // If Android version L or older:
                    msgs[i] = SmsMessage.createFromPdu((byte[]) pdus[i]);
                }
                // Build the message to show.
                // strMessage += msgs[i].getOriginatingAddress();
                // strMessage += "from SMS : " + msgs[i].getMessageBody() + "\n";

                strMessage = msgs[i].getMessageBody();
                strMessagesplit = strMessage.split(" ");

                boolean a = (msgs[i].getOriginatingAddress().equals("027777777") || msgs[i].getOriginatingAddress().equals("SCB"));
                boolean b = (msgs[i].getOriginatingAddress().equals("028888888") || msgs[i].getOriginatingAddress().equals("KBank"));
                boolean c = (msgs[i].getOriginatingAddress().equals("021111111") || msgs[i].getOriginatingAddress().equals("Krungthai"));
                boolean d = (msgs[i].getOriginatingAddress().equals("026455555") || msgs[i].getOriginatingAddress().equals("BANGKOKBANK"));

//                Toast.makeText(context, a+"\n"+b+"\n"+c+"\n"+d, Toast.LENGTH_LONG).show();
                String[] monery = {"เงินออก", "หักบช"};
                int stateInOut = 1;
                int count = 0;
                for(count = 0; count < monery.length; count++){
                    System.out.println(monery[count]);
                    stateInOut = strMessage.indexOf(monery[count]);
                    if( stateInOut > -1 )
                        break;
                }
                if ( stateInOut == -1 ) {
                    if( a ){ // ธนาคารไทยพานิช
                        try {
                            dataTimesplit = strMessagesplit[0].split("@");
                            money = strMessagesplit[1];

//                        if( isNumeric(strMessagesplit[5]) ){
//                            money = strMessagesplit[5];
//
//                            dataTimesplit = strMessagesplit[12].split("@");
//                        }
//                        else if( isNumeric(strMessagesplit[6]) ){
//                            money = strMessagesplit[6];
//                            dataTimesplit = strMessagesplit[12].split("@");
//                        }
//                        else {
//                            money = strMessagesplit[7];
//                            dataTimesplit = strMessagesplit[13].split("@");
//                        }

                        date = dataTimesplit[0]+"/"+calendar.get(Calendar.YEAR); // 20/11
                        time = dataTimesplit[1]; // 10:27

                        bank = "ไทยพาณิชย์";
                        dateTime = date+" "+time;
    //                    money = strMessagesplit[1];

                        status = 1;
                        } catch (Exception e){
                            //e.printStackTrace();
                            status = 0;
                        }
                    }
                    else if( b ){ // ธนาคารกสิกรไทย
                        try {
                            if (isNumeric(strMessagesplit[3].replaceAll("[เงินเข้า,บ]", ""))) {
                                money = strMessagesplit[3].replaceAll("[เงินเข้า,บ]", "");
                            } else {
                                money = strMessagesplit[4];
                            }

                            date_s = strMessagesplit[0].split("/");
                            date = date_s[0] + "/" + date_s[1] + "/" + calendar.get(Calendar.YEAR);
                            time = strMessagesplit[1];

                            bank = "กสิกรไทย";
                            dateTime = date + " " + time;

                            money = money.replaceAll("[บ,คงเหลือ,+,เงินเข้า]", "");
                            // if( strMessagesplit[3].indexOf("เงินเข้า") != -1 ){
                            //     money = strMessagesplit[3];
                            // }
                            // else {
                            //     money = strMessagesplit[4];
                            // }
                            status = 1;
                        } catch (Exception e){
                            //e.printStackTrace();
                            status = 0;
                        }
                    }
                    else if( c ){ // ธนาคารกรุงไทย
                        try {
                            dataTimesplit = strMessagesplit[0].split("@");
                            date_s = strMessagesplit[0].split("-");
                            date = date_s[0] + "/" + date_s[1] + "/" + calendar.get(Calendar.YEAR);
                            time = dataTimesplit[1];

                            bank = "กรุงไทย";
                            dateTime = date + " " + time;
                            if( isNumeric(strMessagesplit[3].replaceAll("[+]", "")) ) {
                                money = strMessagesplit[3].replaceAll("[+]", "");
                            }
                            else {
                                money = strMessagesplit[4].replaceAll("[+]", "");
                            }

                            status = 1;

                        } catch (Exception e){
                            status = 0;
                        }
                    }
                    else if( d ){ // ธนคารกรุงเทพ
                        bank = "กรุงเทพ";
                        dateTime = formattedDate;
                        money = strMessagesplit[1];
                        status = 1;
                    }

                    money = money.replaceAll("[บ,เงินเข้า,+,เงินเข้า]", "");
                    dateTime = dateTime.replaceAll("[.]", "");

                    System.out.println("xxxxxxxxx"+bank+" "+dateTime+" "+money+" "+addres);
                    if( status == 1 && !bank.equals("") && !dateTime.equals("") && !money.equals("") ){

                        // Log and display the SMS message.
                        // Log.d(TAG, "onReceive: " + strMessage);
    //                    Toast.makeText(context, bank + '\n' + dateTime + '\n' + money, Toast.LENGTH_LONG).show();

                        // post request to server
                        getDetails(bank, dateTime, money, addres, context);

                        // endpost
                    }
                }
            }
        }

        bundle = null;
        msgs = null;
        strMessage = null;
        strMessagesplit = null;
        dataTimesplit = null;
        date = null;
        date_s = null;
        time = null;
        format = null;
        status = 0;

        calendar = null;
        dateformate = null;
        formattedDate = null;

        dateformate_tmp = null;
        formattedDate_tmp = null;

        bank = null;
        dateTime = null;
        money = null;
        addres = null;
        token = null;
    }

    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    private void getDetails(String bank, String dateTime, String money, String addres , Context context) {

        OkHttpClient client = new OkHttpClient();

        RequestBody formBody = new FormBody.Builder()
                .add("bank", bank)
                .add("dateTime", dateTime)
                .add("money", money)
                .build();


            Request request = new Request.Builder()
                .url(addres)
                .post(formBody)
                .build();

            // execute request
            try {
                Response response = client.newCall(request).execute();

                String responseData = response.body().toString();
                // Response code 200 means login details found in DB

                if(response.code() == 200) {
                    Toast.makeText(context, "200 สำเร็จ", Toast.LENGTH_LONG).show();

                } else {
                    Toast.makeText(context, "400 เกิดความผิดหลาด", Toast.LENGTH_LONG).show();
                }
            } catch (Exception e) {
                Toast.makeText(context, "Exception * เกิดความผิดหลาด", Toast.LENGTH_LONG).show();
                //e.printStackTrace();
            }

    }


    public static String md5(String input) throws NoSuchAlgorithmException {
        String result = input;
        if(input != null) {
            MessageDigest md = MessageDigest.getInstance("MD5"); //or "SHA-1"
            md.update(input.getBytes());
            BigInteger hash = new BigInteger(1, md.digest());
            result = hash.toString(16);
            while(result.length() < 32) {
                result = "0" + result;
            }
        }
        return result;
    }

    public static boolean isNumeric(String str)
    {
        str = str.replace(",", "");
        try
        {
            double d = Double.parseDouble(str);
        }
        catch(NumberFormatException nfe)
        {
            return false;
        }
        return true;
    }

}