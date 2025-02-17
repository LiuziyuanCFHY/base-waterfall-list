"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PerformanceWaterfallList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _waterFallRowItem = _interopRequireDefault(require("./waterFallRowItem"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PerformanceWaterfallList = exports.PerformanceWaterfallList = /*#__PURE__*/(0, _react.memo)(/*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    data,
    numColumns = 2,
    onItemLayoutDone,
    marginLeft,
    marginRight,
    cellInnerMargin,
    cellTopMargin,
    ...otherProps
  } = props;
  const _itemHeightsRef = (0, _react.useRef)([]);
  const flatListRef = (0, _react.useRef)(null);
  const [update, forceUpdate] = (0, _react.useState)(false);
  const [listData, changeListData] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    _itemHeightsRef.current = [];
  }, [numColumns]);
  (0, _react.useImperativeHandle)(ref, () => {
    return {
      flatList: flatListRef.current,
      refreshList(offset = 0, animated = true) {
        var _flatListRef$current;
        _itemHeightsRef.current = [];
        (_flatListRef$current = flatListRef.current) === null || _flatListRef$current === void 0 || _flatListRef$current.scrollToOffset({
          offset,
          animated
        });
      }
    };
  }, []);
  const [forceUpdateLayout, setForceUpdateLayout] = (0, _react.useState)(0);
  (0, _react.useMemo)(() => {
    if (!data) {
      return;
    }
    if (forceUpdateLayout > 0) {
      setForceUpdateLayout(forceUpdateLayout);
    }
    const columnHeights = new Array(numColumns).fill(0);
    let rowData = [];
    let rowIndex = 0;
    let rowOffsetTop = 0;
    const dataSource = [];
    data.forEach((item, index) => {
      /**
       * 选中当前高度最小的列 将元素放在高度最小的列
       */
      let columnIndex = 0;
      for (let idx = 1; idx < numColumns; idx++) {
        if (columnHeights[columnIndex] > columnHeights[idx]) {
          columnIndex = idx;
          break;
        }
      }
      const itemH = _itemHeightsRef.current[index] || 0;
      const offsetTop = columnHeights[columnIndex] || 0;
      columnHeights[columnIndex] += itemH;
      if (rowData.length === numColumns) {
        var _dataSource$rowIndex;
        rowOffsetTop += ((_dataSource$rowIndex = dataSource[rowIndex]) === null || _dataSource$rowIndex === void 0 ? void 0 : _dataSource$rowIndex.rowH) || 0;
        rowData = [];
        rowIndex++;
      }
      rowData.push({
        offsetTop,
        itemH,
        index,
        itemData: item,
        columnIndex
      });

      /**
       * 一行的高度由最高的item决定
       * 获取一行中 最高的item
       */
      const largestItem = rowData.sort((a, b) => b.itemH + b.offsetTop - (a.itemH + a.offsetTop))[0];
      const rowH = largestItem.offsetTop + largestItem.itemH - rowOffsetTop;
      dataSource[rowIndex] = {
        rowIndex,
        rowData,
        rowH,
        rowOffsetTop
      };
    });
    forceUpdate(false);
    changeListData(dataSource);
  }, [data, numColumns, forceUpdateLayout]);

  /**
   * 收集每个item的实际高度
   */
  const onItemHeightChange = (0, _react.useCallback)((height, index) => {
    if (!data) {
      return;
    }
    if (_itemHeightsRef.current[index] === height) {
      return;
    }
    _itemHeightsRef.current[index] = height;
    for (let i = 0; i < data.length; i++) {
      if (_itemHeightsRef.current[i] === undefined) {
        return;
      }
    }
    /**
     * 所有item高度收集完毕后强制刷新页面
     */
    forceUpdate(!update);
    setForceUpdateLayout(forceUpdateLayout + 1);
    onItemLayoutDone && onItemLayoutDone();
  }, [data, forceUpdateLayout, onItemLayoutDone, update]);
  const onLayout = (0, _react.useCallback)((e, index) => {
    if (_itemHeightsRef.current[index] === undefined || _itemHeightsRef.current[index] === 0) {
      onItemHeightChange(e.nativeEvent.layout.height, index);
    }
  }, [onItemHeightChange]);
  const renderItem = (0, _react.useCallback)(({
    item,
    _index
  }) => {
    return /*#__PURE__*/_react.default.createElement(_waterFallRowItem.default, {
      item: item,
      cusTomRowStyle: undefined,
      numColumns: numColumns,
      onLayout: onLayout,
      renderItem: props.renderItem,
      marginLeft: marginLeft,
      marginRight: marginRight,
      cellInnerMargin: cellInnerMargin,
      cellTopMargin: cellTopMargin
    });
  }, [cellInnerMargin, cellTopMargin, marginLeft, marginRight, numColumns, onLayout, props.renderItem]);
  const keyExtractor = (0, _react.useCallback)((item, index) => `row_${index}`, []);
  const viewabilityConfig = (0, _react.useMemo)(() => {
    return {
      viewAreaCoveragePercentThreshold: 1
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_reactNative.FlatList, _extends({
    keyExtractor: keyExtractor
  }, otherProps, {
    ref: flatListRef,
    horizontal: false,
    numColumns: 1,
    data: listData,
    renderItem: renderItem,
    viewabilityConfig: viewabilityConfig,
    onViewableItemsChanged: props.onViewableItemsChanged
  }));
}));
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(/*#__PURE__*/(0, _react.forwardRef)(PerformanceWaterfallList));
//# sourceMappingURL=index.js.map