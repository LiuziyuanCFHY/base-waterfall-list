import { LL_UI } from '@locallife/design-base';
import { StyleSheet } from 'react-native';
import { productAdapter } from '../../../../utils/utils';
import { COMMON_CARD_FONT_SIZE_11, COMMON_CARD_FONT_SIZE_18, COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT, COMMON_CARD_PRICE_VERTICAL_MARGIN } from '../../config/config';
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    right: productAdapter(12),
    left: 0,
    height: COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT,
    borderRadius: productAdapter(6),
    backgroundColor: '#FE4C0012',
    marginTop: COMMON_CARD_PRICE_VERTICAL_MARGIN,
    marginBottom: COMMON_CARD_PRICE_VERTICAL_MARGIN
  },
  leftContainer: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: productAdapter(6),
    alignItems: 'center'
  },
  firstPriceFontStyle: {
    fontSize: COMMON_CARD_FONT_SIZE_18,
    fontFamily: 'SF Pro Display',
    color: LL_UI.Color.PRICE_TEXT,
    fontWeight: '700'
  },
  rightTouch: {
    position: 'absolute',
    right: 0,
    width: productAdapter(89),
    zIndex: 100,
    height: COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT
  },
  qiangButton: {
    position: 'absolute',
    right: 0,
    width: productAdapter(46),
    height: COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT
  },
  priceInfoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginLeft: productAdapter(8)
  },
  priceUnit: {
    fontFamily: 'SF Pro Display',
    color: LL_UI.Color.PRICE_TEXT,
    fontSize: COMMON_CARD_FONT_SIZE_11,
    fontWeight: '700',
    marginBottom: productAdapter(1)
  },
  priceSuffix: {
    fontFamily: 'PingFang SC',
    fontWeight: '500',
    fontSize: LL_UI.Font.SIZE_11,
    color: LL_UI.Color.PRICE_TEXT,
    marginLeft: productAdapter(4)
  },
  originPrice: {
    fontWeight: '500',
    fontSize: LL_UI.Font.SIZE_11,
    fontFamily: 'PingFang SC',
    textDecorationLine: 'line-through',
    color: LL_UI.Color.TEXT_SECEND,
    marginLeft: productAdapter(4),
    marginTop: productAdapter(6)
  }
});
//# sourceMappingURL=styles.js.map