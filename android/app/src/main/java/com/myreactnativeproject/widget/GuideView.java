package com.myreactnativeproject.widget;

import android.content.Context;
import android.os.Build;
import android.support.annotation.RequiresApi;
import android.text.TextUtils;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.myreactnativeproject.R;

public class GuideView extends View {
    private String mGuideString;
    public GuideView(Context context,String guideStr) {
        this(context,null,guideStr);
        this.mGuideString = guideStr;
    }

    public GuideView(Context context, AttributeSet attrs,String guideStr) {
        this(context, attrs,0);
        this.mGuideString = guideStr;

    }

    public GuideView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init(context);
    }

    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    public GuideView(Context context, AttributeSet attrs, int defStyleAttr, int defStyleRes) {
        super(context, attrs, defStyleAttr, defStyleRes);
        init(context);
    }

    public void init(Context context){
        if (context == null)
            return;
        View mView = LayoutInflater.from(context).inflate(R.layout.view_guide_layout,null);
        TextView mTextView;
        if (mView != null) {
            mTextView = mView.findViewById(R.id.guid_text);
            if(!TextUtils.isEmpty(mGuideString)){
                mTextView.setText(mGuideString);
            }
        }

    }
}
