import { View, Text, Image } from '@tarojs/components';

import './components.scss'
import Taro from '@tarojs/taro';

export default ({ avatarUrl, nickName, onClick = undefined }) => (
  <View className='user flex-wrp' onClick={onClick}>
    <View className='avatar flex-item'>
      <Image className='userinfo-avatar' src={avatarUrl}></Image>
    </View>
    <View className='user-info flex-item'>
      <Text className='userinfo-nickname'>{nickName}</Text>
      <Text className='edit'>点击登录账号</Text>
    </View>
  </View>
)
