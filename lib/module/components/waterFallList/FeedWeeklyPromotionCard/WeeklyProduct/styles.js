import { LL_UI } from '@locallife/design-base';
import { StyleSheet } from 'react-native';
import { COMMON_CARD_FONT_SIZE_12, COMMON_CARD_FONT_SIZE_13, COMMON_CARD_FONT_SIZE_14, COMMON_CARD_FONT_SIZE_18, WEEKLY_PRODUCT_MARGIN, WEEKLY_PRODUCT_SIZE } from '../../config/config';
import { productAdapter } from '../../../../utils/utils';
export const styles = StyleSheet.create({
  container: {
    height: productAdapter(64),
    flexDirection: 'row',
    marginHorizontal: WEEKLY_PRODUCT_MARGIN,
    borderRadius: productAdapter(8),
    backgroundColor: '#FFFFFF',
    marginBottom: productAdapter(6),
    alignItems: 'center'
  },
  coverImage: {
    width: WEEKLY_PRODUCT_SIZE,
    height: WEEKLY_PRODUCT_SIZE,
    borderRadius: productAdapter(6),
    marginLeft: productAdapter(3)
  },
  // 右侧内容区的样式
  rightContent: {
    flexDirection: 'column',
    flex: 1,
    marginHorizontal: productAdapter(6)
  },
  productTitle: {
    color: LL_UI.Color.TEXT_TITLE,
    fontWeight: '500',
    fontSize: COMMON_CARD_FONT_SIZE_14
  },
  priceContainer: {
    marginTop: productAdapter(8),
    flexDirection: 'row',
    // 水平排列
    alignItems: 'baseline'
  },
  pricePrefix: {
    fontFamily: 'SF Pro Display',
    fontSize: COMMON_CARD_FONT_SIZE_12,
    color: LL_UI.Color.PRICE_TEXT,
    fontWeight: '700'
  },
  firstPriceText: {
    fontFamily: 'SF Pro Display',
    color: LL_UI.Color.PRICE_TEXT,
    fontSize: COMMON_CARD_FONT_SIZE_18,
    fontWeight: '700'
  },
  secondPriceText: {
    fontFamily: 'SF Pro Display',
    color: LL_UI.Color.PRICE_TEXT,
    fontSize: COMMON_CARD_FONT_SIZE_13,
    fontWeight: '700'
  },
  originPrice: {
    textDecorationLine: 'line-through',
    color: LL_UI.Color.TEXT_MAIN,
    fontSize: COMMON_CARD_FONT_SIZE_13,
    marginLeft: productAdapter(2)
  }
});
//# sourceMappingURL=styles.js.map