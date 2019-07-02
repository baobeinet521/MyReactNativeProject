package com.myreactnativeproject.activity;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.myreactnativeproject.splashDialogScreen.SplashScreen;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "MyReactNativeProject";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        SplashScreen.dismissSpla();
    }
}
