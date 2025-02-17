"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _EStyleUtil = require("../..//utils/EStyleUtil");
var _utils = require("@locallife/utils");
var _designBase = require("@locallife/design-base");
var _default = exports.default = _EStyleUtil.EStyleUtil.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2
  },
  text: {
    fontSize: 12,
    color: _designBase.LL_UI.Color.TEXT_MAIN,
    includeFontPadding: false
  },
  textNew: {
    fontSize: 14,
    color: () => (0, _utils.getThemeColor)('cs_common_text_secondary'),
    includeFontPadding: false
  },
  icon: {
    width: 14,
    height: 14,
    marginLeft: 2,
    tintColor: () => (0, _utils.getThemeColor)('cs_common_text_secondary')
  },
  iconNew: {
    width: 12,
    height: 12,
    marginLeft: 4,
    tintColor: () => (0, _utils.getThemeColor)('cs_common_text_secondary')
  }
});
//# sourceMappingURL=styles.js.map