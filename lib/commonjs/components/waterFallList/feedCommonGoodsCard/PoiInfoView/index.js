"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PoiInfoView = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _styles = _interopRequireDefault(require("./styles"));
var _image = _interopRequireDefault(require("@kds/image"));
var _bizComponent = require("@locallife/biz-component");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PoiInfoView = exports.PoiInfoView = /*#__PURE__*/_react.default.memo(({
  goodsInfo
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.shopInfoLineContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.shopInfoContainer
  }, /*#__PURE__*/_react.default.createElement(_image.default, {
    resizeMode: "cover",
    source: {
      uri: goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.shopLightIcon
    },
    style: [_styles.default.shopIcon]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.subTitle,
    numberOfLines: 1
  }, (goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.poiName) ?? '')), /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.shopArrowIcon
  }, /*#__PURE__*/_react.default.createElement(_image.default, {
    resizeMode: "cover",
    source: {
      uri: goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.shopArrowIcon
    },
    style: [_styles.default.arrowIcon]
  })));
});
//# sourceMappingURL=index.js.map