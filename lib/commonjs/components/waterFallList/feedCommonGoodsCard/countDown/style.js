"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _designBase = require("@locallife/design-base");
var _utils = require("../../../../utils/utils");
var _reactNative = require("react-native");
const styles = exports.styles = _reactNative.StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginLeft: (0, _utils.productAdapter)(2)
  },
  title: {
    fontFamily: 'SF Pro Display',
    fontSize: (0, _utils.productAdapter)(11),
    fontWeight: '700',
    color: _designBase.LL_UI.Color.TEXT_WHITE,
    includeFontPadding: false
  }
});
//# sourceMappingURL=style.js.map