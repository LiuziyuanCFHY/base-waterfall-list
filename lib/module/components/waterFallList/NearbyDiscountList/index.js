import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { useQueryNearbyGoods } from '../../../service/NearbyService';
import GoodsBottom from '../../bottom';
import { SCREEN_WIDTH } from '../../../utils/designBase414';
import { DoubleList } from '../doubleList';
import { IFetchType } from '../model';
import { EStyleUtil } from '../../../utils/EStyleUtil';
import { ShowWithData } from '@locallife/biz-component';
import { CardContainer } from '../../cardContainer';
import { getThemeColor } from '@locallife/utils';
import { DetailFooter, footerStyles } from './footer';
import { StaticLoading } from '@locallife/fallbackcomponents';
const styles = EStyleUtil.create({
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
    paddingTop: 12
  },
  title: {
    fontSize: 16,
    marginBottom: 12,
    fontWeight: 'bold',
    color: () => getThemeColor('cs_common_text_title')
  },
  goodsBottomContainer: {
    marginTop: 8,
    marginBottom: 0,
    marginLeft: 3
  }
});
const NearbyDiscountList = /*#__PURE__*/memo(props => {
  var _ref;
  const {
    fetchParams,
    fetchType,
    listKeys = {
      left: '_leftKey',
      right: '_rightKey'
    },
    onFeedWeeklyItemShow,
    onFeedWeeklyPress,
    onItemShow,
    onItemHide,
    onItemClick,
    cardWidth = (SCREEN_WIDTH - 40) / 2,
    paddingHorizontal = 16,
    containerStyle,
    titleStyle,
    cardTitle,
    onEndReachedThreshold = 0.2,
    keyExtractorIndex = 0,
    ListFooterComponent = null,
    isShowEmpty,
    setEmpty,
    onClickMore,
    onShowClickMore,
    setIsError
  } = props;
  const [nearbyFeedsist, setNearbyFeedsist] = useState([]);
  const [requestCount, setRequestCount] = useState(0);
  const [isEmpty, setIsEmpty] = useState(false);
  const [nextFetch, setNextFetch] = useState(false);
  const handleSetNearbyFeedsList = useCallback(data => {
    setNearbyFeedsist([...data]);
  }, []);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchNextPage, loadingStatus, hasNextPage, onClickMore]);
  const footer = useCallback(() => {
    if (fetchType === IFetchType.ClickMore) {
      return /*#__PURE__*/React.createElement(GoodsBottom, {
        loading: false,
        noMore: noMore,
        containerStyle: styles.goodsBottomContainer,
        onPress: handleOnPress
      });
    }
    return /*#__PURE__*/React.createElement(DetailFooter, {
      isLoading: loadingStatus,
      noMore: !hasNextPage,
      isDark: false,
      notShowSlogan: false
    });
  }, [loadingStatus, hasNextPage, noMore, handleOnPress, fetchType]);
  const onEndReached = useCallback(async () => {
    if (fetchType === IFetchType.PullUp) {
      if (loadingStatus || !hasNextPage) {
        return;
      }
      await fetchNextPage();
    }
  }, [loadingStatus, hasNextPage, fetchNextPage, fetchType]);
  const getFooter = useCallback(() => {
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
  }, cardTitle), /*#__PURE__*/React.createElement(DoubleList, {
    index: keyExtractorIndex,
    recoList: nearbyFeedsist || [],
    cardWidth: cardWidth,
    paddingHorizontal: paddingHorizontal,
    ListFooterComponent: getFooter,
    listKeys: listKeys,
    onFeedWeeklyItemShow: onFeedWeeklyItemShow,
    onFeedWeeklyPress: onFeedWeeklyPress,
    onItemClick: onItemClick,
    onItemHide: onItemHide,
    onItemShow: onItemShow,
    onEndReachedThreshold: onEndReachedThreshold,
    onEndReached: onEndReached,
    loadingStatus: loadingStatus
  }))), !!(isEmpty && isShowEmpty) && /*#__PURE__*/React.createElement(View, {
    style: footerStyles.container
  }, /*#__PURE__*/React.createElement(StaticLoading, {
    containerStyle: footerStyles.footer
  })));
});
export default NearbyDiscountList;
export { NearbyDiscountList };
//# sourceMappingURL=index.js.map