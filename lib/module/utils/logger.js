import { LocalLifeJinJingLogger, ReportType } from '@locallife/log';
export const NEARBY_FOOD_CUSTOM_EVENT_KEY = 'LOCAL_LIFE_LOG_NEARBY_FOOD_CUSTOM_EVENT';
// 快链为空上报
export const logLinkUrlNUll = (scene, itemClass, dataSource) => {
  const itemInfo = JSON.stringify(dataSource);
  const params = {
    itemClass: itemClass,
    scene: scene,
    condition: 'linkUrlNUll',
    params: itemInfo
  };
  LocalLifeJinJingLogger.reportLog2JinJing(NEARBY_FOOD_CUSTOM_EVENT_KEY, true, 'common_weekly_card_linkUrl_null', 'linkUrl为空', params, undefined, ReportType.CUSTOM_EVENT);
};
//# sourceMappingURL=logger.js.map