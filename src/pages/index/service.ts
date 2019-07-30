import Taro from '@tarojs/taro';

import coinKit from '../../utils/coin-kit'
import { getCurrentInfo, getBlockInfo, getAccount, getHistoryTransactions } from '../../rpc/tera'

const MAX_CENT = 1e9

async function getInfo() {
  Taro.showLoading({
    title: '加载中...'
  })
  let info = await getCurrentInfo();
  let system = await getAccount(0);
  let lastBlock = await getBlockInfo(info.MaxNumBlockDB);
  let lastTrs = await getHistoryTransactions(lastBlock.Miner)
  for (const tr of lastTrs) {
    if (tr.CorrID == 0 && tr.Direct == "+") {
      lastTrs = tr;
      break;
    }
  }
  let supply = MAX_CENT - coinKit.toNumber(system.Value)
  Taro.hideLoading()
  Taro.stopPullDownRefresh()
  return {
    version: info.VersionNum,
    block: info.CurBlockNum,
    supply: supply,
    percent: (supply / MAX_CENT * 100).toFixed(5),
    lastMiner: lastBlock.Miner,
    lastName: lastBlock.MinerName,
    lastNumber: coinKit.toNumber(lastTrs),
  }
}

export { getInfo }
