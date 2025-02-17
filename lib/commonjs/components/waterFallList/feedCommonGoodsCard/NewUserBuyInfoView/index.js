"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewUserBuyInfoView = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _baseImage = require("@locallife/base-image");
var _bizComponent = require("@locallife/biz-component");
var _styles = _interopRequireDefault(require("./styles"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NewUserBuyInfoView = exports.NewUserBuyInfoView = /*#__PURE__*/_react.default.memo(({
  productInfo
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.leftContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.priceInfoContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.priceUnit
  }, "\xA5"), /*#__PURE__*/_react.default.createElement(_bizComponent.DotDecreasePrice, {
    price: productInfo.discountPrice ?? '',
    firstPriceStyle: _styles.default.firstPriceFontStyle,
    dotSecondPriceStyle: _styles.default.firstPriceFontStyle
  }), /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: productInfo === null || productInfo === void 0 ? void 0 : productInfo.priceSuffix
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.priceSuffix
  }, productInfo === null || productInfo === void 0 ? void 0 : productInfo.priceSuffix))), /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: productInfo === null || productInfo === void 0 ? void 0 : productInfo.originPriceText
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.originPrice
  }, productInfo === null || productInfo === void 0 ? void 0 : productInfo.originPriceText))), /*#__PURE__*/_react.default.createElement(_baseImage.LocalLifeImage, {
    style: _styles.default.qiangButton,
    source: {
      uri: productInfo === null || productInfo === void 0 ? void 0 : productInfo.buyUrl
    },
    resizeMode: 'cover',
    sceneType: 'NewUserBuyInfoView'
  }));
});
//# sourceMappingURL=index.js.map