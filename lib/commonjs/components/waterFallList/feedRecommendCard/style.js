"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _utils = require("../../../utils/utils");
var _reactNative = require("react-native");
var _config = require("../config/config");
// 瀑布流需要动态计算高度，来区分放左边还是右边
// 商品图片高度 144  + 标题上下间距各8即 16 + 标题为一行字时 14+ 一行间距 3 + 打标签价格一行最大字为 20+最大行间距为 4+ poi上间距 10+ poi下间距 14 + poi字大小 12
var _default = exports.default = _reactNative.StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  recommendItem: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: (0, _utils.productAdapter)(8)
  },
  head: {
    width: _config.GOOD_CARD_WIDTH,
    height: _config.HEAD_IMG_HEIGHT,
    borderTopLeftRadius: (0, _utils.productAdapter)(8),
    borderTopRightRadius: (0, _utils.productAdapter)(8)
  },
  icon: {
    // android图片设置marginRight不生效，故使用空格
    marginRight: _reactNative.Platform.OS === 'android' ? 0 : _config.HEAD_IMG_MARGIN_RIGHT
  },
  txt: {
    width: _config.HEAD_IMG_MARGIN_RIGHT,
    opacity: 0
  },
  titleInfo: {
    color: '#222',
    fontSize: _config.TITLE_FONT_SIZE,
    // 注意TITLE_LINE_HEIGHT随TITLE_FONT_SIZE变化需看下是否需要更改
    lineHeight: _config.ONE_LINE_TITLE_FONT,
    fontWeight: '500'
  },
  unit: {
    fontSize: (0, _utils.productAdapter)(12)
  },
  priceInfo: {
    alignItems: 'flex-end',
    marginTop: _config.PRICE_INFO_MARGIN_TOP,
    paddingBottom: _config.PROUDUCT_DISTANCE,
    borderBottomColor: '#eaeaea',
    borderBottomWidth: (0, _utils.productAdapter)(0.5)
  },
  discountPrice: {
    fontSize: _config.MAX_PRICE_FONT_SIZE,
    // 注意MAX_PRICE_LINE_HEIGHT随MAX_PRICE_FONT_SIZE变化需看下是否需要更改
    lineHeight: _config.MAX_PRICE,
    fontWeight: '500',
    color: '#FE3666'
  },
  originPriceInfo: {
    marginLeft: (0, _utils.productAdapter)(3),
    marginBottom: (0, _utils.productAdapter)(3)
  },
  originPrice: {
    fontSize: (0, _utils.productAdapter)(12),
    color: '#9c9c9c',
    textDecorationColor: '#9c9c9c',
    textDecorationLine: 'line-through'
  },
  secondaryCardTimes: {
    fontSize: (0, _utils.productAdapter)(10),
    fontWeight: '400'
  },
  poiIcon: {
    width: (0, _utils.productAdapter)(14),
    height: (0, _utils.productAdapter)(14)
  },
  content: {
    paddingHorizontal: (0, _utils.productAdapter)(10),
    position: 'relative',
    paddingTop: _config.PROUDUCT_DISTANCE
  },
  poi: {
    paddingTop: _config.POI_PADDING_TOP,
    justifyContent: 'space-between',
    paddingBottom: _config.POI_PADDING_BOTTOM,
    paddingHorizontal: (0, _utils.productAdapter)(10),
    alignItems: 'center'
  },
  poiTxt: {
    fontSize: _config.MAX_POI_FONT_SIZE,
    // 注意MAX_POIE随MAX_POI变化需看下是否需要更改
    lineHeight: _config.MAX_POI,
    color: '#666'
  },
  poiName: {
    marginLeft: (0, _utils.productAdapter)(2)
  },
  poiInfo: {
    width: (0, _utils.productAdapter)(126)
  },
  priceMark: {
    marginBottom: (0, _utils.productAdapter)(4),
    marginLeft: (0, _utils.productAdapter)(3),
    marginRight: (0, _utils.productAdapter)(2)
  }
});
//# sourceMappingURL=style.js.map