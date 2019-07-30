/**
 * @type P: Type of payload
 * @type C: Type of callback
 */
export type Dispatch = <P = any, C = (payload: P) => void>(action: {
  type: string;
  payload?: P;
  callback?: C;
  [key: string]: any;
}) => any;

export interface DefaultProps {
  dispatch: Dispatch
}

export interface DefaultModel<T> {
  namespace: string,
  state: T,
  effects?: { [key: string]: Function },
  reducers?: { [key: string]: Function },
  subscriptions?: { [key: string]: Function },
}
