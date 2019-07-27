export interface IndexProps {
  dispatch?: any,
  data: IndexData
}
export interface IndexData {
  version: number;
  block: number;
  supply: number;
  percent: string;
  lastMiner: number;
  lastName: string;
  lastNumber: number;
}
