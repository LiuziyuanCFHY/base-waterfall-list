"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IFetchType = exports.FEED_CARD_TYPE = exports.ChannelSourceEnum = void 0;
// 为了feed能够展示不同卡片，增加此类型
let FEED_CARD_TYPE = exports.FEED_CARD_TYPE = /*#__PURE__*/function (FEED_CARD_TYPE) {
  /** 默认展示的卡片  */
  FEED_CARD_TYPE[FEED_CARD_TYPE["DEFAULT_CARD"] = -1] = "DEFAULT_CARD";
  /** 普通商品卡  */
  FEED_CARD_TYPE[FEED_CARD_TYPE["COMMON_GOOD_CARD"] = 1] = "COMMON_GOOD_CARD";
  /** 周周小促  */
  FEED_CARD_TYPE[FEED_CARD_TYPE["WEEKLY_CARD"] = 2] = "WEEKLY_CARD";
  return FEED_CARD_TYPE;
}({});
let IFetchType = exports.IFetchType = /*#__PURE__*/function (IFetchType) {
  IFetchType["PullUp"] = "PullUp";
  // 上拉加载
  IFetchType["ClickMore"] = "ClickMore"; // 点击更多
  return IFetchType;
}({});
let ChannelSourceEnum = exports.ChannelSourceEnum = /*#__PURE__*/function (ChannelSourceEnum) {
  ChannelSourceEnum["POI_DETAIL"] = "POI_DETAIL";
  ChannelSourceEnum["GOODS_DETAIL"] = "GOODS_DETAIL";
  return ChannelSourceEnum;
}({});
//# sourceMappingURL=index.js.map