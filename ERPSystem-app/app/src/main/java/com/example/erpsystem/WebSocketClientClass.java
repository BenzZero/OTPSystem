package com.example.erpsystem;

import android.app.Activity;
import android.app.Notification;
import android.app.NotificationManager;
import android.content.Context;
import android.content.Intent;
import android.provider.Settings;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import androidx.core.app.NotificationCompat;

import org.json.JSONException;
import org.json.JSONObject;

import java.net.URI;
import java.net.URISyntaxException;
import tech.gusavila92.websocketclient.WebSocketClient;

import static android.content.Context.NOTIFICATION_SERVICE;

public class WebSocketClientClass {
    private static WebSocketClient webSocketClient;
    final SharedData sharedData = SharedData.getInstance();
    private static Context context;
    final Notification notification = new Notification();

    public WebSocketClientClass (Context context) {
        this.context = context;
    }
    public void connectWebSocketClient() {
        URI uri;
        try {
            // Connect to local host
            uri = new URI(BuildConfig.SERVER_URLWS + "/socket/messages/" + sharedData.getToken());
        }
        catch (URISyntaxException e) {
            e.printStackTrace();
            return;
        }
        webSocketClient = new WebSocketClient(uri) {
            @Override
            public void onOpen() { Log.i("WebSocket", "Session is starting"); }
            @Override
            public void onTextReceived(String message) {
                Log.i("WebSocket", "Message received");
                System.out.println("aaaaaa");
                showNotification(message);
            }
            @Override
            public void onBinaryReceived(byte[] data) { }
            @Override
            public void onPingReceived(byte[] data) { }
            @Override
            public void onPongReceived(byte[] data) { }
            @Override
            public void onException(Exception e) {  System.out.println(e.getMessage()); }
            @Override
            public void onCloseReceived() {
                Log.i("WebSocket", "Closed ");
            }
        };
        /*
        webSocketClient.setConnectTimeout(10000);
        webSocketClient.setReadTimeout(60000);
        webSocketClient.enableAutomaticReconnection(5000);
        */
        webSocketClient.connect();
    }

    public void sendWebSocketClient(String message) {
        webSocketClient.send(message);
    }


    public void showNotification(String message) {
        try {
            JSONObject obj = new JSONObject(message);
            Notification notification =
                    new NotificationCompat.Builder(context) // this is context
                            .setSmallIcon(R.mipmap.ic_launcher)
                            .setContentTitle(obj.getString("type") + " " + obj.getString("bankname"))
                            .setContentText(obj.getString("messages"))
                            .setAutoCancel(true)
                            .setSound(Settings.System.DEFAULT_NOTIFICATION_URI)
                            .build();
            NotificationManager notificationManager =
                    (NotificationManager) context.getSystemService(NOTIFICATION_SERVICE);
            notificationManager.notify(1000, notification);
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
}
