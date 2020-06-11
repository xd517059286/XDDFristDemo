import axios from "axios";
import projectConfig from '../../../../project.config'
const router = require('../router');

// create an axios instance
const service = axios.create({
  baseURL: projectConfig.prefix, // url = base url + request url
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  },
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
});
// request interceptor
service.interceptors.request.use(
  config => {

    if (config.url.indexOf("undefined") > -1) {
      router.push({ path: "/" })
    }
    return config;
  },
  error => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */

  response => {
    const res = response.data;

    return res;
    // if the custom code is not 200, it is judged as an error.
    // if (!res.success) {
    //   Message({
    //     // message: res.message || "Error",
    //     message: "接口请求超时，请刷新后重试或联系管理员。",
    //     type: "error",
    //     duration: 10 * 1000
    //   });

    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login
    //     MessageBox.confirm(
    //       "You have been logged out, you can cancel to stay on this page, or log in again",
    //       "Confirm logout",
    //       {
    //         confirmButtonText: "Re-Login",
    //         cancelButtonText: "Cancel",
    //         type: "warning"
    //       }
    //     ).then(() => {
    //       store.dispatch("user/resetToken").then(() => {
    //         location.reload();
    //       });
    //     });
    //   }
    //   return Promise.reject(new Error(res.message || "Error"));
    // } else {
    //   return res;
    // }
  },
  error => {
    console.log("err" + error); // for debug
    // Message({
    //   message: "接口请求超时，请刷新后重试或联系管理员。",
    //   type: "error",
    //   duration: 10 * 1000
    // });
    return Promise.reject(error);
  }
);

export default service;
