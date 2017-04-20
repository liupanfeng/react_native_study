import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Navigator,
  ListView,
  NativeModules
} from 'react-native';
import NavigatorScene from './NavigatorScene';
class SimpleNavigationApp extends Component{
    render(){
        return(
            <Navigator
                style={{backgroundColor:'#ff00ffff'}}
                initialRoute={{title:"My initial scene",index:0}}
                renderScene={(route,navigator)=>
                    <NavigatorScene
                        title={route.title}
                        onForward={()=>{
                            const nextIndex=route.index+1;
                            navigator.push({
                                title:'Scene'+nextIndex,
                                index:nextIndex
                            });
                        }}
                        onBack={()=>{
                            if(route.index>0){
                                navigator.pop();
                            }
                        }}
                    />
                }
            />
        );
    }
}

AppRegistry.registerComponent('TestReactNative', () => SimpleNavigationApp);