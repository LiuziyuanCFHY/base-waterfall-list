"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rem = exports.get414Px = exports.SCREEN_WIDTH = exports.RADIO = void 0;
var _reactNative = require("react-native");
var _utils = require("@kid-ui/krn/lib/utils");
const SCREEN_WIDTH = exports.SCREEN_WIDTH = Math.min(_reactNative.Dimensions.get('screen').width, _reactNative.Dimensions.get('screen').height);
const isIOS = _reactNative.Platform.OS === 'ios';
const radio414 = SCREEN_WIDTH / 414;
const getRADIO = () => {
  if (isIOS) {
    if (_reactNative.Dimensions.get('window').width < 390) {
      return radio414;
    } else {
      return 1;
    }
  }
  return radio414;
};
const RADIO = exports.RADIO = getRADIO();
const get414Px = num => {
  return num / RADIO;
};
exports.get414Px = get414Px;
const rem = (num, baseWidth) => {
  return (0, _utils.rem)(num, baseWidth);
};
exports.rem = rem;
//# sourceMappingURL=designBase414.js.map