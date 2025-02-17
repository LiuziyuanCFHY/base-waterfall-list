"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localLifeBizFeedCardAdaptScreen = exports.changeLocalLifeBizFeedCardAdaptScreen = exports.EStyleUtil = void 0;
var _reactNative = require("react-native");
var _reactNativeExtendedStylesheet = _interopRequireDefault(require("react-native-extended-stylesheet"));
var _utils = require("@kid-ui/krn/lib/utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
let localLifeBizFeedCardAdaptScreen = exports.localLifeBizFeedCardAdaptScreen = false;
const changeLocalLifeBizFeedCardAdaptScreen = adaptScreen => {
  exports.localLifeBizFeedCardAdaptScreen = localLifeBizFeedCardAdaptScreen = adaptScreen;
};
exports.changeLocalLifeBizFeedCardAdaptScreen = changeLocalLifeBizFeedCardAdaptScreen;
const DIMENSIONS_WHITE_LIST = ['flex', 'flexGrow', 'flexShrink', 'flexBasis', 'zIndex', 'aspectRatio', 'opacity', 'elevation', 'shadowOpacity', 'scale'];
class EStyleWrapper {
  constructor() {
    _defineProperty(this, "globalRows", {
      $theme: _reactNative.NativeModules.KSAppearance.getColorScheme()
    });
    _defineProperty(this, "create", styles => {
      if (localLifeBizFeedCardAdaptScreen) {
        for (const key in styles) {
          if (typeof styles[key] === 'object') {
            this.updateNumberStyles(styles[key]);
          }
        }
      }
      return _reactNativeExtendedStylesheet.default.create(styles);
    });
  }
  updateNumberStyles(styles) {
    for (const key in styles) {
      if (typeof styles[key] === 'number' && !DIMENSIONS_WHITE_LIST.includes(key)) {
        styles[key] = (0, _utils.rem)(styles[key]);
      }
    }
  }
  build(obj = {}) {
    this.globalRows = {
      ...this.globalRows,
      ...obj
    };
    _reactNativeExtendedStylesheet.default.build(this.globalRows);
  }
  value(namespace) {
    return _reactNativeExtendedStylesheet.default.value(namespace);
  }
  flatten(style) {
    return _reactNativeExtendedStylesheet.default.flatten(style);
  }

  /**
   * 将数字转换为rem，用于在EStyleUtil样式***外***使用
   * 某些场景中你需要和EStyleUtil样式内的数字保持一致，可以使用该方法，因为EStyleUtil样式内的数字已经默认转换了
   * @param num
   */
  transNumberToRem(num) {
    return (0, _utils.rem)(num);
  }
}
const EStyleUtil = exports.EStyleUtil = new EStyleWrapper();
//# sourceMappingURL=EStyleUtil.js.map