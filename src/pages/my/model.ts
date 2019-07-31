import { DefaultModel } from '../../models/types';

import { getAccounts } from './service';
import { MyProps } from './type';

let Actions = {
  getAccounts: 'getAccounts'
}

export default {
  namespace: 'my',
  state: {
    accounts: []
  },
  effects: {
    *[Actions.getAccounts]({ payload }, { call, put }) {
      let accounts = yield call(getAccounts, payload);
      yield put({
        type: "setState",
        payload: accounts
      });
    }
  },
  reducers: {
    setState(state: MyProps, { payload }) {
      return { ...state, ...payload }
    }
  }
} as DefaultModel<MyProps>

export { Actions }
