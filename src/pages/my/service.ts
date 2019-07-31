import Taro from '@tarojs/taro';

import { getAccountListByKey, getAccount } from '../../rpc/tera';

async function getAccounts(key: string) {
  console.log(key)
  try {
    if (!key) { return { accounts: [] } }
    Taro.showLoading({
      title: '加载中...'
    })
    if (/[0-9]*/.test(key)) {
      let account = await getAccount(Number(key));
      key = account.PubKeyStr;
    }
    let result = await getAccountListByKey(key);
    return { accounts: result };
  } finally {
    Taro.hideLoading();
    Taro.stopPullDownRefresh();
  }
}

export { getAccounts }
