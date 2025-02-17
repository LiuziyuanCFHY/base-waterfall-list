function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { rem } from '@kid-ui/krn/lib/utils';
import { getProductIcon } from './getProductIcon';
import { COMMON_CARD_BRAND_LINE_HORIZONTAL_MARGIN, COMMON_CARD_CONTENT_PADDING, COMMON_CARD_DESC_LINE_HEIGHT, COMMON_CARD_DESC_TO_TITLE_MARGIN, COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT, COMMON_CARD_POI_HEIGHT, COMMON_CARD_PRICE_HEIGHT, COMMON_CARD_PRICE_TOP_MARGIN, COMMON_CARD_PRICE_VERTICAL_MARGIN, COMMON_CARD_TITLE_FONT, COMMON_CARD_TITLE_ICON_RIGHT_MARGIN, COMMON_CARD_TITLE_LINE_HEIGHT, COMMON_CARD_TITLE_TOP_PADDING, HEAD_IMG_MARGIN_RIGHT, ONE_LINE_TITLE_FONT, TOTAL_HEIGHT } from '../components/waterFallList/config/config';
import { FEED_CARD_TYPE, ITEM_TYPE_CODE } from '../constants';
import { isNotEmptyString } from '@locallife/utils';
let adaptScreen = true;
export const productAdapter = size => {
  return adaptScreen ? rem(size) : size;
};
export class AdaptScreenUtils {
  static setAdaptScreen(adapt = true) {
    if (this.isInit) {
      return;
    }
    adaptScreen = adapt;
    this.isInit = true;
  }
}
_defineProperty(AdaptScreenUtils, "isInit", false);
const CHAR_TYPE = {
  CAPITAL: 'capital',
  LOWER: 'lower',
  NUMBER: 'number',
  SPACE: 'space',
  CHINESE: 'chinese',
  BRACKET: 'bracket'
};
const CHAR_WIDTHS = {
  [CHAR_TYPE.CAPITAL]: 11,
  [CHAR_TYPE.LOWER]: 8.6,
  [CHAR_TYPE.NUMBER]: 9.9,
  [CHAR_TYPE.SPACE]: 4,
  [CHAR_TYPE.CHINESE]: 17.3,
  [CHAR_TYPE.BRACKET]: 5.95
};
function getCharType(char) {
  if (/[A-Z]/.test(char)) {
    return CHAR_TYPE.CAPITAL;
  } else if (/([a-z]|[\u0021-\u002F])/.test(char)) {
    return CHAR_TYPE.LOWER;
  } else if (/\d/.test(char)) {
    return CHAR_TYPE.NUMBER;
  } else if (/\s/.test(char)) {
    return CHAR_TYPE.SPACE;
  } else if (char === '【' || char === '】') {
    // 直接匹配【和】
    return CHAR_TYPE.BRACKET; // 匹配括号
  } else {
    return CHAR_TYPE.CHINESE;
  }
}
const getStrWidth = (str, fontSize) => {
  const scale = fontSize / 17;
  const width = Array.from(str).reduce((sum, char) => {
    const charType = getCharType(char);
    const charWidth = CHAR_WIDTHS[charType] * scale;
    return sum + charWidth;
  }, 0);
  return Math.ceil(width / fontSize) * fontSize;
};
const getNumberOfLines = (str, fontSize, width) => {
  // 计算⾏数
  if (!str) {
    return 0;
  }
  return Math.ceil(getStrWidth(str, fontSize) / width);
};

// 金额半角符号
export const priceUnit = '¥';
const countRecommendItemHeight = (item, fontSize, width) => {
  var _item$productBizTagPo;
  let titleWith = width; // ⼀项宽度
  let tmpHeight = TOTAL_HEIGHT; // ⽐如⼀⾏⽂字时，⼀项的⾼度是200
  if (item !== null && item !== void 0 && (_item$productBizTagPo = item.productBizTagPositions) !== null && _item$productBizTagPo !== void 0 && _item$productBizTagPo.payment_succeed_item_title_core) {
    var _getProductIcon, _item$productBizTagPo2;
    // 如果title前⾯后图⽚就减去 图⽚的宽度
    const ICON_TOTAL_WIDTH = (((_getProductIcon = getProductIcon(item === null || item === void 0 || (_item$productBizTagPo2 = item.productBizTagPositions) === null || _item$productBizTagPo2 === void 0 ? void 0 : _item$productBizTagPo2.payment_succeed_item_title_core)) === null || _getProductIcon === void 0 ? void 0 : _getProductIcon.width) || 0) + HEAD_IMG_MARGIN_RIGHT;
    titleWith -= ICON_TOTAL_WIDTH;
  }
  let numLines = getNumberOfLines(item.productTitle, fontSize, titleWith);
  if (numLines > 1) {
    // 如果获取的是2⾏就让⾼度加上⾏⽂字的⾼度
    tmpHeight += ONE_LINE_TITLE_FONT;
  }
  return tmpHeight;
};

// 公共部分高度不计算，仅计算动态部分高度，用于双列竖直排布比较大小
const countCommonFoodsHeight = (productModel, fontSize, width) => {
  var _productModel$product;
  // 标题部分高度
  let titleWdith = width - COMMON_CARD_CONTENT_PADDING * 2; // ⼀项宽度
  let tmpHeight = width + COMMON_CARD_PRICE_VERTICAL_MARGIN;

  // 如果title前⾯有图⽚就减去 图⽚的宽度
  if (productModel !== null && productModel !== void 0 && (_productModel$product = productModel.productBizTagPositions) !== null && _productModel$product !== void 0 && _productModel$product.good_goods_title_core) {
    var _getProductIcon2, _productModel$product2;
    const ICON_TOTAL_WIDTH = (((_getProductIcon2 = getProductIcon(productModel === null || productModel === void 0 || (_productModel$product2 = productModel.productBizTagPositions) === null || _productModel$product2 === void 0 ? void 0 : _productModel$product2.good_goods_title_core)) === null || _getProductIcon2 === void 0 ? void 0 : _getProductIcon2.width) || 0) + COMMON_CARD_TITLE_ICON_RIGHT_MARGIN;
    titleWdith -= ICON_TOTAL_WIDTH;
  }
  let titleStr = productModel === null || productModel === void 0 ? void 0 : productModel.productTitle;
  // 如果title前⾯有品牌就减去 品牌的间隔
  if (productModel !== null && productModel !== void 0 && productModel.brandName) {
    titleWdith -= COMMON_CARD_BRAND_LINE_HORIZONTAL_MARGIN;
    titleStr = (productModel === null || productModel === void 0 ? void 0 : productModel.brandName) + (productModel === null || productModel === void 0 ? void 0 : productModel.productTitle);
  }
  let numLines = getNumberOfLines(titleStr, fontSize, titleWdith);
  // 第一行标题高度底部距离 + 第一行标题高度
  tmpHeight += COMMON_CARD_TITLE_LINE_HEIGHT + COMMON_CARD_TITLE_TOP_PADDING;
  if (numLines > 1) {
    // 如果获取的是2⾏就让⾼度加上⾏⽂字的⾼度
    tmpHeight += COMMON_CARD_TITLE_LINE_HEIGHT;
  }

  // 描述部分高度
  // 是否展示第二行描述信息(这一行和倒计时互斥)
  const hasDescLine = ((productModel === null || productModel === void 0 ? void 0 : productModel.soldStock) ?? -1) > 0 && isNotEmptyString((productModel === null || productModel === void 0 ? void 0 : productModel.feedBackRate) ?? '') && !(productModel !== null && productModel !== void 0 && productModel.countdownInfo);
  if (hasDescLine) {
    tmpHeight += COMMON_CARD_DESC_LINE_HEIGHT + COMMON_CARD_DESC_TO_TITLE_MARGIN;
  }

  // 价格部分高度
  // 是否是日历票品
  const isTicket = productModel.itemTypeCode === ITEM_TYPE_CODE.TICKET;
  // 是否是次卡
  const isSubCard = productModel.itemTypeCode === ITEM_TYPE_CODE.TIMECARD;
  // 是否展示新人一分购
  const isNewUser = !isTicket && !isSubCard && productModel.newUser;
  if (isNewUser) {
    tmpHeight += COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT + COMMON_CARD_PRICE_VERTICAL_MARGIN;
  } else {
    tmpHeight += COMMON_CARD_PRICE_HEIGHT + COMMON_CARD_PRICE_TOP_MARGIN;
  }

  // poi部分高度
  const hasPoi = !!(productModel !== null && productModel !== void 0 && productModel.poiName);
  if (hasPoi) {
    tmpHeight += COMMON_CARD_POI_HEIGHT;
  }
  return tmpHeight;
};
const countWeeklyPromotionHeight = () => {
  return productAdapter(234);
};

// 计算高度
export const countFeedItemHeight = (item, fontSize, width) => {
  // 根据不同卡片类型，返回不同高度
  if ((item === null || item === void 0 ? void 0 : item.type) === FEED_CARD_TYPE.COMMON_GOOD_CARD) {
    return countCommonFoodsHeight(item === null || item === void 0 ? void 0 : item.data, COMMON_CARD_TITLE_FONT, width);
  } else if ((item === null || item === void 0 ? void 0 : item.type) === FEED_CARD_TYPE.COMMON_GOOD_CARD) {
    return countWeeklyPromotionHeight();
  } else {
    return countRecommendItemHeight(item, fontSize, width);
  }
};
//# sourceMappingURL=utils.js.map