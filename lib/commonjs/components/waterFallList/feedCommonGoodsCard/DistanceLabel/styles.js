"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _designBase = require("@locallife/design-base");
var _config = require("../../config/config");
var _utils = require("../../../../utils/utils");
var _utils2 = require("@locallife/utils");
var _default = exports.default = _reactNative.StyleSheet.create({
  distanceLabel: {
    backgroundColor: (0, _utils2.isIOS)() ? '#0000006a' : '#0000009f',
    marginLeft: (0, _utils.productAdapter)(6),
    borderRadius: (0, _utils.productAdapter)(3),
    marginBottom: (0, _utils.productAdapter)(6),
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: (0, _utils.productAdapter)(4),
    paddingRight: (0, _utils.productAdapter)(4),
    paddingVertical: (0, _utils.productAdapter)(2)
  },
  distanceIcon: {
    width: (0, _utils.productAdapter)(14),
    height: (0, _utils.productAdapter)(14),
    marginRight: (0, _utils.productAdapter)(2)
  },
  distanceText: {
    fontSize: _config.COMMON_CARD_FONT_SIZE_12,
    color: _designBase.LL_UI.Color.TEXT_WHITE
  },
  line: {
    height: (0, _utils.productAdapter)(8),
    width: (0, _utils.productAdapter)(0.5),
    backgroundColor: _designBase.LL_UI.Color.TEXT_WHITE,
    marginLeft: (0, _utils.productAdapter)(4),
    marginRight: (0, _utils.productAdapter)(2)
  }
});
//# sourceMappingURL=styles.js.map