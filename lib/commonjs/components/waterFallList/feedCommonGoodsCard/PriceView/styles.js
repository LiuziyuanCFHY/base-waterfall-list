"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _config = require("../../config/config");
var _utils = require("../../../../../src/utils/utils");
var _designBase = require("@locallife/design-base");
var _default = exports.default = _reactNative.StyleSheet.create({
  firstPrice: {
    fontSize: _config.COMMON_CARD_FONT_SIZE_18,
    fontFamily: 'SF Pro Display',
    color: _designBase.LL_UI.Color.PRICE_TEXT,
    marginRight: (0, _utils.productAdapter)(6),
    fontWeight: '700',
    lineHeight: _config.COMMON_CARD_PRICE_HEIGHT
  },
  secondPrice: {
    fontSize: _config.COMMON_CARD_FONT_SIZE_11,
    fontFamily: 'SF Pro Display',
    color: _designBase.LL_UI.Color.PRICE_TEXT,
    fontWeight: '700'
  },
  priceInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: _config.COMMON_CARD_PRICE_TOP_MARGIN,
    marginBottom: _config.COMMON_CARD_PRICE_VERTICAL_MARGIN
  },
  priceLine: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
  unit: {
    color: _designBase.LL_UI.Color.PRICE_TEXT,
    fontSize: _config.COMMON_CARD_FONT_SIZE_12,
    fontWeight: '700'
  },
  secondaryCardTimes: {
    fontSize: _config.COMMON_CARD_FONT_SIZE_11,
    color: _designBase.LL_UI.Color.PRICE_TEXT,
    fontWeight: '400',
    paddingLeft: (0, _utils.productAdapter)(1)
  },
  originPrice: {
    marginLeft: (0, _utils.productAdapter)(3),
    marginBottom: (0, _utils.productAdapter)(3),
    fontSize: _config.COMMON_CARD_FONT_SIZE_11,
    color: _designBase.LL_UI.Color.TEXT_SECEND,
    textDecorationColor: _designBase.LL_UI.Color.TEXT_SECEND,
    textDecorationLine: 'line-through'
  },
  label: {
    marginTop: (0, _utils.productAdapter)(2)
  }
});
//# sourceMappingURL=styles.js.map