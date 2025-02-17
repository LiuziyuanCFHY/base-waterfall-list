import React, { memo, useCallback, useMemo, useRef } from 'react';
import { View } from 'react-native';
import { DEFAULT_PADDING, GOOD_CARD_WIDTH, leftKey, rightKey } from '../config/config';
import { CommonList } from '@locallife/biz-component';
import { FeedRecommendItem } from '../feedRecommendCard';
import { isAndroid } from '@locallife/utils';
import { styles } from './style';
import { FEED_CARD_TYPE } from '../../../constants';
import { FeedCommonGoodsCard } from '../feedCommonGoodsCard';
import FeedWeeklyPromotionCard from '../FeedWeeklyPromotionCard';
import { useDoubleListData } from '../hook/hooks';
// 卡片索引
const keyExtractor = (item, index) => {
  return index + '_doubleList';
};
export const DoubleList = /*#__PURE__*/memo(props => {
  const {
    uiMode = 'space-between',
    recoList,
    onItemShow,
    onItemHide,
    onItemClick,
    data,
    initialNumToRender,
    paddingHorizontal = DEFAULT_PADDING,
    // 左右间距，默认11
    cardWidth = GOOD_CARD_WIDTH,
    // 卡片宽度，默认192
    refreshCount,
    ListFooterComponent,
    onEndReached,
    onFeedWeeklyItemShow,
    onFeedWeeklyPress,
    listKeys = {
      left: leftKey,
      right: rightKey
    },
    onEndReachedThreshold,
    loadingStatus
  } = props;
  const {
    leftData: lFeeds,
    rightData: rFeeds,
    updateHeight
  } = useDoubleListData(recoList, refreshCount, cardWidth);
  const onLayout = useCallback((listKey, event) => {
    var _event$nativeEvent;
    updateHeight === null || updateHeight === void 0 || updateHeight(listKey, event === null || event === void 0 || (_event$nativeEvent = event.nativeEvent) === null || _event$nativeEvent === void 0 || (_event$nativeEvent = _event$nativeEvent.layout) === null || _event$nativeEvent === void 0 ? void 0 : _event$nativeEvent.height);
  }, [updateHeight]);

  // 单个卡片
  const renderFeedItem = useCallback(({
    item,
    index: feedItemIndex
  }) => {
    if ((item === null || item === void 0 ? void 0 : item.type) === FEED_CARD_TYPE.COMMON_GOOD_CARD) {
      return /*#__PURE__*/React.createElement(FeedCommonGoodsCard, {
        curItem: item,
        index: feedItemIndex,
        onItemClick: onItemClick,
        cardWidth: cardWidth
      });
    } else if ((item === null || item === void 0 ? void 0 : item.type) === FEED_CARD_TYPE.WEEKLY_CARD) {
      return /*#__PURE__*/React.createElement(FeedWeeklyPromotionCard, {
        data: item === null || item === void 0 ? void 0 : item.data,
        feedItemIndex: item.realIndex,
        onFeedWeeklyItemShow: onFeedWeeklyItemShow,
        onFeedWeeklyPress: onFeedWeeklyPress
      });
    } else {
      return /*#__PURE__*/React.createElement(FeedRecommendItem, {
        curItem: item,
        index: feedItemIndex
      });
    }
  }, [cardWidth, onItemClick, onFeedWeeklyItemShow, onFeedWeeklyPress]);
  const windowSize = useMemo(() => {
    return isAndroid() ? 3 : undefined;
  }, []);
  const renderSeparator = useCallback(() => {
    return /*#__PURE__*/React.createElement(View, {
      style: styles.distance
    });
  }, []);
  const isFetching = useRef(false);
  const handleEndReached = useCallback(async () => {
    if (isFetching.current || loadingStatus) {
      return;
    }
    isFetching.current = true;
    await (onEndReached === null || onEndReached === void 0 ? void 0 : onEndReached());
    isFetching.current = false;
  }, [onEndReached, loadingStatus]);
  const endReached = useCallback(() => {
    handleEndReached();
  }, [handleEndReached]);
  const renderList = useCallback((listKey, feeds) => {
    return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(CommonList
    //eslint-disable-next-line react/jsx-no-bind
    , {
      onLayout: event => {
        onLayout(listKey, event);
      },
      keyExtractor: keyExtractor,
      renderItem: renderFeedItem,
      data: feeds,
      listKey: listKey,
      onItemShow: onItemShow,
      onItemHide: onItemHide,
      windowSize: windowSize // 解决安卓滑动突然转向，卡顿问题
      ,
      ItemSeparatorComponent: renderSeparator,
      initialNumToRender: initialNumToRender,
      style: {
        width: cardWidth
      },
      onEndReached: endReached,
      onEndReachedThreshold: onEndReachedThreshold ?? 0.1
    }));
  }, [cardWidth, initialNumToRender, onItemHide, onItemShow, onLayout, renderFeedItem, renderSeparator, windowSize, endReached, onEndReachedThreshold]);

  // 瀑布流卡片
  if (lFeeds && rFeeds) {
    return /*#__PURE__*/React.createElement(View, null, /*#__PURE__*/React.createElement(View, {
      style: [styles.containerRow, {
        justifyContent: uiMode,
        paddingHorizontal: paddingHorizontal
      }]
    }, renderList(listKeys.left, lFeeds), renderList(listKeys.right, rFeeds)), !!ListFooterComponent && (ListFooterComponent === null || ListFooterComponent === void 0 ? void 0 : ListFooterComponent()));
  }
  return renderList('one', data ?? []);
});
//# sourceMappingURL=index.js.map