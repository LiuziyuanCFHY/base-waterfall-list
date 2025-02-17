"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _designBase = require("@locallife/design-base");
var _reactNative = require("react-native");
var _config = require("../config/config");
var _utils = require("../../../utils/utils");
const styles = exports.styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderRadius: (0, _utils.productAdapter)(8),
    overflow: 'hidden'
  },
  containerItem: {
    flex: 1,
    flexDirection: 'column'
  },
  textContainer: {
    flexDirection: 'column',
    marginTop: (0, _utils.productAdapter)(18),
    marginHorizontal: (0, _utils.productAdapter)(12)
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  arrowImage: {
    width: (0, _utils.productAdapter)(20),
    height: (0, _utils.productAdapter)(20),
    marginBottom: (0, _utils.productAdapter)(3)
  },
  title: {
    fontFamily: 'krn_font_LocalLifeFZLanTingHeiSEBGBFontFontFamilyAsset_FZLanTingHeiS-EB-GB',
    color: _designBase.LL_UI.Color.TEXT_WHITE,
    fontSize: _config.COMMON_CARD_FONT_SIZE_22
  },
  subTitle: {
    fontWeight: '500',
    color: _designBase.LL_UI.Color.TEXT_WHITE,
    fontSize: _config.COMMON_CARD_FONT_SIZE_15,
    marginTop: (0, _utils.productAdapter)(3)
  },
  productContainer: {
    flexDirection: 'column',
    marginTop: _config.COMMON_CARD_FONT_SIZE_16
  },
  gradient: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  }
});
//# sourceMappingURL=styles.js.map