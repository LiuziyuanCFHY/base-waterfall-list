"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _designBase = require("@locallife/design-base");
var _reactNative = require("react-native");
var _config = require("../../config/config");
var _utils = require("../../../../utils/utils");
const styles = exports.styles = _reactNative.StyleSheet.create({
  container: {
    height: (0, _utils.productAdapter)(64),
    flexDirection: 'row',
    marginHorizontal: _config.WEEKLY_PRODUCT_MARGIN,
    borderRadius: (0, _utils.productAdapter)(8),
    backgroundColor: '#FFFFFF',
    marginBottom: (0, _utils.productAdapter)(6),
    alignItems: 'center'
  },
  coverImage: {
    width: _config.WEEKLY_PRODUCT_SIZE,
    height: _config.WEEKLY_PRODUCT_SIZE,
    borderRadius: (0, _utils.productAdapter)(6),
    marginLeft: (0, _utils.productAdapter)(3)
  },
  // 右侧内容区的样式
  rightContent: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: (0, _utils.productAdapter)(6)
  },
  productTitle: {
    color: _designBase.LL_UI.Color.TEXT_TITLE,
    fontWeight: '500',
    fontSize: _config.COMMON_CARD_FONT_SIZE_14
  },
  priceContainer: {
    marginTop: (0, _utils.productAdapter)(8),
    flexDirection: 'row',
    // 水平排列
    alignItems: 'baseline'
  },
  pricePrefix: {
    fontFamily: 'SF Pro Display',
    fontSize: _config.COMMON_CARD_FONT_SIZE_12,
    color: _designBase.LL_UI.Color.PRICE_TEXT,
    fontWeight: '700'
  },
  firstPriceText: {
    fontFamily: 'SF Pro Display',
    color: _designBase.LL_UI.Color.PRICE_TEXT,
    fontSize: _config.COMMON_CARD_FONT_SIZE_18,
    fontWeight: '700'
  },
  secondPriceText: {
    fontFamily: 'SF Pro Display',
    color: _designBase.LL_UI.Color.PRICE_TEXT,
    fontSize: _config.COMMON_CARD_FONT_SIZE_13,
    fontWeight: '700'
  },
  originPrice: {
    textDecorationLine: 'line-through',
    color: _designBase.LL_UI.Color.TEXT_MAIN,
    fontSize: _config.COMMON_CARD_FONT_SIZE_13,
    marginLeft: (0, _utils.productAdapter)(2)
  }
});
//# sourceMappingURL=styles.js.map