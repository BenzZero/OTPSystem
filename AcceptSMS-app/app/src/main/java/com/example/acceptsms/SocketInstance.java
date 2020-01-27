package com.example.acceptsms;

import android.app.Application;
import android.widget.Toast;

import com.github.nkzawa.socketio.client.IO;
import com.github.nkzawa.socketio.client.Socket;
import java.net.URISyntaxException;

public class SocketInstance extends Application {
    private Socket iSocket;
    private static final String URL = "http://192.168.0.107:3000/api/messages/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6eyJpZCI6MSwidXNlcm5hbWUiOiJCZW56In0sImlhdCI6MTU4MDEzODQ5MiwiZXhwIjoxNTgwMjI0ODkyfQ.QqRjdaU-AYEW6voYRgT2Wqm-p5185X39ff5HxUt6d0k";

    @Override
    public void onCreate() {
        super.onCreate();
        try {
            IO.Options opts = new IO.Options();
            opts.query = "auth_token=" + "xxxxx";
            iSocket = IO.socket(URL, opts);
        } catch (URISyntaxException e) {
            throw new RuntimeException(e);
        }
    }
    public Socket getSocketInstance(){
        return iSocket;
    }
}