import { getInfo } from './service'
import { DefaultModel } from 'src/models/types';
import { IndexProps } from './type';

export default {
  namespace: 'index',
  state: {
    data: {
      version: 0,
      block: 0,
      supply: 0,
      percent: '0.00',
      lastMiner: 0,
      lastName: 'system',
      lastNumber: 0,
    }
  },
  effects: {
    *getCurrentInfo({ }, { call, put }) {
      let info = yield call(getInfo);
      yield put({
        type: "setState", payload: {
          data: info
        }
      });
    }
  },
  reducers: {
    setState(state: IndexProps, { payload }) {
      return { ...state, ...payload }
    }
  }
} as DefaultModel<IndexProps>
