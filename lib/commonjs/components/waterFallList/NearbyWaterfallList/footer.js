"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.footerStyles = exports.DetailFooter = void 0;
var _react = _interopRequireDefault(require("react"));
var _fallbackcomponents = require("@locallife/fallbackcomponents");
var _EStyleUtil = require("../../../utils/EStyleUtil");
var _designBase = require("@locallife/design-base");
var _reactNative = require("react-native");
var _krn = require("@kid-ui/krn");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const footerStyles = exports.footerStyles = _EStyleUtil.EStyleUtil.create({
  container: {
    flex: 1,
    minHeight: 177,
    width: _designBase.SCREEN_WIDTH_414,
    backgroundColor: '#F8F8F8'
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center'
  },
  footerDarkContainer: {
    flex: 1,
    alignItems: 'center'
  },
  footer: {
    width: '100%',
    height: 92
  },
  noMoreFooter: {
    width: '100%',
    height: 177,
    marginTop: -50
  }
});
const DetailFooter = exports.DetailFooter = /*#__PURE__*/_react.default.memo(({
  isLoading,
  noMore,
  isDark,
  notShowSlogan = false
}) => {
  let content = /*#__PURE__*/_react.default.createElement(_fallbackcomponents.StaticLoading, {
    containerStyle: footerStyles.footer
  });
  if (notShowSlogan) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, null);
  }
  if (noMore) {
    return /*#__PURE__*/_react.default.createElement(_fallbackcomponents.StaticLoading, {
      containerStyle: footerStyles.noMoreFooter
    });
  }
  if (isLoading) {
    content = isDark ? /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: footerStyles.footerDarkContainer
    }, /*#__PURE__*/_react.default.createElement(_krn.KidLoading, {
      style: footerStyles.footerDarkContainer
    })) : /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: footerStyles.footerContainer
    }, /*#__PURE__*/_react.default.createElement(_krn.KidLoading, null));
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: footerStyles.container
  }, content);
});
//# sourceMappingURL=footer.js.map