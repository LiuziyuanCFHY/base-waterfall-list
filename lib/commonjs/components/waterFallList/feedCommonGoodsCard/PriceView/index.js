"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PriceView = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _bizComponent = require("@locallife/biz-component");
var _constants = require("../../../../constants");
var _styles = _interopRequireDefault(require("./styles"));
var _utils = require("../../../../utils/utils");
var _utils2 = require("@locallife/utils");
var _designBase = require("@locallife/design-base");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PriceView = exports.PriceView = /*#__PURE__*/_react.default.memo(({
  goodsInfo,
  maxWidth
}) => {
  var _goodsInfo$productBiz, _goodsInfo$productBiz2, _goodsInfo$productBiz3, _goodsInfo$productBiz7, _goodsInfo$productBiz8, _goodsInfo$productBiz9;
  // 是否是日历票品
  const isTicket = (0, _react.useMemo)(() => {
    return (goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.itemTypeCode) === _constants.ITEM_TYPE_CODE.TICKET;
  }, [goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.itemTypeCode]);
  // 是否是次卡
  const isSubCard = (0, _react.useMemo)(() => {
    return (goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.itemTypeCode) === _constants.ITEM_TYPE_CODE.TIMECARD;
  }, [goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.itemTypeCode]);
  const itemTimes = goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz === void 0 ? void 0 : _goodsInfo$productBiz.good_goods_price_right_times_card;
  // 共省30元
  const itemPriceRightDiscount = goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz2 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz2 === void 0 ? void 0 : _goodsInfo$productBiz2.good_goods_price_right_discount;
  // 快手更低价、会员专项、美团补贴
  const itemPriceFormarketing = goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz3 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz3 === void 0 ? void 0 : _goodsInfo$productBiz3.good_goods_price_right_marketing_info;
  const hasPriceLabel = (itemTimes === null || itemTimes === void 0 ? void 0 : itemTimes.length) > 0 || (itemPriceRightDiscount === null || itemPriceRightDiscount === void 0 ? void 0 : itemPriceRightDiscount.length) > 0 || (itemPriceFormarketing === null || itemPriceFormarketing === void 0 ? void 0 : itemPriceFormarketing.length) > 0;
  const hasOrginPrice = !!(goodsInfo !== null && goodsInfo !== void 0 && goodsInfo.originPrice) && !hasPriceLabel;
  const [labelMaxWidth, setLabelMaxWidth] = (0, _react.useState)(0);
  const [showTags, setShowTags] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    var _goodsInfo$productBiz4, _goodsInfo$productBiz5, _goodsInfo$productBiz6;
    // 单次
    const itemTimes = goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz4 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz4 === void 0 ? void 0 : _goodsInfo$productBiz4.good_goods_price_right_times_card;
    // 共省30元
    const itemPriceRightDiscount = goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz5 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz5 === void 0 ? void 0 : _goodsInfo$productBiz5.good_goods_price_right_discount;
    // 快手更低价、会员专项、美团补贴
    const itemPriceFormarketing = goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz6 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz6 === void 0 ? void 0 : _goodsInfo$productBiz6.good_goods_price_right_marketing_info;
    let recombineBizTags = [];
    if (((itemTimes === null || itemTimes === void 0 ? void 0 : itemTimes.length) ?? 0) > 0) {
      recombineBizTags.push({
        bizTags: itemTimes
      });
    }
    if (((itemPriceRightDiscount === null || itemPriceRightDiscount === void 0 ? void 0 : itemPriceRightDiscount.length) ?? 0) > 0) {
      recombineBizTags.push({
        bizTags: itemPriceRightDiscount
      });
    }
    if (((itemPriceFormarketing === null || itemPriceFormarketing === void 0 ? void 0 : itemPriceFormarketing.length) ?? 0) > 0) {
      recombineBizTags.push({
        bizTags: itemPriceFormarketing
      });
    }
    setShowTags(recombineBizTags);
  }, [goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz7 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz7 === void 0 ? void 0 : _goodsInfo$productBiz7.good_goods_price_right_discount, goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz8 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz8 === void 0 ? void 0 : _goodsInfo$productBiz8.good_goods_price_right_marketing_info, goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz9 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz9 === void 0 ? void 0 : _goodsInfo$productBiz9.good_goods_price_right_times_card]);
  const _onLayout = (0, _react.useCallback)(event => {
    const priceWidth = (0, _utils2.isIOS)() ? (0, _designBase.rem)(event.nativeEvent.layout.width) : (0, _designBase.get414Px)(event.nativeEvent.layout.width);
    const remainingWidth = maxWidth - priceWidth - 10;
    setLabelMaxWidth(remainingWidth);
  }, [maxWidth]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.priceInfo
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.priceLine,
    onLayout: _onLayout
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.unit
  }, _utils.priceUnit), /*#__PURE__*/_react.default.createElement(_bizComponent.DotDecreasePrice, {
    price: (goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.discountPrice) ?? '',
    firstPriceStyle: _styles.default.firstPrice,
    dotSecondPriceStyle: _styles.default.secondPrice
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.secondaryCardTimes
  }, isSubCard ? `/${goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.secondaryCardTimes}次` : isTicket ? '起' : ''), /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: hasOrginPrice
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.originPrice
  }, goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.originPriceText))), /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: labelMaxWidth > 0
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.label
  }, /*#__PURE__*/_react.default.createElement(_bizComponent.CommonLabelArray, {
    bizTagArray: showTags,
    maxWidth: labelMaxWidth,
    adaptScreen: true
  }))));
});
//# sourceMappingURL=index.js.map