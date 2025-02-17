"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DistanceLabel = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _image = _interopRequireDefault(require("@kds/image"));
var _styles = _interopRequireDefault(require("./styles"));
var _bizComponent = require("@locallife/biz-component");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const DistanceLabel = exports.DistanceLabel = /*#__PURE__*/_react.default.memo(({
  goodsInfo
}) => {
  var _goodsInfo$productBiz, _goodsInfo$productBiz2, _goodsInfo$productBiz3;
  const locationIconUrl = 'https://s2-11289.kwimgs.com/kos/nlav11289/1/local_life_locallife_coordinate_icon_cdn.png';

  // 是否展示距离
  const showDistance = !!(goodsInfo !== null && goodsInfo !== void 0 && goodsInfo.distanceText);
  // 是否展示通用标签
  const showCommonLabel = !!(goodsInfo !== null && goodsInfo !== void 0 && (_goodsInfo$productBiz = goodsInfo.productBizTagPositions) !== null && _goodsInfo$productBiz !== void 0 && _goodsInfo$productBiz.good_goods_img_bottom);
  // 是否展示分割线
  const showLine = showDistance && showCommonLabel;
  // 是否展示本组件
  const show = showDistance || showCommonLabel;
  return /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: show
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.distanceLabel
  }, /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: showDistance
  }, /*#__PURE__*/_react.default.createElement(_image.default, {
    resizeMode: "cover",
    source: {
      uri: locationIconUrl
    },
    style: [_styles.default.distanceIcon]
  }), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _styles.default.distanceText,
    numberOfLines: 1
  }, goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.distanceText)), /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: showLine
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [_styles.default.line]
  })), !!(goodsInfo !== null && goodsInfo !== void 0 && (_goodsInfo$productBiz2 = goodsInfo.productBizTagPositions) !== null && _goodsInfo$productBiz2 !== void 0 && _goodsInfo$productBiz2.good_goods_img_bottom) && /*#__PURE__*/_react.default.createElement(_bizComponent.CommonLabels, {
    bizTags: goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz3 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz3 === void 0 ? void 0 : _goodsInfo$productBiz3.good_goods_img_bottom
    // containerStyle={}
    ,
    autoCut: false
  })));
});
//# sourceMappingURL=index.js.map