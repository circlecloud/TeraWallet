import { AtCard } from "taro-ui";
import { View } from "@tarojs/components";

export default ({ info }) => (
  <AtCard className='base-info' title='基本信息'>
    <View>软件版本: {info.version}</View>
    <View>当前高度: {info.block}</View>
    <View>流通数量: {info.supply}</View>
    <View>百 分 比: {info.percent}</View>
    <View>当前收益: {info.lastNumber}</View>
    <View>来    自: {info.lastMiner} {info.lastName}</View>
  </AtCard>
)
