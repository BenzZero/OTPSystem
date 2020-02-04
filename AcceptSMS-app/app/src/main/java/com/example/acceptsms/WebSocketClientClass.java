package com.example.acceptsms;

import android.util.Log;
import android.widget.Toast;

import java.net.URI;
import java.net.URISyntaxException;
import tech.gusavila92.websocketclient.WebSocketClient;

public class WebSocketClientClass {
    private static WebSocketClient webSocketClient;
    public void connectWebSocketClient() {
        URI uri;
        try {
            // Connect to local host
            uri = new URI(BuildConfig.SERVER_URLWS + "/socket/messages/sms00c3929506d431a87cd036be3f048349");
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
}
