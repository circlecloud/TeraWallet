export interface DefaultModel<T> {
  namespace: string,
  state: T,
  effects?: { [key: string]: Function },
  reducers?: { [key: string]: Function },
  subscriptions?: { [key: string]: Function },
}
