"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _designBase = require("../../utils/designBase414");
var _utils = require("@kid-ui/krn/lib/utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function WaterFallItem({
  index,
  columnIndex,
  itemW,
  item,
  offsetTop,
  opacity,
  onLayout,
  children,
  marginLeft,
  cellInnerMargin
}) {
  const itemStyle = (0, _react.useMemo)(() => {
    const left = (0, _utils.rem)(marginLeft) + itemW * columnIndex + (0, _utils.rem)(cellInnerMargin) * columnIndex;
    return {
      position: 'absolute',
      top: (0, _designBase.get414Px)(offsetTop - item.rowOffsetTop),
      left: (0, _designBase.get414Px)(left),
      opacity: opacity,
      width: (0, _designBase.get414Px)(itemW)
    };
  }, [cellInnerMargin, columnIndex, item.rowOffsetTop, itemW, marginLeft, offsetTop, opacity]);
  const handleOnLayout = (0, _react.useCallback)(e => {
    onLayout(e, index);
  }, [onLayout, index]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    key: index,
    style: itemStyle,
    onLayout: handleOnLayout
  }, children);
}
var _default = exports.default = /*#__PURE__*/_react.default.memo(WaterFallItem);
//# sourceMappingURL=waterFallItem.js.map