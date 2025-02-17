import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Text, View } from "react-native";
import { useQueryNearbyGoods } from "../../../service/NearbyService";
import GoodsBottom from "../../bottom";
import { SCREEN_WIDTH } from "@locallife/design-base";
import { FEED_CARD_TYPE, IFetchType } from "../model";
import { EStyleUtil } from "../../../utils/EStyleUtil";
import { ShowWithData } from "@locallife/biz-component";
import { CardContainer } from "../../cardContainer";
import { getThemeColor } from "@locallife/utils";
import { DetailFooter, footerStyles } from "./footer";
import { StaticLoading } from "@locallife/fallbackcomponents";
import { PerformanceWaterfallList } from "../../PerformanceWaterfallList";
import { FeedCommonGoodsCard } from "../../waterFallList/feedCommonGoodsCard";
import FeedWeeklyPromotionCard from "../../waterFallList/FeedWeeklyPromotionCard";
const titleStyle = getThemeColor("cs_common_text_title");
const styles = EStyleUtil.create({
  footer: {
    height: 80,
    alignItems: "center"
  },
  footerText: {
    marginTop: 16,
    fontSize: 12,
    fontWeight: "400",
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
    fontWeight: "bold",
    color: titleStyle
  },
  goodsBottomContainer: {
    marginTop: 8,
    marginBottom: 0,
    marginLeft: 3
  }
});
const NearbyWaterfallList = /*#__PURE__*/memo(props => {
  var _ref, _ref2;
  const {
    fetchParams,
    fetchType,
    onFeedWeeklyItemShow,
    onFeedWeeklyPress,
    onItemShow,
    onItemClick,
    cardWidth = SCREEN_WIDTH / 2,
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
  const [nearbyFeedsist, setNearbyFeedsist] = useState([]);
  const [requestCount, setRequestCount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);
  const [nextFetch, setNextFetch] = useState(false);
  const [oldListLength, setOldListLength] = useState(0);
  const [reportShowLogs, setReportShowLogs] = useState([]);
  const handleViewableChanged = useCallback(viewToken => {
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
  const handleSetNearbyFeedsList = useCallback((data, oldLength) => {
    if (fetchType === IFetchType.ClickMore && (data === null || data === void 0 ? void 0 : data.length) % 2 === 1) {
      const newData = data === null || data === void 0 ? void 0 : data.slice(0, -1);
      setNearbyFeedsist([...newData]);
      return;
    }
    setNearbyFeedsist([...data]);
    setTimeout(() => {
      setOldListLength(oldLength);
    }, 20);
  }, [setNearbyFeedsist, fetchType]);
  useEffect(() => {
    if (oldListLength % 2 === 1 && fetchType === IFetchType.PullUp) {
      const handleColumnsIndex = Math.floor(oldListLength / 2);
      handleViewableChanged({
        key: "___key" + Date.now(),
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
  const onViewableItemsChanged = useRef(({
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
  } = useQueryNearbyGoods(fetchParams, pages => {
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
  useEffect(() => {
    if (isError) {
      // 接口报错的情况
      setIsError === null || setIsError === void 0 || setIsError(isError, nearbyFeedsist);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, nearbyFeedsist]);
  const loadingStatus = useMemo(() => {
    return isFetchingNextPage || isRefetching || isLoading;
  }, [isFetchingNextPage, isRefetching, isLoading]);
  const noMore = useMemo(() => {
    return !hasNextPage && !isFetchingNextPage;
  }, [hasNextPage, isFetchingNextPage]);
  useEffect(() => {
    if (!noMore && fetchType === IFetchType.ClickMore && !isEmpty) {
      onShowClickMore === null || onShowClickMore === void 0 || onShowClickMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noMore, fetchType, isEmpty]);
  const handleOnPress = useCallback(() => {
    if (loadingStatus || !hasNextPage) {
      return;
    }
    fetchNextPage();
    onClickMore === null || onClickMore === void 0 || onClickMore();
  }, [loadingStatus, hasNextPage, fetchNextPage, onClickMore]);
  const footer = useCallback(() => {
    if (fetchType === IFetchType.ClickMore) {
      return /*#__PURE__*/React.createElement(GoodsBottom, {
        loading: false,
        noMore: noMore || isError,
        containerStyle: styles.goodsBottomContainer,
        onPress: handleOnPress
      });
    }
    return /*#__PURE__*/React.createElement(DetailFooter, {
      isLoading: loadingStatus,
      noMore: noMore || isError,
      isDark: false,
      notShowSlogan: false
    });
  }, [fetchType, noMore, isError, loadingStatus, handleOnPress]);
  const onEndReached = useCallback(() => {
    if (fetchType === IFetchType.PullUp) {
      if (loadingStatus || !hasNextPage) {
        return;
      }
      fetchNextPage();
    }
  }, [loadingStatus, hasNextPage, fetchNextPage, fetchType]);
  const getFooter = useMemo(() => {
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
  const renderFeedItem = useCallback(({
    item,
    index: feedItemIndex
  }) => {
    var _item$itemData, _item$itemData2;
    if ((item === null || item === void 0 || (_item$itemData = item.itemData) === null || _item$itemData === void 0 ? void 0 : _item$itemData.type) === FEED_CARD_TYPE.COMMON_GOOD_CARD) {
      return /*#__PURE__*/React.createElement(FeedCommonGoodsCard, {
        curItem: item === null || item === void 0 ? void 0 : item.itemData,
        index: feedItemIndex,
        onItemClick: onItemClick,
        cardWidth: cardWidth
      });
    } else if ((item === null || item === void 0 || (_item$itemData2 = item.itemData) === null || _item$itemData2 === void 0 ? void 0 : _item$itemData2.type) === FEED_CARD_TYPE.WEEKLY_CARD) {
      var _item$itemData3;
      return /*#__PURE__*/React.createElement(FeedWeeklyPromotionCard, {
        data: item === null || item === void 0 || (_item$itemData3 = item.itemData) === null || _item$itemData3 === void 0 ? void 0 : _item$itemData3.data,
        feedItemIndex: feedItemIndex,
        onFeedWeeklyItemShow: onFeedWeeklyItemShow,
        onFeedWeeklyPress: onFeedWeeklyPress
      });
    } else {
      return /*#__PURE__*/React.createElement(View, null);
    }
  }, [onItemClick, onFeedWeeklyItemShow, onFeedWeeklyPress, cardWidth]);
  console.log("styles.title", JSON.stringify({
    ...styles.title
  }), "titleStyle", JSON.stringify({
    ...titleStyle
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ShowWithData, {
    data: ((_ref = nearbyFeedsist || []) === null || _ref === void 0 ? void 0 : _ref.length) > 0
  }, /*#__PURE__*/React.createElement(CardContainer, {
    containerStyle: {
      ...styles.container,
      ...containerStyle
    }
  }, !!cardTitle && /*#__PURE__*/React.createElement(Text, {
    style: {
      ...styles.title,
      ...titleStyle
    }
  }, cardTitle, "styles.title", JSON.stringify({
    ...styles.title
  }), "titleStyle", JSON.stringify({
    ...titleStyle
  })), /*#__PURE__*/React.createElement(PerformanceWaterfallList, {
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
  }))), !!(isShowEmpty && (isEmpty || isError) && ((_ref2 = nearbyFeedsist || []) === null || _ref2 === void 0 ? void 0 : _ref2.length) === 0) && /*#__PURE__*/React.createElement(View, {
    style: footerStyles.container
  }, /*#__PURE__*/React.createElement(StaticLoading, {
    containerStyle: footerStyles.footer
  })));
});
export default NearbyWaterfallList;
export { NearbyWaterfallList };
//# sourceMappingURL=index.js.map