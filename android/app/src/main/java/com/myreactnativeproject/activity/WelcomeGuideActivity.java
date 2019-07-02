package com.myreactnativeproject.activity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.view.ViewPager;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.myreactnativeproject.R;
import com.myreactnativeproject.adapter.GuideViewPageAdapter;
import com.myreactnativeproject.splashDialogScreen.SplashScreen;
import com.myreactnativeproject.widget.GuideView;

import java.util.ArrayList;
import java.util.List;

public class WelcomeGuideActivity extends Activity{
    private ViewPager mViewPager;
    private Button mStartUse;
    private List<View> mListViews = new ArrayList<>();

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_layout);
        mViewPager = findViewById(R.id.welcome_guide_viewPage);
        mStartUse = findViewById(R.id.start_use_btn);

        mListViews.clear();
        GuideView mGuideView1 = new GuideView(this,"欢迎页第一个");
        mListViews.add(mGuideView1);
        GuideView mGuideView2 = new GuideView(this,"欢迎页第二个");
        mListViews.add(mGuideView2);
        GuideView mGuideView3 = new GuideView(this,"欢迎页第三个");
        mListViews.add(mGuideView3);
        GuideView mGuideView4 = new GuideView(this,"欢迎页第四个");
        mListViews.add(mGuideView4);

        GuideViewPageAdapter mGuideViewPageAdapter = new GuideViewPageAdapter(this,mListViews);
        mViewPager.setAdapter(mGuideViewPageAdapter);
        mViewPager.addOnPageChangeListener(new ViewPager.OnPageChangeListener() {
            @Override
            public void onPageScrolled(int i, float v, int i1) {
                if (i == mListViews.size() - 1) {
                    mStartUse.setVisibility(View.VISIBLE);
                    mStartUse.setOnClickListener(new View.OnClickListener() {
                        @Override
                        public void onClick(View v) {
                            SplashScreen.hide(WelcomeGuideActivity.this);
                            Intent intent = new Intent(WelcomeGuideActivity.this,MainActivity.class);
                            startActivity(intent);
                            finish();
                        }
                    });

                }else{
                    mStartUse.setVisibility(View.GONE);
                }
            }

            @Override
            public void onPageSelected(int i) {

            }

            @Override
            public void onPageScrollStateChanged(int i) {

            }
        });

    }
}
