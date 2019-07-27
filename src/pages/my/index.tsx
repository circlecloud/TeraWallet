import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import defaultImage from '../../assets/images/logo.png'
import './index.scss'

class Index extends Component {
    config: Config = {
        navigationBarTitleText: '个人中心',
        disableScroll: true
    }
    state = {
        nickName: 'MiaoWoo',
        avatarUrl: defaultImage
    }
    render() {
        const {
            nickName,
            avatarUrl
        } = this.state;
        return (
            <View className='more'>
                <View className='user flex-wrp'>
                    <View className='avatar flex-item'>
                        <Image className='userinfo-avatar' src={avatarUrl}></Image>
                    </View>
                    <View className='user-info flex-item'>
                        <Text className='userinfo-nickname'>{nickName}</Text>
                        <Text className='edit'>查看或编辑个人主页</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Index