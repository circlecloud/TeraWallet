/*
 * @Author: Tuisku
 * @Date: 2018-12-03 10:27:38
 * @LastEditors: Tuisku
 * @LastEditTime: 2018-12-14 09:37:03
 * @Description: dva帮助类，此文件请勿修改
 */
import { create } from 'dva-core';
import createLoading from 'dva-loading';

let app;
let registered: boolean;

function createApp(opt) {
  app = create(opt);
  app.use(createLoading({}));
  if (!registered) opt.models.forEach(model => app.model(model))
  registered = true
  app.start();
  app.getStore = () => app._store;
  app.use({
    onError(err) {
      console.log(err)
    },
  })
  app.dispatch = app._store.dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
}
