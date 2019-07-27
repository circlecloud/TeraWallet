import { AtCard, AtNoticebar } from 'taro-ui'
import { connect } from '@tarojs/redux';
import { View, Image } from '@tarojs/components'
import Taro, { Component, Config } from '@tarojs/taro'

import './index.scss'
import logoImg from '../../assets/images/logo.png'
import { IndexProps } from './type';

@connect(({ index }): IndexProps => ({ ...index }))
export default class Index extends Component<IndexProps> {
  config: Config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true
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
    const {
      data
    } = this.props
    return (
      <View className='page page-index'>
        <AtNoticebar close marquee icon='volume-plus'>
          通知: 钱包目前处于测试阶段 如果发现BUG 请及时反馈!
        </AtNoticebar>
        <View className='logo'>
          <Image src={logoImg} className='img' mode='scaleToFill' />
        </View>
        <View className='page-title'>泰瑞管家</View>
        <AtCard className='base-info' title='基本信息'>
          <View>软件版本: {data.version}</View>
          <View>当前高度: {data.block}</View>
          <View>流通数量: {data.supply}</View>
          <View>百 分 比: {data.percent}</View>
          <View>当前收益: {data.lastMiner}</View>
          <View>来    自: {data.lastNumber} {data.lastName}</View>
        </AtCard>
      </View>
    )
  }
}
