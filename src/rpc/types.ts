export interface PubKey {
  type: string;
  data: Buffer;
}

export interface Data {
  type: string;
  data: Buffer;
}

export interface Value {
  SumCOIN: number;
  SumCENT: number;
  OperationID: number;
  Smart: number;
  Data: Data;
}

export interface Reserve {
  type: string;
  data: Buffer;
}

export interface Latest {
  Type: number;
  BlockNum: number;
  TrNum: number;
  NextPos: number;
  Direct: string;
  CorrID: number;
  SumCOIN: number;
  SumCENT: number;
  Pos: number;
}

export interface Account {
  Currency: number;
  PubKey: PubKey;
  Name: string;
  Value: Value;
  BlockNumCreate: number;
  Adviser: number;
  Reserve: Reserve;
  Num: number;
  WN: string;
  PubKeyStr: string;
  Latest: Latest;
}

export interface PRICEDAO {
  NewAccount: number;
  NewSmart: number;
  NewTokenSmart: number;
}

export interface CurrentInfo {
  result: number;
  VersionNum: number;
  NETWORK: string;
  MaxNumBlockDB: number;
  CurBlockNum: number;
  MaxAccID: number;
  MaxDappsID: number;
  CurTime: number;
  DELTA_CURRENT_TIME: number;
  MIN_POWER_POW_TR: number;
  FIRST_TIME_BLOCK: number;
  CONSENSUS_PERIOD_TIME: number;
  NEW_SIGN_TIME: number;
  PRICE_DAO: PRICEDAO;
}

export interface BlockInfo {
  TreeHash: Buffer;
  AddrHash: Buffer;
  PrevHash: Buffer;
  SumHash: Buffer;
  SumPow: number;
  Reserv500: number;
  TrDataPos: number;
  TrDataLen: number;
  TrCount: number;
  Info: string;
  BlockNum: number;
  SeqHash: Buffer;
  Hash: Buffer;
  PowHash: Buffer;
  Power: number;
  bSave: boolean;
  Prepared: boolean;
  Num: number;
  Miner: number;
  MinerName: string;
  Hash1: Buffer;
  Hash2: Buffer;
}
