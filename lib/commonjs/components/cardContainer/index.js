"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardStyles = exports.CardContainer = void 0;
var _EStyleUtil = require("../../utils/EStyleUtil");
var _designBase = require("@locallife/design-base");
var _utils = require("@locallife/utils");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const cardStyles = exports.cardStyles = _EStyleUtil.EStyleUtil.create({
  cardContainer: {
    width: _reactNative.Platform.OS === 'ios' ? _designBase.SCREEN_WIDTH_414 : 'auto',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: () => (0, _utils.getThemeColor)({
      dark: '#2B2B2F',
      light: '#FFFFFF'
    })
  }
});
const CardContainer = ({
  containerStyle,
  children,
  ignoreBottomPadding = false,
  ignoreTopPadding = false,
  ignoreLeftPadding = false,
  ignoreRightPadding = false,
  marginTop = 0
}) => {
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [cardStyles.cardContainer, containerStyle, ignoreBottomPadding && {
      paddingBottom: 0
    }, ignoreTopPadding && {
      paddingTop: 0
    }, ignoreLeftPadding && {
      paddingLeft: 0
    }, ignoreRightPadding && {
      paddingRight: 0
    }, marginTop !== 0 && {
      marginTop: marginTop
    }]
  }, children);
};
exports.CardContainer = CardContainer;
//# sourceMappingURL=index.js.map