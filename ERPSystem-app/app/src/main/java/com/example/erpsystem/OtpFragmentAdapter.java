package com.example.erpsystem;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class OtpFragmentAdapter extends BaseAdapter {
    Context mContext;
    JSONArray lists;

    public OtpFragmentAdapter(Context context, JSONArray lists) {
        this.mContext= context;
        this.lists = lists;
    }

    public int getCount() {
        return lists.length();
    }

    public Object getItem(int position) {
        return null;
    }

    public long getItemId(int position) {
        return 0;
    }

    public View getView(int position, View view, ViewGroup parent) {
        LayoutInflater mInflater =
                (LayoutInflater)mContext.getSystemService(Context.LAYOUT_INFLATER_SERVICE);

        if(view == null)
            view = mInflater.inflate(R.layout.listview_otpfragment, parent, false);

        try {
            JSONObject itemsObject = lists.getJSONObject(position);

            Date dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm").parse(itemsObject.getString("createdAt"));
            SimpleDateFormat formatter = new SimpleDateFormat("MM/dd HH:mm");
            String strDate = formatter.format(dateFormat);


            System.out.println("cccccccccc");
            System.out.println(strDate);
            System.out.println(itemsObject.getString("messages"));
            TextView tv_otp = (TextView)view.findViewById(R.id.tv_otp);
            tv_otp.setText(itemsObject.getString("otp"));

            TextView tv_time = (TextView)view.findViewById(R.id.tv_time);
            tv_time.setText(strDate.toString());

            TextView tv_message = (TextView)view.findViewById(R.id.tv_message);
            tv_message.setText(itemsObject.getString("messages"));
        } catch (JSONException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return view;
    }
}