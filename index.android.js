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
  TextInput,
  ScrollView,
  Navigator,
  ListView,
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

//学习使用style，进行样式控制。注意，在设置样式的时候，可以传入一个数组，在数组位置靠后的那个优先级比较高，间接实现继承。
//另外使用styleSheet，这样可以实现样式复用提高代码利用率

class LotsOfStyles extends Component{
    render(){
        return(
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigBlue}>just bigBlue</Text>
                <Text style={[styles.red,styles.bigBlue]}>red, then bigBlue</Text>
                <Text style={[styles.bigBlue,styles.red]}>bigBlue, then red</Text>

            </View>
        );
    }
}

//指定组件的宽高，如果使用数值，这些数值是没有单位的，是一些与设别像素无关的逻辑点。
//当然也可以设置flex，这个相当于android中的weight，会按照比例去占屏幕的宽高。
class FlexDimensionsBasics extends Component {
    render(){
        return (
            <View style={{flex:1}}>
               <View style={{flex: 1, backgroundColor: '#ff0000'}} />
               <View style={{flex: 2, backgroundColor: '#ffff00'}} />
               <View style={{flex: 3, backgroundColor: '#00ffff'}} />
            </View>
        );
    }
}

//使用FlexBox布局，我们在React Native中使用FlexBox规则来指定某个组件的子元素布局。FlexBox可以在不同分别率的手机上提供一致的布局。
//一般来说，FlexDirection、alignItems、justifyContent三个样式属性就能满足大多数属性布局的需求。
//注意：flexDirection的默认值是column而不是row，而flex也只能指定一个数字值。
//justifyContent可以决定子元素沿着主轴的排列方式。子元素应该挨着主轴的起始端还是末尾段排列？亦或是应该均匀分布，对应的这些的可能选项：
//flex-start、center、flex-end、space-around(均匀分布)以及space-between
class FlexDirectionBasics extends Component{
    render(){
        return(
            <View style={{flex: 1,flexDirection:'row'}}>
              <View style={{flex: 1, backgroundColor: '#ff0000'}} />
              <View style={{flex: 2, backgroundColor: '#ffff00'}} />
              <View style={{flex: 3, backgroundColor: '#00ffff'}} />
            </View>
        );
    }
}
//flex-start、center、flex-end、space-around(均匀分布)以及space-between
class JustifyContentBasic extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                flexDirection:'row',
                justifyContent:'space-around'
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}
//在组件的style中指定alignItem可以决定子元素沿着次轴的相对位置（与主轴垂直的轴）的排列方式。子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或是应该均匀分布，
//对应的选项：flex-start,flext-end,center以及stretch
//注意：要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
class AlignItemsBasics  extends Component{
    render(){
        return (
            <View style={{
                flex:1,
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'flex-end'
            }}>
             <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
             <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
             <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}


//TextInput是一个允许用户输入文本的基础组件。它有一个名为onChangeText的属性，此属性接受一个函数，而此函数会在文本变化时被调用。
//另外还有一个名为onSubmitEditing的属性，会在文本被提交后（用户按下软键盘上的提交键）调用。
//假如我们要实现当用户输入时，实时将其以单词为单位翻译为另一种文字。我们假设这另一种文字来自某个吃货星球，只有一个单词： 🍕。所以"Hello there Bob"将会被翻译为"🍕🍕🍕"。
class PizzaTranslator extends Component{
    constructor(props){
        super(props);
        this.state={'text':' '};
    }
    render(){
        return (
            <View style={{padding:10}}>
                <TextInput
                style={{height:40}}
                placeholder="Type here to translate!"
                onChangeText={(text)=>this.setState({text})}
                />
                <Text style={{padding:10,fontSize:40}}>
                    {this.state.text.split(' ').map((word)=>word&&'口').join(' ')}
                </Text>
            </View>
        );
    }
}

class IScrolledDownAndWhatHappenedNextShockedMe  extends Component{
    render(){
        return(
            <ScrollView style={{
                flex:1
            }}>
                <Text style={{fontSize:36}}>Scroll me plz</Text>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>
                <Image style={{width:220,height:120}} source={require('./img/favicon.png')}></Image>

            </ScrollView>
        );
    }
}

//ListView组件用于显示一个垂直的的滚动的滚动列表，其中元素之间的结构近似仅仅数据不同。
//ListView更适合长列表，切元素个数可是删除。和ScrollView不同的是，ListView并不会马上渲染所有的元素.而是优先渲染屏幕上的可见元素。
//ListView组件必须的两个属性是dataSource和renderRow。dataSource是列表的数据源，而renderRow则逐个解析数据源中的数据，然后返回一个设定好的格式的组件来渲染。
class ListViewBasics extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

//注意组件前面的export default 关键字。它的意识是导出当前组件，以允许其他组件引入（import）或则使用当前组件，就像下面这样使用
//使用组件demo
import MyScene from './MyScene';
import NavigatorScene from './NavigatorScene';
class YoDawgApp extends Component {
  render() {
    return (
      <MyScene />
    )
  }
}

//使用Navigator
//场景已经说的够多了，下面我们来说一下navigator。首先需要渲染一个navigator组件，通过此组件的renderScene方法来渲染其他场景
//使用导航器经常会碰到“路由（route）”的概念。路由抽象自现实中的路牌，在RN中专指包含了一个场景的对象。renderScene方法完全是根据路由提供的场景信息来渲染控件的。
//将场景推入导航栈，要过渡新的场景，你需要了解pop和push方法。这两个方法由navigator对象提供。而这个对象就是上面的renderScene方法中传递的第二个参数。
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
   image:{
      width: 450, height: 338
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
  },
    red:{color:'red'},
    bigBlue:{
        color:'blue',
        fontWeight:'bold',
        fontSize:30
    }


});

AppRegistry.registerComponent('TestReactNative', () => SimpleNavigationApp);





