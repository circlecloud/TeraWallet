import { DefaultModel } from '../../models/types';

import { getInfo } from './service';
import { IndexModel } from './type';

export default {
  namespace: 'index',
  state: {
    version: 0,
    block: 0,
    supply: 0,
    percent: '0.00',
    lastMiner: 0,
    lastName: 'system',
    lastNumber: 0,
  },
  effects: {
    *getCurrentInfo({ }, { call, put }) {
      let info = yield call(getInfo);
      yield put({
        type: "setState", payload: info
      });
    }
  },
  reducers: {
    setState(state: IndexModel, { payload }) {
      return { ...state, ...payload }
    }
  }
} as DefaultModel<IndexModel>
