"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _style = require("./style");
var _waterFallItem = _interopRequireDefault(require("./waterFallItem"));
var _designBase = require("../../utils/designBase414");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function WaterFallRowItem({
  item,
  cusTomRowStyle,
  numColumns,
  onLayout,
  renderItem,
  marginLeft = 16,
  marginRight = 16,
  cellTopMargin = 10,
  cellInnerMargin = 8
}) {
  const waterStyle = (0, _react.useMemo)(() => {
    return [_style.style.rowStyle, ...(cusTomRowStyle ? [cusTomRowStyle] : []), (item.rowH || 0) > 0 ? {
      height: (0, _designBase.get414Px)(item.rowH) || 0
    } : undefined];
  }, [item.rowH, cusTomRowStyle]);
  const itemW = (0, _react.useMemo)(() => {
    return (_designBase.SCREEN_WIDTH - (0, _designBase.rem)(marginLeft + marginRight + (numColumns - 1) * cellInnerMargin)) / numColumns;
  }, [numColumns, marginLeft, marginRight, cellInnerMargin]);
  const dividerStyle = (0, _react.useMemo)(() => {
    return {
      ..._style.style.diverStyle,
      height: (0, _designBase.rem)(cellTopMargin)
    };
  }, [cellTopMargin]);
  const render = (0, _react.useCallback)(data => {
    return data.rowData.map(rowItemData => {
      const {
        offsetTop,
        columnIndex,
        index,
        itemH
      } = rowItemData;
      const opacity = itemH ? 1 : 0;
      return /*#__PURE__*/_react.default.createElement(_waterFallItem.default, {
        item: data,
        key: data.rowIndex + '_' + index,
        index: index,
        columnIndex: columnIndex,
        itemW: itemW,
        offsetTop: offsetTop,
        opacity: opacity,
        onLayout: onLayout,
        marginLeft: marginLeft,
        cellInnerMargin: cellInnerMargin
      }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderItem({
        item: rowItemData,
        index,
        row: data
      }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
        style: dividerStyle
      })));
    });
  }, [cellInnerMargin, dividerStyle, itemW, marginLeft, onLayout, renderItem]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: waterStyle
  }, render(item));
}
var _default = exports.default = /*#__PURE__*/_react.default.memo(WaterFallRowItem);
//# sourceMappingURL=waterFallRowItem.js.map