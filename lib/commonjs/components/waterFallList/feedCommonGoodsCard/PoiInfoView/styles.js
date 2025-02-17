"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _utils = require("../../../../utils/utils");
var _config = require("../../config/config");
var _designBase = require("@locallife/design-base");
var _default = exports.default = _reactNative.StyleSheet.create({
  shopInfoLineContainer: {
    flexDirection: 'row',
    height: _config.COMMON_CARD_POI_HEIGHT,
    alignItems: 'center',
    flexWrap: 'nowrap',
    borderTopColor: '#eaeaea',
    borderTopWidth: (0, _utils.productAdapter)(0.5)
  },
  shopInfoContainer: {
    flexDirection: 'row',
    flexShrink: 1,
    alignItems: 'center'
  },
  shopIcon: {
    width: (0, _utils.productAdapter)(14),
    height: (0, _utils.productAdapter)(14),
    marginRight: (0, _utils.productAdapter)(2)
  },
  subTitle: {
    fontWeight: '400',
    fontSize: _config.COMMON_CARD_FONT_SIZE_11,
    lineHeight: (0, _utils.productAdapter)(16),
    flexShrink: 1,
    color: _designBase.LL_UI.Color.TEXT_MAIN
  },
  arrowIcon: {
    width: (0, _utils.productAdapter)(10),
    height: (0, _utils.productAdapter)(10),
    marginRight: (0, _utils.productAdapter)(2)
  }
});
//# sourceMappingURL=styles.js.map