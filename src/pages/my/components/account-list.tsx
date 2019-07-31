import { AtList, AtListItem } from "taro-ui";

import coinKit from "../../../utils/coin-kit";
import { Account } from '../../../rpc/types';

const AccountList = ({ accounts, defaultImage }) => (
  <AtList >
    <AtListItem
      hasBorder={false}
      title='账户列表'
      iconInfo={{
        size: 20,
        color: 'blue',
        value: 'numbered-list',
      }} />
    {(accounts || []).map((a: Account) => {
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
    })}
  </AtList>
)

export default AccountList
