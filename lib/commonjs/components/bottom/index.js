"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _PoiIconConst = _interopRequireDefault(require("../../common/PoiIconConst"));
var _react = _interopRequireDefault(require("react"));
var _styles = _interopRequireDefault(require("./styles"));
var _krn = require("@kid-ui/krn");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function GoodsBottom({
  noMore,
  loading,
  containerStyle,
  textStyle,
  onPress,
  text,
  iconStyle
}) {
  if (noMore) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, null);
  }
  if (loading) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _styles.default.container
    }, /*#__PURE__*/_react.default.createElement(_krn.KidLoading, null));
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: onPress,
    activeOpacity: 1,
    style: [_styles.default.container, containerStyle]
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.content
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_styles.default.text, textStyle]
  }, text ? text : '查看更多'), /*#__PURE__*/_react.default.createElement(_krn.KidIcon, {
    style: [_styles.default.iconNew, iconStyle],
    kid: _PoiIconConst.default.COMMMON_BASE_OPEN_24
  })));
}
var _default = exports.default = /*#__PURE__*/_react.default.memo(GoodsBottom);
//# sourceMappingURL=index.js.map