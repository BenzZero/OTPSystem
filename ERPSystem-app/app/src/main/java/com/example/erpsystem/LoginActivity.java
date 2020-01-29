package com.example.erpsystem;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.concurrent.ExecutionException;

public class LoginActivity extends AppCompatActivity {

    EditText usernameUI;
    EditText passwordUI;
    Button btLoginUI;

    String result;
    JSONObject objDataResult;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        usernameUI = (EditText) findViewById(R.id.et_username);
        passwordUI = (EditText) findViewById(R.id.et_password);
        btLoginUI = (Button) findViewById(R.id.bt_login);

        final SharedData sharedData = SharedData.getInstance();

        btLoginUI.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    result = new RequestAsync(usernameUI.getText().toString(), passwordUI.getText().toString()).execute().get();
                } catch (ExecutionException e) {
                    e.printStackTrace();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                try {
                    objDataResult = new JSONObject(result);
                    sharedData.setToken((String) objDataResult.get("token"));
                    sharedData.setName((String) objDataResult.get("name"));
                    sharedData.setRole((String) objDataResult.get("role"));
                    Intent intent = new Intent();
                    setResult(RESULT_OK, intent);
                    finish();
                } catch (JSONException e) {
                    Toast.makeText(getApplicationContext(), "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง", Toast.LENGTH_LONG).show();
                    e.printStackTrace();
                }
            }
        });

    }

    public class RequestAsync extends AsyncTask<String,String,String> {

        String username;
        String password;

        public RequestAsync(String username, String password) {
            this.username = username;
            this.password = password;
        }

        @Override
        protected String doInBackground(String... strings) {
            try {
                JSONObject postDataParams = new JSONObject();
                postDataParams.put("username", username);
                postDataParams.put("password", password);
                result =  RequestHandler.sendPost(BuildConfig.SERVER_URL + "/login", postDataParams);
                return result;
            }
            catch(Exception e){
                return new String("Exception: " + e.getMessage());
            }
        }
    }
}
