"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _reactNative = require("react-native");
var _utils = require("../../../../utils/utils");
var _designBase = require("@locallife/design-base");
var _config = require("../../config/config");
const styles = exports.styles = _reactNative.StyleSheet.create({
  countDownBgStyle: {
    paddingHorizontal: (0, _utils.productAdapter)(6),
    width: '100%',
    height: (0, _utils.productAdapter)(22),
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    width: (0, _utils.productAdapter)(57),
    height: (0, _utils.productAdapter)(13)
  },
  countDownContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  desTextStyle: {
    fontSize: _config.COMMON_CARD_FONT_SIZE_10,
    flexShrink: 1,
    marginStart: (0, _utils.productAdapter)(4),
    color: _designBase.LL_UI.Color.TEXT_WHITE,
    fontWeight: '600',
    marginRight: (0, _utils.productAdapter)(2)
  },
  title: {
    fontFamily: 'SF Pro Display',
    fontSize: _config.COMMON_CARD_FONT_SIZE_11,
    fontWeight: '700',
    color: _designBase.LL_UI.Color.TEXT_WHITE,
    includeFontPadding: false
  }
});
//# sourceMappingURL=style.js.map