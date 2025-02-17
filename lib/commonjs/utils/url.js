"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPayHost = exports.getHost = exports.URLS = exports.LBS_PAY_HOST = exports.LBS_HOST = exports.KWAI_URLS = exports.HOSTS = void 0;
var _env = require("./env");
const LBS_HOST = exports.LBS_HOST = {
  online: 'https://lbs.kuaishou.com',
  pre: 'https://ll-mfe.prt.kuaishou.com',
  staging: 'https://ll-mfe.staging.kuaishou.com'
}[_env.env];
const LBS_PAY_HOST = exports.LBS_PAY_HOST = {
  online: 'https://www.kuaishoupay.com',
  pre: 'https://kspay-prt.test.gifshow.com',
  staging: 'https://kspay-staging.test.gifshow.com'
}[_env.env];
const getHost = projectName => {
  return `${LBS_HOST}${projectName ? '/' + projectName : ''}`;
};
exports.getHost = getHost;
const getPayHost = projectName => {
  return `${LBS_PAY_HOST}${projectName ? '/' + projectName : ''}`;
};
exports.getPayHost = getPayHost;
const HOSTS = exports.HOSTS = {
  TRANSACTION_HOST: getHost(),
  // trasaction项目host
  COUPON_HOST: getHost('coupon'),
  // coupon项目host
  MERCHANT_HOST: getHost('merchant-shop') // merchant项目host
};
const URLS = exports.URLS = {
  // transaction项目链接
  TRANSACTION_COUPON_PAGE: '/transaction/coupon/index.html',
  TRANSACTION_COMMON_PAGE: '/common/index.html',
  SHOP_LIST: '/stores',
  // 适用门店列表
  ORDER_REFUND: '/order-refund',
  // 申请退款页
  PAY_SUCCESS: '/pay-success',
  // 支付成功
  ORDER_SNAPSHOT: '/order-snapshot',
  // coupon项目链接
  COUPON_REFUND_DETAIL: '/pages/return-detail/index',
  // 退款详情
  MERCHANT_ORDER_LIST: '/order',
  // 订单列表页
  ORDER_DETAIL: '/order-detail',
  // 订单详情
  NATIVE_POI_DETAIL: 'kwai://poi?poiId='
};
const KWAI_URLS = exports.KWAI_URLS = {
  // kwai链接
  GUIDE: 'kwai://business/nav',
  // 导航
  // native poi详情
  NATIVE_POI_DETAIL: 'kwai://businesspoi',
  // 订单详情
  ORDER_DETAIL: 'kwai://krn?bundleId=LocalLifeOrder&componentName=orderDetail'
};
//# sourceMappingURL=url.js.map