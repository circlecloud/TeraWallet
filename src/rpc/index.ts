import Taro from '@tarojs/taro';

let host = 'https://teraapi.sixi.com'

function printRequest(method: string, path: string, data: any, response: any, cost: number) {
  var groupName = 'RPC CALL DEBUG'
  console.group(groupName);
  console.log('Request Method :', method);
  console.log('Request Path   :', path);
  console.log('Request Data   :', data);
  console.log('Response       :', response);
  console.log('Cost Time      :', cost);
  console.groupEnd();
}

function showError(content) {
  Taro.showModal({
    title: '网络请求错误',
    content,
    showCancel: false
  })
}

type METHOD = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

/**
 * 发起远程请求
 * @param {String} method HTTP方法
 * @param {String} path 路径
 * @param {String} data 参数
 */
async function request<T>(method: METHOD, path: string, data: any): Promise<T> {
  var startTime = new Date().getTime();
  var response: any;
  try {
    response = await Taro.request({
      url: `${host}${path}`,
      data,
      method
    })
    if (response.statusCode && response.statusCode != 200) {
      console.log(JSON.stringify(response.data));
      throw Error(response.data);
    }
    response = response.data;
  } catch (e) {
    showError(e + '');
    throw e;
  } finally {
    printRequest(method, path, data, response, new Date().getTime() - startTime)
    return response;
  }
}

function quickMethod(mtehod: METHOD) {
  return async function <T = any>(path: string, data?: any): Promise<T> {
    return await request<T>(mtehod, path, data);
  }
}

export default {
  request,
  get: quickMethod('GET'),
  post: quickMethod('POST'),
  put: quickMethod('PUT'),
  deleted: quickMethod('DELETE'),
}
