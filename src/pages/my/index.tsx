import { connect } from '@tarojs/redux';
import { AtList, AtListItem } from 'taro-ui';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import coinKit from '../../utils/coin-kit';
import { mapDefaultProps } from '../../models/utils';
import defaultImage from '../../assets/images/logo.png';

import './index.scss';
import { MyIndexProps, MyState } from './type';

@connect(mapDefaultProps(My))
class My extends Component<MyIndexProps, MyState> {
  config: Config = {
    navigationBarTitleText: '个人中心',
    enablePullDownRefresh: true
  }
  state = {
    nickName: 'MiaoWoo',
    avatarUrl: defaultImage,
  }

  onPullDownRefresh() {
    const { dispatch } = this.props;
    if (dispatch) {
      dispatch({
        type: 'my/getAccounts',
        playload: '02078AC7F16BAF88F9A6F8FA05D5C9F697596402D9EB774A36C74E52A3470EA85B'
      })
    }
  }

  componentDidMount() {
    Taro.startPullDownRefresh();
  }

  render() {
    const {
      nickName,
      avatarUrl
    } = this.state;
    const accounts = this.props.accounts.map(a => {
      return <AtListItem
        key={a.Num}
        hasBorder={false}
        title={`${a.Num}(${a.Name})`}
        note={`${coinKit.toNumber(a.Value)}`}
        iconInfo={{
          size: 20,
          color: 'green',
          value: 'credit-card',
        }}
        extraThumb={defaultImage}
      />
    })
    return (
      <View className='page'>
        <View className='user flex-wrp'>
          <View className='avatar flex-item'>
            <Image className='userinfo-avatar' src={avatarUrl}></Image>
          </View>
          <View className='user-info flex-item'>
            <Text className='userinfo-nickname'>{nickName}</Text>
            <Text className='edit'>查看或编辑个人主页</Text>
          </View>
        </View>
        <View className='my'>
          <AtList hasBorder={false}>
            <AtListItem
              hasBorder={false}
              title='创建/绑定私钥'
              iconInfo={{
                size: 20,
                color: 'red',
                value: 'lock',
              }} />
            <AtListItem
              hasBorder={false}
              title='创建账户'
              iconInfo={{
                size: 20,
                color: 'green',
                value: 'credit-card',
              }} />
          </AtList>
          <View className='account'>
            <AtList >
              <AtListItem
                hasBorder={false}
                title='账户列表'
                iconInfo={{
                  size: 20,
                  color: 'blue',
                  value: 'numbered-list',
                }} />
              {accounts}
            </AtList>
          </View>
        </View>
      </View>
    )
  }
}

export default My
