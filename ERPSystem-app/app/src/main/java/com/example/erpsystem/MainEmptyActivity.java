package com.example.erpsystem;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class MainEmptyActivity extends AppCompatActivity {
    private static final int MAIN_ACTIVITY_REQUEST_CODE = 1;
    private static final int LOGIN_ACTIVITY_REQUEST_CODE = 2;
    SharedData sharedData = SharedData.getInstance();

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
        finish();
    }

    // This method is called when the second activity finishes
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        SharedData sharedData = SharedData.getInstance();

        // check that it is the SecondActivity with an OK result
        if (requestCode == MAIN_ACTIVITY_REQUEST_CODE) {
            if (resultCode == RESULT_OK) { // Activity.RESULT_OK
                if(sharedData.getToken() != "") {
                    Intent intent = new Intent();
                    setResult(RESULT_OK, intent);
                    finish();
                } else {
                    Toast.makeText(getApplicationContext(), "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง", Toast.LENGTH_LONG).show();
                }
            }
        } else if (requestCode == LOGIN_ACTIVITY_REQUEST_CODE) {
            if (resultCode == RESULT_OK) { // Activity.RESULT_OK
                if(sharedData.getToken() != "") {
                    Intent intent = new Intent();
                    setResult(RESULT_OK, intent);
                    finish();
                } else {
                    Toast.makeText(getApplicationContext(), "ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง", Toast.LENGTH_LONG).show();
                }
            }
        }
    }
}