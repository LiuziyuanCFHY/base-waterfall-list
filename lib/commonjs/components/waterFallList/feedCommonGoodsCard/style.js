"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../../../utils/utils");
var _reactNative = require("react-native");
var _config = require("../config/config");
var _designBase = require("@locallife/design-base");
// 瀑布流需要动态计算高度，来区分放左边还是右边
// 商品图片高度 144  + 标题上下间距各8即 16 + 标题为一行字时 14+ 一行间距 3 + 打标签价格一行最大字为 20+最大行间距为 4+ poi上间距 10+ poi下间距 14 + poi字大小 12
var _default = exports.default = _reactNative.StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: (0, _utils.productAdapter)(8)
  },
  coverImage: {
    width: '100%',
    // 或者设置为特定的宽度
    height: 'auto',
    // 让高度自适应
    aspectRatio: 1,
    // 设定宽高比为 1:1
    borderTopLeftRadius: (0, _utils.productAdapter)(8),
    borderTopRightRadius: (0, _utils.productAdapter)(8)
  },
  coverBottomContent: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%'
  },
  content: {
    paddingHorizontal: _config.COMMON_CARD_CONTENT_PADDING,
    position: 'relative',
    paddingTop: _config.COMMON_CARD_TITLE_TOP_PADDING
  },
  // 两行标题相关
  firstLine: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  nextLine: {
    fontSize: _config.COMMON_CARD_TITLE_FONT,
    fontWeight: '500',
    color: '#222222',
    marginTop: (0, _utils.productAdapter)(3),
    lineHeight: _config.COMMON_CARD_TITLE_LINE_HEIGHT
  },
  labelStyle: {
    marginRight: _config.COMMON_CARD_TITLE_ICON_RIGHT_MARGIN,
    marginTop: (0, _utils.productAdapter)(1)
  },
  brandText: {
    fontSize: _config.COMMON_CARD_TITLE_FONT,
    fontWeight: '500',
    maxWidth: (0, _utils.productAdapter)(153),
    color: '#222222',
    lineHeight: _config.COMMON_CARD_TITLE_LINE_HEIGHT
  },
  verLine: {
    width: (0, _utils.productAdapter)(0.5),
    marginHorizontal: _config.COMMON_CARD_BRAND_LINE_HORIZONTAL_MARGIN,
    height: (0, _utils.productAdapter)(10),
    backgroundColor: '#9C9C9C',
    opacity: 0.6
  },
  titleContainer: {
    fontSize: _config.COMMON_CARD_TITLE_FONT,
    fontWeight: '500',
    color: '#222222',
    flex: 1,
    lineHeight: _config.COMMON_CARD_TITLE_LINE_HEIGHT
  },
  descContainer: {
    flexDirection: 'row',
    marginTop: _config.COMMON_CARD_DESC_TO_TITLE_MARGIN,
    lineHeight: _config.COMMON_CARD_DESC_LINE_HEIGHT,
    alignItems: 'center'
  },
  feedBackRate: {
    fontSize: _config.COMMON_CARD_FONT_SIZE_11,
    color: _designBase.LL_UI.Color.TEXT_MAIN,
    marginRight: (0, _utils.productAdapter)(6)
  },
  soldStock: {
    fontSize: _config.COMMON_CARD_FONT_SIZE_11,
    color: _designBase.LL_UI.Color.TEXT_MAIN
  }
});
//# sourceMappingURL=style.js.map