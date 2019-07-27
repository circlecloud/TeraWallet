import '@tarojs/async-await'
import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux';

import dva from './utils/dva';
import models from './models';

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
  require('nerv-devtools')
}

const app = dva.createApp({
  initialState: {},
  models
});

const store = app.getStore();

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/my/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '泰瑞管家',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#e6e6e6",
      selectedColor: "#2c2c2c",
      backgroundColor: "#f8f8f8",
      list: [{
        pagePath: 'pages/index/index',
        text: "首页",
        iconPath: "assets/images/home.png",
        selectedIconPath: "assets/images/home_select.png"
      }, {
        pagePath: 'pages/my/index',
        text: '我的',
        iconPath: "assets/images/my.png",
        selectedIconPath: "assets/images/my_select.png"
      }]
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
