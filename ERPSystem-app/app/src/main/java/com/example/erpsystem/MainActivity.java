package com.example.erpsystem;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import android.os.Bundle;
import android.view.MenuItem;
import com.google.android.material.bottomnavigation.BottomNavigationView;

public class MainActivity extends AppCompatActivity {

    SharedData sharedData = SharedData.getInstance();
    BottomNavigationView bottomNavigationView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        openFragment(OtpFragment.newInstance("", ""));

        bottomNavigationView = findViewById(R.id.bottomNavigationView);
        bottomNavigationView.setOnNavigationItemSelectedListener(
                new BottomNavigationView.OnNavigationItemSelectedListener() {
                    @Override
                    public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                        switch (item.getItemId()) {
                            case R.id.menu_otp:
                                // TODO
                                openFragment(OtpFragment.newInstance("", ""));
                                return true;
                            case R.id.menu_money:
                                // TODO
                                openFragment(MoneyFragment.newInstance("", ""));
                                return true;
                            case R.id.menu_smsAll:
                                // TODO
                                openFragment(SmsAllFragment.newInstance("", ""));
                                return true;
                            case R.id.menu_setting:
                                // TODO
                                openFragment(SettingFragment.newInstance("", ""));
                                return true;
                        }
                        return false;
                    }
                });
    }

    public void openFragment(Fragment fragment) {
        FragmentTransaction transaction = getSupportFragmentManager().beginTransaction();
        transaction.replace(R.id.container, fragment);
        transaction.addToBackStack(null);
        transaction.commit();
    }


}
