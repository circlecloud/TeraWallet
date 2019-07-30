import { DefaultProps } from "../../models/types";

export type IndexProps = IndexModel & DefaultProps

export interface IndexModel {
  version: number;
  block: number;
  supply: number;
  percent: string;
  lastMiner: number;
  lastName: string;
  lastNumber: number;
}
export interface IndexState {
  notify: string
}
