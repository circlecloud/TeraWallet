import { Account } from '../../rpc/types';
import { DefaultProps } from '../../models/types';

export type MyIndexProps = MyProps & DefaultProps

export interface MyProps {
  accounts: Account[];
}
export interface MyState {
  nickName: string;
  avatarUrl: any;
}
