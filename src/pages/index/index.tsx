import { connect } from '@tarojs/redux';
import { AtCard, AtNoticebar } from 'taro-ui';
import { View, Image } from '@tarojs/components';
import Taro, { Component, Config } from '@tarojs/taro';

import logoImg from '../../assets/images/logo.png';
import { mapDefaultProps } from '../../models/utils';

import './index.scss';
import { IndexProps, IndexState } from './type';

@connect(mapDefaultProps(Index))
class Index extends Component<IndexProps, IndexState> {
  config: Config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true
  }
  state = {
    notify: '通知: 钱包目前处于测试阶段 如果发现BUG 请及时反馈!'
  }

  componentDidMount() {
    Taro.startPullDownRefresh();
  }

  async onPullDownRefresh() {
    await this.props.dispatch({
      type: 'index/getCurrentInfo'
    })
  }

  render() {
    const data = this.props
    const info = (
      <AtCard className='base-info' title='基本信息'>
        <View>软件版本: {data.version}</View>
        <View>当前高度: {data.block}</View>
        <View>流通数量: {data.supply}</View>
        <View>百 分 比: {data.percent}</View>
        <View>当前收益: {data.lastNumber}</View>
        <View>来    自: {data.lastMiner} {data.lastName}</View>
      </AtCard>
    )
    return (
      <View className='page page-index'>
        <AtNoticebar close marquee icon='volume-plus'>
          {this.state.notify}
        </AtNoticebar>
        <View className='logo'>
          <Image src={logoImg} className='img' mode='scaleToFill' />
        </View>
        <View className='page-title'>泰瑞管家</View>
        {info}
      </View>
    )
  }
}

export default Index
