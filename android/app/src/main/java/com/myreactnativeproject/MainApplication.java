package com.myreactnativeproject;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.myreactnativeproject.splashDialogScreen.SplashScreenReactPackage;
import com.pusherman.networkinfo.RNNetworkInfoPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.theweflex.react.WeChatPackage;
import com.rnfs.RNFSPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
                    new RNNetworkInfoPackage(),
                    new RNGestureHandlerPackage(),
                    new WeChatPackage(),
                    new RNFSPackage(),
                    new SplashScreenReactPackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
