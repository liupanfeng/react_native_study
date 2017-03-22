/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  NativeModules
} from 'react-native';

//调用本地方法，实现拨打电话功能。//////////////////////////////////////////////////
var MOCKED_MOVIES_DATA = [
  {title: '拨打电话', year: '2015', posters:
  {thumbnail: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1489647585&di=c4ab9ffb4f1dd84230d6f61cdf05480d&src=http://www.dabaoku.com/sucaidatu/keji/yingshi/75_457.jpg'}},
];

export default class ReactDemo extends Component {
  call(){
         NativeModules.ReactNativeModule.callTelephone();
    };
  render() {
    var movie=MOCKED_MOVIES_DATA[0];
    return (
        <View style={styles.container}>

          <View style={styles.rightContainer}>
            <Text style={styles.title}
            onPress={this.call.bind(this)}>{movie.title}</Text>
          </View>
        </View>
    );
    var movie = MOCKED_MOVIES_DATA[0];
  }
}


//使用props 定义问候语模板///////////////////////////////////////////////////////////////
class Greeting extends Component{
    render(){
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

class LotsOfGreetings extends Component{
    render(){
        return (
            <View   style={{alignItems:'center',marginTop:60}}>
                <Greeting name='lpf'/>
                <Greeting name='zxw'/>
                <Greeting name='smy'/>
            </View>
        );
    }
}
//state 控制属性，动态变化,一闪一闪亮晶晶
class Blink extends Component{
    constructor(props){
        super(props);
        this.state={showText:true};
        // 每1000毫秒对showText状态做一次取反操作
           setInterval(() => {
             this.setState({ showText: !this.state.showText });
           }, 1000);
    }

    render(){
        let display=this.state.showText?this.props.text:' ';
        return(
            <Text>{display}</Text>
        );
    }
}

class BlinkApp extends Component{
    render(){
        return(
            <View>
                <Blink text='I love to bink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  rightContainer:{
    flex: 1
  },

  thumbnail: {
    width: 53,
    height: 81
  },


  title: {
    fontSize: 20,
    marginBottom: 8,
    marginRight:120,
    marginLeft:120,
    color:'#ffffff',
    backgroundColor: '#333333',
    borderRadius: 25,
    textAlign: 'center'
  },
  year: {
    textAlign: 'center'
  }

});

AppRegistry.registerComponent('TestReactNative', () => BlinkApp);





