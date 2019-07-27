import rpc from './index'
import { BlockInfo, CurrentInfo, Account } from './types';

async function getCurrentInfo(): Promise<CurrentInfo> {
  return rpc.get('/api/v1/GetCurrentInfo')
}

async function getBlockInfo(blockNumber: number): Promise<BlockInfo> {
  let result = await rpc.get('/api/v1/GetBlockList', {
    StartNum: blockNumber,
    CountNum: 1
  })
  return result.arr[0];
}

async function getAccount(id: number): Promise<Account> {
  let result = await rpc.get('/api/v1/GetAccountList', {
    StartNum: id
  })
  return result.arr[0];
}

async function getHistoryTransactions(id: number, count: number = 3, getDes: number = 1) {
  let result = await rpc.get('/api/v1/GetHistoryTransactions', {
    AccountID: id,
    Count: count,
    GetDescription: getDes
  })
  return result.History;
}

export {
  getAccount,
  getCurrentInfo,
  getBlockInfo,
  getHistoryTransactions
}
