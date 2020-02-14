
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

package com.example.acceptsms;

import android.annotation.TargetApi;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.telephony.SmsMessage;
import android.widget.Toast;
import java.util.regex.*;  

import org.json.JSONException;
import org.json.JSONObject;
import java.util.concurrent.ExecutionException;

public class MySmsReceiver extends BroadcastReceiver {
    private static final String TAG = MySmsReceiver.class.getSimpleName();
    public static final String pdu_type = "pdus";
    private WebSocketClientClass webSocketClient = new WebSocketClientClass();
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
        String bankname = "";
        String type = "SMS";
        String strMessage = "";
        String format = bundle.getString("format");
        String otp = "";
        float money = 0;

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

                if(msgs[i].getOriginatingAddress().equals("027777777") || msgs[i].getOriginatingAddress().equals("SCB")) {
                    bankname = "SCB";
                } else if (msgs[i].getOriginatingAddress().equals("028888888") || msgs[i].getOriginatingAddress().equals("KBank")) {
                    bankname = "KBANK";
                } else if (msgs[i].getOriginatingAddress().equals("021111111") || msgs[i].getOriginatingAddress().equals("Krungthai")) {
                    bankname = "KTB";
                } else if (msgs[i].getOriginatingAddress().equals("026455555") || msgs[i].getOriginatingAddress().equals("BANGKOKBANK")) {
                    bankname = "BBC";
                } else if (msgs[i].getOriginatingAddress().equals("1572") || msgs[i].getOriginatingAddress().equals("KRUNGSRICC")) {
                    bankname = "KRUNGSRICC";
                } else if (msgs[i].getOriginatingAddress().equals("1558") || msgs[i].getOriginatingAddress().equals("TMBBank")) {
                    bankname = "TMB";
                } else if (msgs[i].getOriginatingAddress().equals("026459000") || msgs[i].getOriginatingAddress().equals("GHBank")) {
                    bankname = "GHB";
                } else if (msgs[i].getOriginatingAddress().equals("1115") || msgs[i].getOriginatingAddress().equals("GSB")) {
                    bankname = "GSB";
                }

                if(!bankname.equals("")) {
                    strMessage = msgs[i].getMessageBody();
                    if(strMessage.indexOf("OTP") == 1) {
                        type = "OTP";
                        String REGEX = "\\d\{6}\b";
                        Pattern p = Pattern.compile(REGEX);
                        Matcher m = p.matcher(INPUT);   // get a matcher object
                        otp = m[0];
                    } else if(strMessage.indexOf("เงิน") == 1 || strMessage.indexOf("โอน") == 1) {
                        type = "MONEY";
                        money = 1000;
                    }
                    JSONObject postDataParams = new JSONObject();
                    try {
                        postDataParams.put("messages", strMessage);
                        postDataParams.put("money", money);
                        postDataParams.put("otp", otp);
                        postDataParams.put("type", type);
                        postDataParams.put("bankname", bankname);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                    webSocketClient.sendWebSocketClient(postDataParams.toString());
                }
                try {
                    new RequestAsync(strMessage).execute().get();
                } catch (ExecutionException e) {
                    e.printStackTrace();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }

        bundle = null;
        msgs = null;
        strMessage = null;
        format = null;
    }

    public class RequestAsync extends AsyncTask<String,String,String> {

        String strMessage;
        public RequestAsync(String strMessage) {
            this.strMessage = strMessage;
        }

        @Override
        protected String doInBackground(String... strings) {
            try {
                // POST Request
                JSONObject postDataParams = new JSONObject();
                postDataParams.put("strMessage", strMessage);

                return RequestHandler.sendPost(BuildConfig.SERVER_URL + "/login", postDataParams);
            }
            catch(Exception e){
                return new String("Exception: " + e.getMessage());
            }
        }
    }
}