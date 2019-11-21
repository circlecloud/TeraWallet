import { connect } from '@tarojs/redux';
import { AtNoticebar } from 'taro-ui';
import { View, Image } from '@tarojs/components';
import Taro, { Component, Config } from '@tarojs/taro';

import logoImg from '../../assets/images/logo.png';
import { mapModelProps, mapModelActions } from '../../models/utils';

import './index.scss';
import { Actions } from './model';
import BaseInfo from './components/base-info'
import { IndexProps, IndexState } from './type';
import sharePage from '../../components/sharePage';

// import WsClient from '../../rpc/socket'

const PAGE_NAME = 'index'

@connect(mapModelProps(PAGE_NAME), mapModelActions(PAGE_NAME, Actions))
//@ts-ignore
@sharePage()
class Index extends Component<IndexProps, IndexState> {
  config: Config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true
  }
  state = {
    notify: '通知: 钱包目前处于测试阶段 如果发现BUG 请及时反馈!'
  }

  switchWs() {
    // if (WsClient.connected) {
    //   WsClient.disconnect();
    // } else {
    //   WsClient.connect();
    // }
  }

  componentDidMount() {
    Taro.startPullDownRefresh();
  }

  onPullDownRefresh() {
    this.props[Actions.getCurrentInfo]();
  }

  render() {
    return (
      <View className='page page-index'>
        <AtNoticebar close marquee icon='volume-plus'>
          {this.state.notify}
        </AtNoticebar>
        <View className='logo' onClick={() => this.switchWs()}>
          <Image src={logoImg} className='img' mode='scaleToFill' />
        </View>
        <View className='page-title'>泰瑞管家</View>
        <BaseInfo info={this.props} />
      </View>
    )
  }
}

export default Index
