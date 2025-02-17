"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _padStart = _interopRequireDefault(require("lodash/padStart"));
var _style = require("./style");
var _utils = require("@locallife/utils");
var _bizComponent = require("@locallife/biz-component");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function getTime(timeStamp, initTimeStamp, endContent) {
  const leftTime = timeStamp - initTimeStamp;
  let h, m, s;
  if (leftTime > 0) {
    h = Math.floor(leftTime / 1000 / 60 / 60);
    m = Math.floor(leftTime / 1000 / 60 % 60);
    s = Math.floor(leftTime / 1000 % 60);
  } else {
    return endContent ? endContent : undefined;
  }
  const format = n => {
    return (0, _padStart.default)(String(n), 2, '0');
  };
  return `${format(h)}:${format(m)}:${format(s)}`;
}

// 商品item左侧封面倒计时组件
function CountDown({
  timeStamp,
  end,
  endContent
}) {
  const countDown = (0, _react.useCallback)(async () => {
    return await (0, _utils.getServerTime)();
  }, []);
  const intervalIDRef = (0, _react.useRef)();
  const [showTime, setShowTime] = (0, _react.useState)('');
  function countFinished(lftTime, callback) {
    if (callback) {
      // lftTime 指到计时被舍入的部分，比如到计时剩余 100 ms，但因为小于 1s，会显示 0，lftTime = 100；
      const time = Math.min(1000, lftTime + Math.random() * 1000);
      setTimeout(() => {
        callback();
      }, time);
    }
  }
  const loopCountDown = (0, _react.useCallback)((timeStamp, resultTime, endContent) => {
    //@ts-ignore
    setShowTime(getTime(timeStamp, resultTime, endContent));
    if (showTime !== endContent) {
      intervalIDRef.current = setInterval(() => {
        countDown().then(result => {
          //@ts-ignore
          setShowTime(getTime(timeStamp, result, endContent));
          if (showTime === endContent) {
            countFinished(timeStamp - result, end);
            //@ts-ignore
            clearInterval(intervalIDRef === null || intervalIDRef === void 0 ? void 0 : intervalIDRef.current);
          }
        });
      }, 1000);
    } else {
      countFinished(timeStamp - resultTime, end);
    }
  }, [countDown, end, showTime]);
  (0, _react.useEffect)(() => {
    countDown().then(resultTime => {
      loopCountDown(timeStamp, resultTime, endContent);
    }).catch(() => {
      loopCountDown(timeStamp, Date.now(), endContent);
    });
    return () => {
      if (intervalIDRef !== null && intervalIDRef !== void 0 && intervalIDRef.current) {
        //@ts-ignore
        clearInterval(intervalIDRef === null || intervalIDRef === void 0 ? void 0 : intervalIDRef.current);
      }
    };
  }, [countDown, endContent, loopCountDown, showTime, timeStamp]);
  return /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: showTime
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _style.styles.container
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.styles.title
  }, showTime)));
}
var _default = exports.default = /*#__PURE__*/_react.default.memo(CountDown);
//# sourceMappingURL=index.js.map