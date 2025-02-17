"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _designBase = require("@locallife/design-base");
var _reactNative = require("react-native");
var _utils = require("../../../../utils/utils");
var _config = require("../../config/config");
var _default = exports.default = _reactNative.StyleSheet.create({
  container: {
    flexDirection: 'row',
    right: (0, _utils.productAdapter)(12),
    left: 0,
    height: _config.COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT,
    borderRadius: (0, _utils.productAdapter)(6),
    backgroundColor: '#FE4C0012',
    marginTop: _config.COMMON_CARD_PRICE_VERTICAL_MARGIN,
    marginBottom: _config.COMMON_CARD_PRICE_VERTICAL_MARGIN
  },
  leftContainer: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: (0, _utils.productAdapter)(6),
    alignItems: 'center'
  },
  firstPriceFontStyle: {
    fontSize: _config.COMMON_CARD_FONT_SIZE_18,
    fontFamily: 'SF Pro Display',
    color: _designBase.LL_UI.Color.PRICE_TEXT,
    fontWeight: '700'
  },
  rightTouch: {
    position: 'absolute',
    right: 0,
    width: (0, _utils.productAdapter)(89),
    zIndex: 100,
    height: _config.COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT
  },
  qiangButton: {
    position: 'absolute',
    right: 0,
    width: (0, _utils.productAdapter)(46),
    height: _config.COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT
  },
  priceInfoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginLeft: (0, _utils.productAdapter)(8)
  },
  priceUnit: {
    fontFamily: 'SF Pro Display',
    color: _designBase.LL_UI.Color.PRICE_TEXT,
    fontSize: _config.COMMON_CARD_FONT_SIZE_11,
    fontWeight: '700',
    marginBottom: (0, _utils.productAdapter)(1)
  },
  priceSuffix: {
    fontFamily: 'PingFang SC',
    fontWeight: '500',
    fontSize: _designBase.LL_UI.Font.SIZE_11,
    color: _designBase.LL_UI.Color.PRICE_TEXT,
    marginLeft: (0, _utils.productAdapter)(4)
  },
  originPrice: {
    fontWeight: '500',
    fontSize: _designBase.LL_UI.Font.SIZE_11,
    fontFamily: 'PingFang SC',
    textDecorationLine: 'line-through',
    color: _designBase.LL_UI.Color.TEXT_SECEND,
    marginLeft: (0, _utils.productAdapter)(4),
    marginTop: (0, _utils.productAdapter)(6)
  }
});
//# sourceMappingURL=styles.js.map