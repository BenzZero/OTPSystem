package com.example.erpsystem;

import android.app.Notification;
import android.content.Intent;
import android.os.Bundle;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.NotificationCompat;

public class MainEmptyActivity extends AppCompatActivity {
    private static final int MAIN_ACTIVITY_REQUEST_CODE = 1;
    private static final int LOGIN_ACTIVITY_REQUEST_CODE = 2;
    SharedData sharedData = SharedData.getInstance();
    public static final String NOTIFICATION_CHANNEL_ID = "10001" ;
    private final static String default_notification_channel_id = "default" ;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Intent activityIntent;
        // go straight to main if a token is stored
        if (sharedData.getToken() != "") {
            activityIntent = new Intent(this, MainActivity.class);
            startActivityForResult(activityIntent, MAIN_ACTIVITY_REQUEST_CODE);
        } else {
            activityIntent = new Intent(this, LoginActivity.class);
            startActivityForResult(activityIntent, LOGIN_ACTIVITY_REQUEST_CODE);
        }

    }

    // This method is called when the second activity finishes
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        SharedData sharedData = SharedData.getInstance();

        Intent activityIntent;
        if (requestCode == LOGIN_ACTIVITY_REQUEST_CODE || requestCode == MAIN_ACTIVITY_REQUEST_CODE) {
//          if (resultCode == RESULT_OK) { // Activity.RESULT_OK
            if(sharedData.getToken() != "") {
                WebSocketClientClass webSocketClient = new WebSocketClientClass(this);
                webSocketClient.connectWebSocketClient();
                activityIntent = new Intent(this, MainActivity.class);
                startActivityForResult(activityIntent, MAIN_ACTIVITY_REQUEST_CODE);
            } else {
                activityIntent = new Intent(this, LoginActivity.class);
                startActivityForResult(activityIntent, LOGIN_ACTIVITY_REQUEST_CODE);
            }
//          }
        }
    }
}