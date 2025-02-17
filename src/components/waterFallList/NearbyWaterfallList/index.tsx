import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Text, View, ViewStyle, ViewToken, StyleSheet } from "react-native";
import { useQueryNearbyGoods } from "../../../service/NearbyService";
import GoodsBottom from "../../bottom";
import { SCREEN_WIDTH } from "@locallife/design-base";
import {
  FEED_CARD_TYPE,
  FeedModel,
  IFetchType,
  IUseQueryNearbyGoodsParams,
} from "../model";
import { EStyleUtil } from "../../../utils/EStyleUtil";
import { ShowWithData } from "@locallife/biz-component";
import { CardContainer } from "../../cardContainer";
import { getThemeColor, jsonStringify } from "@locallife/utils";
import { WeeklyPromotionModel } from "../FeedWeeklyPromotionCard/Model/WeeklyPromotionModel";
import { DetailFooter, footerStyles } from "./footer";
import { StaticLoading } from "@locallife/fallbackcomponents";
import { PerformanceWaterfallList } from "../../PerformanceWaterfallList";
import { FeedCommonGoodsCard } from "../../waterFallList/feedCommonGoodsCard";
import FeedWeeklyPromotionCard from "../../waterFallList/FeedWeeklyPromotionCard";

const titleStyle = getThemeColor("cs_common_text_title");
const styles = EStyleUtil.create({
  footer: {
    height: 80,
    alignItems: "center",
  },
  footerText: {
    marginTop: 16,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 16,
  },
  container: {
    paddingBottom: 16,
    paddingTop: 12,
    paddingHorizontal: 0,
  },
  title: {
    fontSize: 16,
    marginBottom: 12,
    fontWeight: "bold",
    color: titleStyle,
  },
  goodsBottomContainer: {
    marginTop: 8,
    marginBottom: 0,
    marginLeft: 3,
  },
});

interface IProps {
  fetchType: IFetchType;
  fetchParams: IUseQueryNearbyGoodsParams;
  // tableProps
  onFeedWeeklyItemShow?: (
    item: WeeklyPromotionModel,
    index: number,
    feedItemIndex: number
  ) => void;
  onFeedWeeklyPress?: (
    item: WeeklyPromotionModel,
    index: number,
    feedItemIndex: number
  ) => void;
  onItemShow?: (item: FeedModel, index: number) => void;
  onItemHide?: (item: FeedModel, index: number) => void;
  onItemClick?: (item: any, index: number) => void;
  cardWidth?: number;
  containerStyle?: ViewStyle;
  cardTitle?: string;
  titleStyle?: ViewStyle;
  onEndReachedThreshold?: number;
  ListFooterComponent?: ({
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isRefetching,
  }: {
    hasNextPage: boolean | undefined;
    isLoading: boolean;
    isFetchingNextPage: boolean;
    isRefetching: boolean;
  }) => React.ReactElement | null;
  isShowEmpty?: boolean;
  setEmpty?: (isEmpty: boolean) => void;
  onClickMore?: () => void;
  onShowClickMore?: () => void;
  setIsError?: (boolean, data: any[]) => void;
  marginLeft?: number;
  marginRight?: number;
  cellTopMargin?: number;
  cellInnerMargin?: number;
}

const NearbyWaterfallList = memo((props: IProps) => {
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
    cellInnerMargin,
  } = props;

  const [nearbyFeedsist, setNearbyFeedsist] = useState<any[]>([]);
  const [requestCount, setRequestCount] = useState<number>(0);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [nextFetch, setNextFetch] = useState<boolean>(false);
  const [oldListLength, setOldListLength] = useState<number>(0);
  const [reportShowLogs, setReportShowLogs] = useState<number[]>([]);

  const handleViewableChanged = useCallback(
    (viewToken: ViewToken) => {
      const { rowData } = viewToken.item;
      const viewTokenIndex = viewToken.index || 0; // 行数
      rowData.forEach((data) => {
        const { columnIndex, itemData } = data;
        const feedItemIndex =
          columnIndex === 0 ? viewTokenIndex * 2 : viewTokenIndex * 2 + 1;
        if (viewToken.isViewable) {
          onItemShow?.(
            { ...itemData, realIndex: feedItemIndex },
            feedItemIndex
          );
          reportShowLogs.push(feedItemIndex);
          setReportShowLogs([...new Set(reportShowLogs)]);
        } else {
          onItemHide?.(
            { ...itemData, realIndex: feedItemIndex },
            feedItemIndex
          );
        }
      });
    },
    [onItemShow, onItemHide, reportShowLogs]
  );

  const handleSetNearbyFeedsList = useCallback(
    (data, oldLength) => {
      if (fetchType === IFetchType.ClickMore && data?.length % 2 === 1) {
        const newData = data?.slice(0, -1);
        setNearbyFeedsist([...newData]);
        return;
      }
      setNearbyFeedsist([...data]);
      setTimeout(() => {
        setOldListLength(oldLength);
      }, 20);
    },
    [setNearbyFeedsist, fetchType]
  );

  useEffect(() => {
    if (oldListLength % 2 === 1 && fetchType === IFetchType.PullUp) {
      const handleColumnsIndex = Math.floor(oldListLength / 2);
      handleViewableChanged({
        key: "___key" + Date.now(),
        isViewable: true,
        index: handleColumnsIndex,
        item: {
          rowData: [
            {
              columnIndex: 0,
              itemData: nearbyFeedsist?.[handleColumnsIndex * 2],
            },
            {
              columnIndex: 1,
              itemData: nearbyFeedsist?.[handleColumnsIndex * 2 + 1],
            },
          ],
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oldListLength, nearbyFeedsist, fetchType]);

  const onViewableItemsChanged = useRef(
    ({ changed }: { changed: Array<ViewToken> }) => {
      changed.forEach((viewToken) => {
        handleViewableChanged(viewToken);
      });
    }
  );

  const {
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isRefetching,
    isError,
  } = useQueryNearbyGoods(
    fetchParams,
    (pages) => {
      const nowCount = requestCount + 1;
      setRequestCount(nowCount);
      const lastIndex = pages?.length - 1;
      const resultDataLenght = pages[lastIndex]?.data?.feedList?.length;
      const hasNext = pages[lastIndex]?.data?.hasNext;
      if (nowCount === 1 && !resultDataLenght && !nextFetch) {
        if (hasNext) {
          setNextFetch(true);
          fetchNextPage();
        } else {
          setIsEmpty(true);
          setEmpty?.(true);
        }
      } else if (nowCount === 2 && !resultDataLenght && nextFetch) {
        setIsEmpty(true);
        setEmpty?.(true);
      }
    },
    handleSetNearbyFeedsList,
    nearbyFeedsist
  );

  useEffect(() => {
    if (isError) {
      // 接口报错的情况
      setIsError?.(isError, nearbyFeedsist);
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
      onShowClickMore?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noMore, fetchType, isEmpty]);

  const handleOnPress = useCallback(() => {
    if (loadingStatus || !hasNextPage) {
      return;
    }
    fetchNextPage();
    onClickMore?.();
  }, [loadingStatus, hasNextPage, fetchNextPage, onClickMore]);

  const footer = useCallback(() => {
    if (fetchType === IFetchType.ClickMore) {
      return (
        <GoodsBottom
          loading={false}
          noMore={noMore || isError}
          containerStyle={styles.goodsBottomContainer}
          onPress={handleOnPress}
        />
      );
    }
    return (
      <DetailFooter
        isLoading={loadingStatus}
        noMore={noMore || isError}
        isDark={false}
        notShowSlogan={false}
      />
    );
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
        isRefetching,
      });
    } else {
      return footer();
    }
  }, [
    ListFooterComponent,
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    isRefetching,
    footer,
  ]);

  const renderFeedItem = useCallback(
    ({ item, index: feedItemIndex }) => {
      if (item?.itemData?.type === FEED_CARD_TYPE.COMMON_GOOD_CARD) {
        return (
          <FeedCommonGoodsCard
            curItem={item?.itemData}
            index={feedItemIndex}
            onItemClick={onItemClick}
            cardWidth={cardWidth}
          />
        );
      } else if (item?.itemData?.type === FEED_CARD_TYPE.WEEKLY_CARD) {
        return (
          <FeedWeeklyPromotionCard
            data={item?.itemData?.data}
            feedItemIndex={feedItemIndex}
            onFeedWeeklyItemShow={onFeedWeeklyItemShow}
            onFeedWeeklyPress={onFeedWeeklyPress}
          />
        );
      } else {
        return <View />;
      }
    },
    [onItemClick, onFeedWeeklyItemShow, onFeedWeeklyPress, cardWidth]
  );
  console.log(
    "styles.title",
    JSON.stringify({ ...styles.title }),
    "titleStyle",
    JSON.stringify({ ...titleStyle })
  );

  return (
    <>
      <ShowWithData data={(nearbyFeedsist || [])?.length > 0}>
        <CardContainer
          containerStyle={{
            ...styles.container,
            ...containerStyle,
          }}
        >
          {!!cardTitle && (
            <Text
              style={{
                ...styles.title,
                ...titleStyle,
              }}
            >
              {cardTitle}
              styles.title
              {JSON.stringify({ ...styles.title })}
              titleStyle
              {JSON.stringify({ ...titleStyle })}
            </Text>
          )}
          <PerformanceWaterfallList
            data={nearbyFeedsist || []}
            ListFooterComponent={getFooter}
            onEndReachedThreshold={onEndReachedThreshold}
            onEndReached={onEndReached}
            renderItem={renderFeedItem}
            onViewableItemsChanged={onViewableItemsChanged.current}
            marginLeft={marginLeft}
            marginRight={marginRight}
            cellTopMargin={cellTopMargin}
            cellInnerMargin={cellInnerMargin}
          />
        </CardContainer>
      </ShowWithData>
      {!!(
        isShowEmpty &&
        (isEmpty || isError) &&
        (nearbyFeedsist || [])?.length === 0
      ) && (
        <View style={footerStyles.container}>
          <StaticLoading containerStyle={footerStyles.footer} />
        </View>
      )}
    </>
  );
});

export default NearbyWaterfallList;

export { NearbyWaterfallList };
