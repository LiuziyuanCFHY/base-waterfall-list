function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { NativeModules } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { rem } from '@kid-ui/krn/lib/utils';
export let localLifeBizFeedCardAdaptScreen = false;
export const changeLocalLifeBizFeedCardAdaptScreen = adaptScreen => {
  localLifeBizFeedCardAdaptScreen = adaptScreen;
};
const DIMENSIONS_WHITE_LIST = ['flex', 'flexGrow', 'flexShrink', 'flexBasis', 'zIndex', 'aspectRatio', 'opacity', 'elevation', 'shadowOpacity', 'scale'];
class EStyleWrapper {
  constructor() {
    _defineProperty(this, "globalRows", {
      $theme: NativeModules.KSAppearance.getColorScheme()
    });
    _defineProperty(this, "create", styles => {
      if (localLifeBizFeedCardAdaptScreen) {
        for (const key in styles) {
          if (typeof styles[key] === 'object') {
            this.updateNumberStyles(styles[key]);
          }
        }
      }
      return EStyleSheet.create(styles);
    });
  }
  updateNumberStyles(styles) {
    for (const key in styles) {
      if (typeof styles[key] === 'number' && !DIMENSIONS_WHITE_LIST.includes(key)) {
        styles[key] = rem(styles[key]);
      }
    }
  }
  build(obj = {}) {
    this.globalRows = {
      ...this.globalRows,
      ...obj
    };
    EStyleSheet.build(this.globalRows);
  }
  value(namespace) {
    return EStyleSheet.value(namespace);
  }
  flatten(style) {
    return EStyleSheet.flatten(style);
  }

  /**
   * 将数字转换为rem，用于在EStyleUtil样式***外***使用
   * 某些场景中你需要和EStyleUtil样式内的数字保持一致，可以使用该方法，因为EStyleUtil样式内的数字已经默认转换了
   * @param num
   */
  transNumberToRem(num) {
    return rem(num);
  }
}
export const EStyleUtil = new EStyleWrapper();
//# sourceMappingURL=EStyleUtil.js.map