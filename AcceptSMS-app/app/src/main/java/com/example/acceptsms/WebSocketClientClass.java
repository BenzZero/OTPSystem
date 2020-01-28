package com.example.acceptsms;

import android.util.Log;
import android.widget.Toast;

import java.net.URI;
import java.net.URISyntaxException;
import tech.gusavila92.websocketclient.WebSocketClient;

public class WebSocketClientClass {
    private WebSocketClient webSocketClient;
    public void connectWebSocketClient() {
        URI uri;
        try {
            // Connect to local host
            uri = new URI(BuildConfig.SERVER_URLWS + "/messages/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6eyJpZCI6NywidXNlcm5hbWUiOiJiZW56In0sImlhdCI6MTU4MDE4OTk4OSwiZXhwIjoxNTgwMjc2Mzg5fQ.2yq3z7hRcU5A6O4-uWL9CpZBdKrQE9PzghwlduvAcwQ");
        }
        catch (URISyntaxException e) {
            e.printStackTrace();
            return;
        }
        webSocketClient = new WebSocketClient(uri) {
            @Override
            public void onOpen() {
                webSocketClient.send("xxxxxxxxx");
                Log.i("WebSocket", "Session is starting");
            }
            @Override
            public void onTextReceived(String message) {
                Log.i("WebSocket", "Message received");
            }
            @Override
            public void onBinaryReceived(byte[] data) {
            }
            @Override
            public void onPingReceived(byte[] data) {
            }
            @Override
            public void onPongReceived(byte[] data) {
            }
            @Override
            public void onException(Exception e) {
                Log.i("onException", "Message onException");
                System.out.println(e.getMessage());
            }
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
        System.out.println("yyyyyyyy");
        System.out.println(message.toString());
        webSocketClient.send("xxxxxxxxx");
    }
}
