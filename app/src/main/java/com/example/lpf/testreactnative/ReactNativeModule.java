package com.example.lpf.testreactnative;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.support.v4.app.ActivityCompat;
import android.widget.Toast;
import android.content.Context;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Administrator on 2016/10/18.
 */

public class ReactNativeModule extends ReactContextBaseJavaModule {


  private Context mContext;

  public ReactNativeModule(ReactApplicationContext reactContext) {
    super(reactContext);
    mContext = reactContext;
  }

  @Override
  public String getName() {

    //返回的这个名字是必须的，在rn代码中需要这个名字来调用该类的方法。
    return "ReactNativeModule";
  }


  @ReactMethod
  public void callTelephone() {
    //用intent启动拨打电话
    Intent intent = new Intent(Intent.ACTION_CALL, Uri.parse("tel:15313112160"));
    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
    if (ActivityCompat.checkSelfPermission(mContext, Manifest.permission.CALL_PHONE) != PackageManager.PERMISSION_GRANTED) {
      // TODO: Consider calling
      //    ActivityCompat#requestPermissions
      // here to request the missing permissions, and then overriding
      //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
      //                                          int[] grantResults)
      // to handle the case where the user grants the permission. See the documentation
      // for ActivityCompat#requestPermissions for more details.
      return;
    }
    mContext.startActivity(intent);
  }


}
