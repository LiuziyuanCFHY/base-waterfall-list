"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _image = _interopRequireDefault(require("@kds/image"));
var _bizComponent = require("@locallife/biz-component");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _style = require("./style");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function CountDownContainer({
  data,
  end
}) {
  var _data$countdownInfo, _data$countdownInfo2, _data$countdownInfo3, _data$countdownInfo4, _data$countdownInfo5;
  return /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: data === null || data === void 0 || (_data$countdownInfo = data.countdownInfo) === null || _data$countdownInfo === void 0 ? void 0 : _data$countdownInfo.bgImgUrl
  }, /*#__PURE__*/_react.default.createElement(_image.default, {
    source: {
      uris: [{
        url: (data === null || data === void 0 || (_data$countdownInfo2 = data.countdownInfo) === null || _data$countdownInfo2 === void 0 ? void 0 : _data$countdownInfo2.bgImgUrl) ?? ''
      }]
    },
    style: _style.styles.countDownBgStyle
  }, /*#__PURE__*/_react.default.createElement(_image.default, {
    source: {
      uris: [{
        url: (data === null || data === void 0 || (_data$countdownInfo3 = data.countdownInfo) === null || _data$countdownInfo3 === void 0 ? void 0 : _data$countdownInfo3.iconUrl) ?? ''
      }]
    },
    style: _style.styles.icon
  }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _style.styles.countDownContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_style.styles.desTextStyle]
  }, (data === null || data === void 0 || (_data$countdownInfo4 = data.countdownInfo) === null || _data$countdownInfo4 === void 0 ? void 0 : _data$countdownInfo4.text) ?? ''), /*#__PURE__*/_react.default.createElement(_bizComponent.CountDown, {
    timeStamp: (data === null || data === void 0 || (_data$countdownInfo5 = data.countdownInfo) === null || _data$countdownInfo5 === void 0 ? void 0 : _data$countdownInfo5.endTime) ?? 0,
    loopCountDown: false,
    textStyle: _style.styles.title,
    endCallback: end
  }))));
}
var _default = exports.default = /*#__PURE__*/_react.default.memo(CountDownContainer);
//# sourceMappingURL=index.js.map