"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NearbyWaterfallList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _NearbyService = require("../../../service/NearbyService");
var _bottom = _interopRequireDefault(require("../../bottom"));
var _designBase = require("@locallife/design-base");
var _model = require("../model");
var _EStyleUtil = require("../../../utils/EStyleUtil");
var _bizComponent = require("@locallife/biz-component");
var _cardContainer = require("../../cardContainer");
var _utils = require("@locallife/utils");
var _footer = require("./footer");
var _fallbackcomponents = require("@locallife/fallbackcomponents");
var _PerformanceWaterfallList = require("../../PerformanceWaterfallList");
var _feedCommonGoodsCard = require("../../waterFallList/feedCommonGoodsCard");
var _FeedWeeklyPromotionCard = _interopRequireDefault(require("../../waterFallList/FeedWeeklyPromotionCard"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const styles = _EStyleUtil.EStyleUtil.create({
  footer: {
    height: 80,
    alignItems: 'center'
  },
  footerText: {
    marginTop: 16,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16
  },
  container: {
    paddingBottom: 16,
    paddingTop: 12,
    paddingHorizontal: 0
  },
  title: {
    fontSize: 16,
    marginBottom: 12,
    fontWeight: 'bold',
    color: () => (0, _utils.getThemeColor)('cs_common_text_title')
  },
  goodsBottomContainer: {
    marginTop: 8,
    marginBottom: 0,
    marginLeft: 3
  }
});
const NearbyWaterfallList = exports.NearbyWaterfallList = /*#__PURE__*/(0, _react.memo)(props => {
  var _ref, _ref2;
  const {
    fetchParams,
    fetchType,
    onFeedWeeklyItemShow,
    onFeedWeeklyPress,
    onItemShow,
    onItemClick,
    cardWidth = _designBase.SCREEN_WIDTH / 2,
    containerStyle,
    titleStyle,
    cardTitle,
    onEndReachedThreshold = 0.2,
    ListFooterComponent = null,
    isShowEmpty,
    setEmpty,
    onClickMore,
    onShowClickMore,
    setIsError,
    onItemHide,
    marginLeft,
    marginRight,
    cellTopMargin,
    cellInnerMargin
  } = props;
  const [nearbyFeedsist, setNearbyFeedsist] = (0, _react.useState)([]);
  const [requestCount, setRequestCount] = (0, _react.useState)(0);
  const [isEmpty, setIsEmpty] = (0, _react.useState)(false);
  const [nextFetch, setNextFetch] = (0, _react.useState)(false);
  const [oldListLength, setOldListLength] = (0, _react.useState)(0);
  const [reportShowLogs, setReportShowLogs] = (0, _react.useState)([]);
  const handleViewableChanged = (0, _react.useCallback)(viewToken => {
    const {
      rowData
    } = viewToken.item;
    const viewTokenIndex = viewToken.index || 0; // 行数
    rowData.forEach(data => {
      const {
        columnIndex,
        itemData
      } = data;
      const feedItemIndex = columnIndex === 0 ? viewTokenIndex * 2 : viewTokenIndex * 2 + 1;
      if (viewToken.isViewable) {
        onItemShow === null || onItemShow === void 0 || onItemShow({
          ...itemData,
          realIndex: feedItemIndex
        }, feedItemIndex);
        reportShowLogs.push(feedItemIndex);
        setReportShowLogs([...new Set(reportShowLogs)]);
      } else {
        onItemHide === null || onItemHide === void 0 || onItemHide({
          ...itemData,
          realIndex: feedItemIndex
        }, feedItemIndex);
      }
    });
  }, [onItemShow, onItemHide, reportShowLogs]);
  const handleSetNearbyFeedsList = (0, _react.useCallback)((data, oldLength) => {
    if (fetchType === _model.IFetchType.ClickMore && (data === null || data === void 0 ? void 0 : data.length) % 2 === 1) {
      const newData = data === null || data === void 0 ? void 0 : data.slice(0, -1);
      setNearbyFeedsist([...newData]);
      return;
    }
    setNearbyFeedsist([...data]);
    setTimeout(() => {
      setOldListLength(oldLength);
    }, 20);
  }, [setNearbyFeedsist, fetchType]);
  (0, _react.useEffect)(() => {
    if (oldListLength % 2 === 1 && fetchType === _model.IFetchType.PullUp) {
      const handleColumnsIndex = Math.floor(oldListLength / 2);
      handleViewableChanged({
        key: '___key' + Date.now(),
        isViewable: true,
        index: handleColumnsIndex,
        item: {
          rowData: [{
            columnIndex: 0,
            itemData: nearbyFeedsist === null || nearbyFeedsist === void 0 ? void 0 : nearbyFeedsist[handleColumnsIndex * 2]
          }, {
            columnIndex: 1,
            itemData: nearbyFeedsist === null || nearbyFeedsist === void 0 ? void 0 : nearbyFeedsist[handleColumnsIndex * 2 + 1]
          }]
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oldListLength, nearbyFeedsist, fetchType]);
  const onViewableItemsChanged = (0, _react.useRef)(({
    changed
  }) => {
    changed.forEach(viewToken => {
      handleViewableChanged(viewToken);
    });
  });
  const {
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isRefetching,
    isError
  } = (0, _NearbyService.useQueryNearbyGoods)(fetchParams, pages => {
    var _pages$lastIndex, _pages$lastIndex2;
    const nowCount = requestCount + 1;
    setRequestCount(nowCount);
    const lastIndex = (pages === null || pages === void 0 ? void 0 : pages.length) - 1;
    const resultDataLenght = (_pages$lastIndex = pages[lastIndex]) === null || _pages$lastIndex === void 0 || (_pages$lastIndex = _pages$lastIndex.data) === null || _pages$lastIndex === void 0 || (_pages$lastIndex = _pages$lastIndex.feedList) === null || _pages$lastIndex === void 0 ? void 0 : _pages$lastIndex.length;
    const hasNext = (_pages$lastIndex2 = pages[lastIndex]) === null || _pages$lastIndex2 === void 0 || (_pages$lastIndex2 = _pages$lastIndex2.data) === null || _pages$lastIndex2 === void 0 ? void 0 : _pages$lastIndex2.hasNext;
    if (nowCount === 1 && !resultDataLenght && !nextFetch) {
      if (hasNext) {
        setNextFetch(true);
        fetchNextPage();
      } else {
        setIsEmpty(true);
        setEmpty === null || setEmpty === void 0 || setEmpty(true);
      }
    } else if (nowCount === 2 && !resultDataLenght && nextFetch) {
      setIsEmpty(true);
      setEmpty === null || setEmpty === void 0 || setEmpty(true);
    }
  }, handleSetNearbyFeedsList, nearbyFeedsist);
  (0, _react.useEffect)(() => {
    if (isError) {
      // 接口报错的情况
      setIsError === null || setIsError === void 0 || setIsError(isError, nearbyFeedsist);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, nearbyFeedsist]);
  const loadingStatus = (0, _react.useMemo)(() => {
    return isFetchingNextPage || isRefetching || isLoading;
  }, [isFetchingNextPage, isRefetching, isLoading]);
  const noMore = (0, _react.useMemo)(() => {
    return !hasNextPage && !isFetchingNextPage;
  }, [hasNextPage, isFetchingNextPage]);
  (0, _react.useEffect)(() => {
    if (!noMore && fetchType === _model.IFetchType.ClickMore && !isEmpty) {
      onShowClickMore === null || onShowClickMore === void 0 || onShowClickMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noMore, fetchType, isEmpty]);
  const handleOnPress = (0, _react.useCallback)(() => {
    if (loadingStatus || !hasNextPage) {
      return;
    }
    fetchNextPage();
    onClickMore === null || onClickMore === void 0 || onClickMore();
  }, [loadingStatus, hasNextPage, fetchNextPage, onClickMore]);
  const footer = (0, _react.useCallback)(() => {
    if (fetchType === _model.IFetchType.ClickMore) {
      return /*#__PURE__*/_react.default.createElement(_bottom.default, {
        loading: false,
        noMore: noMore || isError,
        containerStyle: styles.goodsBottomContainer,
        onPress: handleOnPress
      });
    }
    return /*#__PURE__*/_react.default.createElement(_footer.DetailFooter, {
      isLoading: loadingStatus,
      noMore: noMore || isError,
      isDark: false,
      notShowSlogan: false
    });
  }, [fetchType, noMore, isError, loadingStatus, handleOnPress]);
  const onEndReached = (0, _react.useCallback)(() => {
    if (fetchType === _model.IFetchType.PullUp) {
      if (loadingStatus || !hasNextPage) {
        return;
      }
      fetchNextPage();
    }
  }, [loadingStatus, hasNextPage, fetchNextPage, fetchType]);
  const getFooter = (0, _react.useMemo)(() => {
    if (ListFooterComponent) {
      return ListFooterComponent({
        hasNextPage,
        isLoading,
        isFetchingNextPage,
        isRefetching
      });
    } else {
      return footer();
    }
  }, [ListFooterComponent, hasNextPage, isLoading, isFetchingNextPage, isRefetching, footer]);
  const renderFeedItem = (0, _react.useCallback)(({
    item,
    index: feedItemIndex
  }) => {
    var _item$itemData, _item$itemData2;
    if ((item === null || item === void 0 || (_item$itemData = item.itemData) === null || _item$itemData === void 0 ? void 0 : _item$itemData.type) === _model.FEED_CARD_TYPE.COMMON_GOOD_CARD) {
      return /*#__PURE__*/_react.default.createElement(_feedCommonGoodsCard.FeedCommonGoodsCard, {
        curItem: item === null || item === void 0 ? void 0 : item.itemData,
        index: feedItemIndex,
        onItemClick: onItemClick,
        cardWidth: cardWidth
      });
    } else if ((item === null || item === void 0 || (_item$itemData2 = item.itemData) === null || _item$itemData2 === void 0 ? void 0 : _item$itemData2.type) === _model.FEED_CARD_TYPE.WEEKLY_CARD) {
      var _item$itemData3;
      return /*#__PURE__*/_react.default.createElement(_FeedWeeklyPromotionCard.default, {
        data: item === null || item === void 0 || (_item$itemData3 = item.itemData) === null || _item$itemData3 === void 0 ? void 0 : _item$itemData3.data,
        feedItemIndex: feedItemIndex,
        onFeedWeeklyItemShow: onFeedWeeklyItemShow,
        onFeedWeeklyPress: onFeedWeeklyPress
      });
    } else {
      return /*#__PURE__*/_react.default.createElement(_reactNative.View, null);
    }
  }, [onItemClick, onFeedWeeklyItemShow, onFeedWeeklyPress, cardWidth]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: ((_ref = nearbyFeedsist || []) === null || _ref === void 0 ? void 0 : _ref.length) > 0
  }, /*#__PURE__*/_react.default.createElement(_cardContainer.CardContainer, {
    containerStyle: {
      ...styles.container,
      ...containerStyle
    }
  }, !!cardTitle && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      ...styles.title,
      ...titleStyle
    }
  }, cardTitle), /*#__PURE__*/_react.default.createElement(_PerformanceWaterfallList.PerformanceWaterfallList, {
    data: nearbyFeedsist || [],
    ListFooterComponent: getFooter,
    onEndReachedThreshold: onEndReachedThreshold,
    onEndReached: onEndReached,
    renderItem: renderFeedItem,
    onViewableItemsChanged: onViewableItemsChanged.current,
    marginLeft: marginLeft,
    marginRight: marginRight,
    cellTopMargin: cellTopMargin,
    cellInnerMargin: cellInnerMargin
  }))), !!(isShowEmpty && (isEmpty || isError) && ((_ref2 = nearbyFeedsist || []) === null || _ref2 === void 0 ? void 0 : _ref2.length) === 0) && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _footer.footerStyles.container
  }, /*#__PURE__*/_react.default.createElement(_fallbackcomponents.StaticLoading, {
    containerStyle: _footer.footerStyles.footer
  })));
});
var _default = exports.default = NearbyWaterfallList;
//# sourceMappingURL=index.js.map