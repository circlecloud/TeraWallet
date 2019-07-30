import { DefaultModel } from '../../models/types';

import { getAccounts } from './service';
import { MyProps } from './type';

export default {
  namespace: 'my',
  state: {
    accounts: []
  },
  effects: {
    *['getAccounts']({ playload }, { call, put }) {
      let accounts = yield call(getAccounts, playload);
      yield put({
        type: "setState", playload: accounts
      });
    }
  },
  reducers: {
    setState(state: MyProps, { playload }) {
      return { ...state, ...playload }
    }
  }
} as DefaultModel<MyProps>
