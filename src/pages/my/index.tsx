import { connect } from '@tarojs/redux';
import Taro, { Component, Config } from '@tarojs/taro';
import { View } from '@tarojs/components';

import defaultImage from '../../assets/images/logo.png';
import { mapModelProps, mapModelActions } from '../../models/utils';

import './index.scss';
import { Actions } from './model';
import { MyIndexProps, MyState } from './type';
import { UserInfo, AccountHeader, AccountList } from './components'

const PAGE_NAME = 'my'

@connect(mapModelProps(PAGE_NAME), mapModelActions(PAGE_NAME, Actions))
class My extends Component<MyIndexProps, MyState> {
  config: Config = {
    navigationBarTitleText: '个人中心',
    enablePullDownRefresh: true
  }
  state = {
    nickName: 'TeraWallet',
    avatarUrl: defaultImage,
    publicKey: ''
  }
  defaultProps = {
    accounts: []
  }

  onPullDownRefresh() {
    if (this.state.publicKey) {
      this.props[Actions.getAccounts](this.state.publicKey)
    } else {
      Taro.stopPullDownRefresh();
      Taro.showToast({
        title: '尚未绑定账号',
        icon: 'none',
        duration: 1500
      })
    }
  }

  componentDidMount() {
    // Taro.startPullDownRefresh();
  }

  render() {
    const {
      nickName,
      avatarUrl
    } = this.state;
    return (
      <View className='page'>
        <UserInfo nickName={nickName} avatarUrl={avatarUrl} />
        <View className='my'>
          <AccountHeader />
          <View className='account' />
          <AccountList accounts={this.props.accounts} defaultImage={defaultImage} />
        </View>
      </View>
    )
  }
}

export default My
