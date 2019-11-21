import { AtList, AtListItem } from "taro-ui";
import Taro from "@tarojs/taro";

const AccountHeader = () => (
  <AtList hasBorder={false}>
    <AtListItem
      hasBorder={false}
      title='创建/绑定私钥'
      iconInfo={{
        size: 20,
        color: 'red',
        value: 'lock',
      }}
    />
    <AtListItem
      hasBorder={false}
      title='创建账户'
      iconInfo={{
        size: 20,
        color: 'green',
        value: 'credit-card',
      }}
    />
  </AtList>
)

export default AccountHeader
