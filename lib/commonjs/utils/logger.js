"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logLinkUrlNUll = exports.NEARBY_FOOD_CUSTOM_EVENT_KEY = void 0;
var _log = require("@locallife/log");
const NEARBY_FOOD_CUSTOM_EVENT_KEY = exports.NEARBY_FOOD_CUSTOM_EVENT_KEY = 'LOCAL_LIFE_LOG_NEARBY_FOOD_CUSTOM_EVENT';
// 快链为空上报
const logLinkUrlNUll = (scene, itemClass, dataSource) => {
  const itemInfo = JSON.stringify(dataSource);
  const params = {
    itemClass: itemClass,
    scene: scene,
    condition: 'linkUrlNUll',
    params: itemInfo
  };
  _log.LocalLifeJinJingLogger.reportLog2JinJing(NEARBY_FOOD_CUSTOM_EVENT_KEY, true, 'common_weekly_card_linkUrl_null', 'linkUrl为空', params, undefined, _log.ReportType.CUSTOM_EVENT);
};
exports.logLinkUrlNUll = logLinkUrlNUll;
//# sourceMappingURL=logger.js.map