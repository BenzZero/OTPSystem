package com.example.acceptsms;

import android.content.Context;

import androidx.core.app.NotificationCompat;

public class Notification {
    private void showNotification(String eventtext, Context context) {

        NotificationCompat.Builder builder = new NotificationCompat.Builder(context);
        builder.setContentTitle("Title")
                .setContentText("content")
                .setSmallIcon(R.mipmap.ic_launcher)
                .setVisibility(NotificationCompat.VISIBILITY_PUBLIC);//to show content in lock screen
    }
}
