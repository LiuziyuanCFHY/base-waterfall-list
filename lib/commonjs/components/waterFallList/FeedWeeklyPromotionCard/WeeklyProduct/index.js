"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _styles = require("./styles");
var _baseImage = require("@locallife/base-image");
var _bizComponent = require("@locallife/biz-component");
var _utils = require("../../../../utils/utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function WeeklyProduct({
  data,
  onProductPress
}) {
  const onPress = (0, _react.useCallback)(() => {
    if (onProductPress) {
      onProductPress();
    }
  }, [onProductPress]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: onPress
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.container
  }, /*#__PURE__*/_react.default.createElement(_baseImage.LocalLifeImage, {
    sceneType: 'WeeklyProduct',
    style: _styles.styles.coverImage,
    source: {
      uri: data === null || data === void 0 ? void 0 : data.coverUrl
    },
    resizeMode: 'cover'
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.rightContent
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.styles.productTitle,
    numberOfLines: 1
  }, data === null || data === void 0 ? void 0 : data.productTitle), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.styles.priceContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.styles.pricePrefix,
    numberOfLines: 1
  }, _utils.priceUnit), /*#__PURE__*/_react.default.createElement(_bizComponent.DotDecreasePrice, {
    price: (data === null || data === void 0 ? void 0 : data.discountPrice) ?? '',
    firstPriceStyle: _styles.styles.firstPriceText,
    dotSecondPriceStyle: _styles.styles.secondPriceText
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.styles.originPrice,
    numberOfLines: 1
  }, data === null || data === void 0 ? void 0 : data.originPriceText)))));
}
var _default = exports.default = /*#__PURE__*/_react.default.memo(WeeklyProduct);
//# sourceMappingURL=index.js.map