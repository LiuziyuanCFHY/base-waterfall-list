"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeedRecommendItem = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _style = _interopRequireDefault(require("./style"));
var _bizComponent = require("@locallife/biz-component");
var _constants = require("../../../constants");
var _utils = require("../../../utils/utils");
var _getProductIcon = require("../../../utils/getProductIcon");
var _image = _interopRequireDefault(require("@kds/image"));
var _utils2 = require("@locallife/utils");
var _log = require("@locallife/log");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * 通用商品卡
 * scene 底部推荐双列feed商品卡
 * author yiyushu
 */

const FeedRecommendItem = exports.FeedRecommendItem = /*#__PURE__*/(0, _react.memo)(({
  curItem,
  index
}) => {
  var _curItem$productBizTa2, _curItem$productBizTa3, _curItem$productBizTa4;
  /**
   * 点击上报
   * @param key 埋点key
   * @param exp 拓展埋点数据，必须是个对象！
   */
  const clickLogParam = (0, _react.useCallback)((key, exp = {}) => {
    _log.localLifeBizLogger.click(key, {
      poi_id: (curItem === null || curItem === void 0 ? void 0 : curItem.poiId) || '',
      item_id: (curItem === null || curItem === void 0 ? void 0 : curItem.itemId) || '',
      item_index: index + 1,
      item_name: (curItem === null || curItem === void 0 ? void 0 : curItem.productTitle) || '',
      ...exp
    });
  }, [curItem === null || curItem === void 0 ? void 0 : curItem.itemId, curItem === null || curItem === void 0 ? void 0 : curItem.poiId, curItem === null || curItem === void 0 ? void 0 : curItem.productTitle, index]);
  const handleProduction = (0, _react.useCallback)(() => {
    clickLogParam('LOCALLIFE_COMPOSITE_GOODS_CARD');
    (curItem === null || curItem === void 0 ? void 0 : curItem.goodsHalfJumpUrl) && (0, _utils2.jumpUrl)(curItem === null || curItem === void 0 ? void 0 : curItem.goodsHalfJumpUrl, 'TO_HALF_POI_PAGE');
  }, [clickLogParam, curItem === null || curItem === void 0 ? void 0 : curItem.goodsHalfJumpUrl]);

  // 点击距离跳转POI
  const handleDistanceClick = (0, _react.useCallback)(() => {
    clickLogParam('LOCALLIFE_COMPOSITE_GOODS_CARD_POI_BUTTON');
    (curItem === null || curItem === void 0 ? void 0 : curItem.poiHalfJumpUrl) && (0, _utils2.jumpUrl)(curItem === null || curItem === void 0 ? void 0 : curItem.poiHalfJumpUrl, 'TO_POI');
  }, [clickLogParam, curItem === null || curItem === void 0 ? void 0 : curItem.poiHalfJumpUrl]);
  const productIcon = (0, _react.useMemo)(() => {
    var _curItem$productBizTa;
    return (0, _getProductIcon.getProductIcon)(curItem === null || curItem === void 0 || (_curItem$productBizTa = curItem.productBizTagPositions) === null || _curItem$productBizTa === void 0 ? void 0 : _curItem$productBizTa.payment_succeed_item_title_core);
  }, [curItem === null || curItem === void 0 || (_curItem$productBizTa2 = curItem.productBizTagPositions) === null || _curItem$productBizTa2 === void 0 ? void 0 : _curItem$productBizTa2.payment_succeed_item_title_core]);

  // 是否是日历票品
  const isTicket = (0, _react.useMemo)(() => {
    return (curItem === null || curItem === void 0 ? void 0 : curItem.itemTypeCode) === _constants.ITEM_TYPE_CODE.TICKET;
  }, [curItem === null || curItem === void 0 ? void 0 : curItem.itemTypeCode]);
  // 是否是次卡
  const isSubCard = (0, _react.useMemo)(() => {
    return (curItem === null || curItem === void 0 ? void 0 : curItem.itemTypeCode) === _constants.ITEM_TYPE_CODE.TIMECARD;
  }, [curItem === null || curItem === void 0 ? void 0 : curItem.itemTypeCode]);

  // 折扣价(discountPrice)为兜底的市场价(originPrice)时、当为次卡时 均不显示市场价（originPrice）、当为日历票时也不展示
  const isShowOriginPrice = (0, _react.useMemo)(() => {
    return Number(curItem === null || curItem === void 0 ? void 0 : curItem.originPrice) > Number(curItem === null || curItem === void 0 ? void 0 : curItem.discountPrice) && !isSubCard && !isTicket;
  }, [curItem === null || curItem === void 0 ? void 0 : curItem.originPrice, curItem === null || curItem === void 0 ? void 0 : curItem.discountPrice, isSubCard, isTicket]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _style.default.recommendItem
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    activeOpacity: 1,
    onPress: handleProduction
  }, /*#__PURE__*/_react.default.createElement(_image.default, {
    style: _style.default.head,
    source: {
      uri: curItem.coverUrl
    },
    resizeMode: 'cover'
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _style.default.content
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_style.default.flex],
    numberOfLines: 2
  }, !!(productIcon !== null && productIcon !== void 0 && productIcon.url) && /*#__PURE__*/_react.default.createElement(_image.default, {
    resizeMode: 'cover',
    style: [_style.default.icon, {
      width: productIcon === null || productIcon === void 0 ? void 0 : productIcon.width,
      height: productIcon === null || productIcon === void 0 ? void 0 : productIcon.height
    }],
    source: {
      uri: productIcon === null || productIcon === void 0 ? void 0 : productIcon.url
    }
  }), !!(productIcon !== null && productIcon !== void 0 && productIcon.url) && _reactNative.Platform.OS === 'android' && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.default.txt
  }, "\xA0"), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.default.titleInfo
  }, curItem === null || curItem === void 0 ? void 0 : curItem.productTitle)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_style.default.flex, _style.default.priceInfo]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.default.discountPrice
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.default.unit
  }, _utils.priceUnit), curItem.discountPrice, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.default.secondaryCardTimes
  }, isSubCard ? `/${curItem.secondaryCardTimes}次` : isTicket ? '起' : '')), !!(curItem !== null && curItem !== void 0 && (_curItem$productBizTa3 = curItem.productBizTagPositions) !== null && _curItem$productBizTa3 !== void 0 && _curItem$productBizTa3.payment_succeed_item_price_right) && /*#__PURE__*/_react.default.createElement(_bizComponent.CommonLabels, {
    bizTags: curItem === null || curItem === void 0 || (_curItem$productBizTa4 = curItem.productBizTagPositions) === null || _curItem$productBizTa4 === void 0 ? void 0 : _curItem$productBizTa4.payment_succeed_item_price_right,
    containerStyle: _style.default.priceMark,
    autoCut: false
  }), isShowOriginPrice ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _style.default.originPriceInfo
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.default.originPrice
  }, _utils.priceUnit, curItem.originPrice)) : null))), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: [_style.default.poi, _style.default.flex],
    onPress: handleDistanceClick
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_style.default.flex, _style.default.poiInfo]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: _style.default.poiIcon,
    source: {
      uri: 'https://s2-10833.kwimgs.com/kos/nlav10833/ll-transaction/static/transaction/img/poi-icon.962351164b4b18e8.png'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_style.default.poiTxt, _style.default.poiName],
    numberOfLines: 1
  }, curItem.poiName)), !!curItem.distanceText && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_style.default.poiTxt]
  }, curItem.distanceText)));
});
//# sourceMappingURL=index.js.map