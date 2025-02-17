import { productAdapter } from '../../../utils/utils';
import { Platform, StyleSheet } from 'react-native';
import { GOOD_CARD_WIDTH, HEAD_IMG_HEIGHT, HEAD_IMG_MARGIN_RIGHT, MAX_POI, MAX_POI_FONT_SIZE, MAX_PRICE, MAX_PRICE_FONT_SIZE, ONE_LINE_TITLE_FONT, POI_PADDING_BOTTOM, POI_PADDING_TOP, PRICE_INFO_MARGIN_TOP, PROUDUCT_DISTANCE, TITLE_FONT_SIZE } from '../config/config';

// 瀑布流需要动态计算高度，来区分放左边还是右边
// 商品图片高度 144  + 标题上下间距各8即 16 + 标题为一行字时 14+ 一行间距 3 + 打标签价格一行最大字为 20+最大行间距为 4+ poi上间距 10+ poi下间距 14 + poi字大小 12
export default StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  recommendItem: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: productAdapter(8)
  },
  head: {
    width: GOOD_CARD_WIDTH,
    height: HEAD_IMG_HEIGHT,
    borderTopLeftRadius: productAdapter(8),
    borderTopRightRadius: productAdapter(8)
  },
  icon: {
    // android图片设置marginRight不生效，故使用空格
    marginRight: Platform.OS === 'android' ? 0 : HEAD_IMG_MARGIN_RIGHT
  },
  txt: {
    width: HEAD_IMG_MARGIN_RIGHT,
    opacity: 0
  },
  titleInfo: {
    color: '#222',
    fontSize: TITLE_FONT_SIZE,
    // 注意TITLE_LINE_HEIGHT随TITLE_FONT_SIZE变化需看下是否需要更改
    lineHeight: ONE_LINE_TITLE_FONT,
    fontWeight: '500'
  },
  unit: {
    fontSize: productAdapter(12)
  },
  priceInfo: {
    alignItems: 'flex-end',
    marginTop: PRICE_INFO_MARGIN_TOP,
    paddingBottom: PROUDUCT_DISTANCE,
    borderBottomColor: '#eaeaea',
    borderBottomWidth: productAdapter(0.5)
  },
  discountPrice: {
    fontSize: MAX_PRICE_FONT_SIZE,
    // 注意MAX_PRICE_LINE_HEIGHT随MAX_PRICE_FONT_SIZE变化需看下是否需要更改
    lineHeight: MAX_PRICE,
    fontWeight: '500',
    color: '#FE3666'
  },
  originPriceInfo: {
    marginLeft: productAdapter(3),
    marginBottom: productAdapter(3)
  },
  originPrice: {
    fontSize: productAdapter(12),
    color: '#9c9c9c',
    textDecorationColor: '#9c9c9c',
    textDecorationLine: 'line-through'
  },
  secondaryCardTimes: {
    fontSize: productAdapter(10),
    fontWeight: '400'
  },
  poiIcon: {
    width: productAdapter(14),
    height: productAdapter(14)
  },
  content: {
    paddingHorizontal: productAdapter(10),
    position: 'relative',
    paddingTop: PROUDUCT_DISTANCE
  },
  poi: {
    paddingTop: POI_PADDING_TOP,
    justifyContent: 'space-between',
    paddingBottom: POI_PADDING_BOTTOM,
    paddingHorizontal: productAdapter(10),
    alignItems: 'center'
  },
  poiTxt: {
    fontSize: MAX_POI_FONT_SIZE,
    // 注意MAX_POIE随MAX_POI变化需看下是否需要更改
    lineHeight: MAX_POI,
    color: '#666'
  },
  poiName: {
    marginLeft: productAdapter(2)
  },
  poiInfo: {
    width: productAdapter(126)
  },
  priceMark: {
    marginBottom: productAdapter(4),
    marginLeft: productAdapter(3),
    marginRight: productAdapter(2)
  }
});
//# sourceMappingURL=style.js.map