"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cardStyles = void 0;
var _utils = require("@locallife/utils");
var _EStyleUtil = require("../../utils/EStyleUtil");
var _reactNative = require("react-native");
var _designBase = require("@locallife/design-base");
const cardStyles = exports.cardStyles = _EStyleUtil.EStyleUtil.create({
  cardContainer: {
    width: _reactNative.Platform.OS === 'ios' ? _designBase.SCREEN_WIDTH_414 : 'auto',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: () => (0, _utils.getThemeColor)({
      dark: '#2B2B2F',
      light: '#FFFFFF'
    })
  }
});
//# sourceMappingURL=styles.js.map