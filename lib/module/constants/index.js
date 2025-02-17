/**
 * 商品类型
 */
export let ITEM_TYPE_CODE = /*#__PURE__*/function (ITEM_TYPE_CODE) {
  /** 团购券  */
  ITEM_TYPE_CODE[ITEM_TYPE_CODE["GROUPON"] = 1] = "GROUPON";
  /** 代金券  */
  ITEM_TYPE_CODE[ITEM_TYPE_CODE["VOUCHER"] = 11] = "VOUCHER";
  /** 次卡  */
  ITEM_TYPE_CODE[ITEM_TYPE_CODE["TIMECARD"] = 21] = "TIMECARD";
  /** 日历票  */
  ITEM_TYPE_CODE[ITEM_TYPE_CODE["TICKET"] = 31] = "TICKET";
  return ITEM_TYPE_CODE;
}({});

/**
 * 商品类型
 */
export let FEED_CARD_TYPE = /*#__PURE__*/function (FEED_CARD_TYPE) {
  /** 默认展示的卡片  */
  FEED_CARD_TYPE[FEED_CARD_TYPE["DEFAULT_CARD"] = -1] = "DEFAULT_CARD";
  /** 普通商品卡  */
  FEED_CARD_TYPE[FEED_CARD_TYPE["COMMON_GOOD_CARD"] = 1] = "COMMON_GOOD_CARD";
  /** 周周小促  */
  FEED_CARD_TYPE[FEED_CARD_TYPE["WEEKLY_CARD"] = 2] = "WEEKLY_CARD";
  return FEED_CARD_TYPE;
}({});
//# sourceMappingURL=index.js.map