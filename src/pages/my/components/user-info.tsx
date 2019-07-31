import { View, Text, Image } from '@tarojs/components';

import './components.scss'

export default ({ avatarUrl, nickName }) => (
  <View className='user flex-wrp'>
    <View className='avatar flex-item'>
      <Image className='userinfo-avatar' src={avatarUrl}></Image>
    </View>
    <View className='user-info flex-item'>
      <Text className='userinfo-nickname'>{nickName}</Text>
      <Text className='edit'>查看或编辑个人主页</Text>
    </View>
  </View>
)
