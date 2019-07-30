import Taro from '@tarojs/taro';

import { getAccountListByKey } from '../../rpc/tera';

async function getAccounts(key: string) {
  Taro.showLoading({
    title: '加载中...'
  })
  let result = await getAccountListByKey(key);
  Taro.hideLoading()
  Taro.stopPullDownRefresh()
  return { accounts: result };
}

export { getAccounts }
