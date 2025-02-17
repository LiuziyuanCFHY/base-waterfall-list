function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useRef, useState, useEffect, useImperativeHandle, memo, forwardRef, useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import WaterFallRowItem from './waterFallRowItem';
const PerformanceWaterfallList = /*#__PURE__*/memo( /*#__PURE__*/forwardRef((props, ref) => {
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
  const _itemHeightsRef = useRef([]);
  const flatListRef = useRef(null);
  const [update, forceUpdate] = useState(false);
  const [listData, changeListData] = useState([]);
  useEffect(() => {
    _itemHeightsRef.current = [];
  }, [numColumns]);
  useImperativeHandle(ref, () => {
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
  const [forceUpdateLayout, setForceUpdateLayout] = useState(0);
  useMemo(() => {
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
  const onItemHeightChange = useCallback((height, index) => {
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
  const onLayout = useCallback((e, index) => {
    if (_itemHeightsRef.current[index] === undefined || _itemHeightsRef.current[index] === 0) {
      onItemHeightChange(e.nativeEvent.layout.height, index);
    }
  }, [onItemHeightChange]);
  const renderItem = useCallback(({
    item,
    _index
  }) => {
    return /*#__PURE__*/React.createElement(WaterFallRowItem, {
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
  const keyExtractor = useCallback((item, index) => `row_${index}`, []);
  const viewabilityConfig = useMemo(() => {
    return {
      viewAreaCoveragePercentThreshold: 1
    };
  }, []);
  return /*#__PURE__*/React.createElement(FlatList, _extends({
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
export default /*#__PURE__*/memo( /*#__PURE__*/forwardRef(PerformanceWaterfallList));
export { PerformanceWaterfallList };
//# sourceMappingURL=index.js.map