import { LL_UI } from '@locallife/design-base';
import { StyleSheet } from 'react-native';
import { COMMON_CARD_FONT_SIZE_15, COMMON_CARD_FONT_SIZE_16, COMMON_CARD_FONT_SIZE_22 } from '../config/config';
import { productAdapter } from '../../../utils/utils';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderRadius: productAdapter(8),
    overflow: 'hidden'
  },
  containerItem: {
    flex: 1,
    flexDirection: 'column'
  },
  textContainer: {
    flexDirection: 'column',
    marginTop: productAdapter(18),
    marginHorizontal: productAdapter(12)
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  arrowImage: {
    width: productAdapter(20),
    height: productAdapter(20),
    marginBottom: productAdapter(3)
  },
  title: {
    fontFamily: 'krn_font_LocalLifeFZLanTingHeiSEBGBFontFontFamilyAsset_FZLanTingHeiS-EB-GB',
    color: LL_UI.Color.TEXT_WHITE,
    fontSize: COMMON_CARD_FONT_SIZE_22
  },
  subTitle: {
    fontWeight: '500',
    color: LL_UI.Color.TEXT_WHITE,
    fontSize: COMMON_CARD_FONT_SIZE_15,
    marginTop: productAdapter(3)
  },
  productContainer: {
    flexDirection: 'column',
    marginTop: COMMON_CARD_FONT_SIZE_16
  },
  gradient: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
});
//# sourceMappingURL=styles.js.map