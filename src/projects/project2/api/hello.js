import request from '../utils/request.js';
const prefix = "/admin";
export function getSurvey(params) {
  return request({
    url: prefix + '/hello/demo',
    method: "get"
  });
}
export function getSurvey1(params) {
  return request({
    url: prefix + '/hello/demo1',
    method: "post"
  });
}
export function getCounting(param) {
  return request({
    url: prefix + "/minxingPlant/project/counting",
    method: "GET"
  });
}
