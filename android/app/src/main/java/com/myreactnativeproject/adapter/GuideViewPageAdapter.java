package com.myreactnativeproject.adapter;

import android.content.Context;
import android.support.annotation.NonNull;
import android.support.v4.view.PagerAdapter;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Adapter;
import android.widget.TextView;

import com.myreactnativeproject.R;

import java.util.ArrayList;
import java.util.List;

public class GuideViewPageAdapter extends PagerAdapter {
    private Context mContext;
    private List<View> mViews = new ArrayList<>();
    public GuideViewPageAdapter(Context context,List<View> views){
        mViews.clear();
        this.mContext = context;
        this.mViews = views;
    }
    @Override
    public int getCount() {
        if(mViews == null){
            return 0;
        }else{
            return  mViews.size();
        }
    }

    // 来判断显示的是否是同一张图片，这里我们将两个参数相比较返回即可
    @Override
    public boolean isViewFromObject(@NonNull View view, @NonNull Object object) {
        return view == object;
    }

    // 当要显示的view可以进行缓存的时候，会调用这个方法进行显示view的初始化，我们将要显示的View加入到ViewGroup中，然后作为返回值返回即可
    @NonNull
    @Override
    public Object instantiateItem(@NonNull ViewGroup container, int position) {
        View view = getView(position,null,container);
        container.addView(view);
        return view;
    }

    // PagerAdapter只缓存要显示的图片，如果滑动的图片超出了缓存的范围，就会调用这个方法，将图片销毁
    @Override
    public void destroyItem(@NonNull ViewGroup container, int position, @NonNull Object object) {
        if(container != null && object != null){
            container.removeView(mViews.get(position));
        }
    }

    public View getView(int position,View view ,ViewGroup container){
        ViewPageHolder holder = null;
        if (holder == null) {
            holder  = new ViewPageHolder();
            view  = LayoutInflater.from(container.getContext()).inflate(R.layout.view_guide_layout,container,false);
            holder.mTextView = view.findViewById(R.id.guid_text);
            view.setTag(holder);
        }else{
            holder = (ViewPageHolder) view.getTag();
        }
        holder.mTextView.setText("欢迎页 " + position);
        return view;
    }

    class ViewPageHolder{
        TextView mTextView;
    }
}
