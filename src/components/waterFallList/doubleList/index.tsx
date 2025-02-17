import React, { memo, useCallback, useMemo, useRef } from 'react';
import { View } from 'react-native';
import {
    DEFAULT_PADDING,
    GOOD_CARD_WIDTH,
    leftKey,
    rightKey,
} from '../config/config';
import { CommonList } from '@locallife/biz-component';
import { FeedRecommendItem } from '../feedRecommendCard';
import { isAndroid } from '@locallife/utils';
import { styles } from './style';
import { FEED_CARD_TYPE } from '../../../constants';
import { FeedCommonGoodsCard } from '../feedCommonGoodsCard';
import FeedWeeklyPromotionCard from '../FeedWeeklyPromotionCard';
import { useDoubleListData } from '../hook/hooks';
import { FeedModel } from '../model';
import { WeeklyPromotionModel } from '../FeedWeeklyPromotionCard/Model/WeeklyPromotionModel';

interface IProps {
    uiMode?: 'space-evenly' | 'space-between';
    recoList: Array<FeedModel>;
    itemVisiblePercentThreshold?: number;
    onItemShow?: (item: FeedModel, index: number) => void;
    onItemHide?: (item: FeedModel, index: number) => void;
    onItemClick?: (item: any, index: number) => void;
    updateHeight?: (listKey: any, height: number) => void;
    data?: Array<FeedModel>;
    index: number;
    initialNumToRender?: number;
    paddingHorizontal?: number;
    cardWidth?: number;
    refreshCount?: number;
    listKeys?: {
        left: string;
        right: string;
    };
    ListFooterComponent?: () => React.ReactElement | null;
    onFeedWeeklyItemShow?: (
        item: WeeklyPromotionModel,
        feedItemIndex: number,
        index: number,
    ) => void;
    onFeedWeeklyPress?: (
        item: WeeklyPromotionModel,
        feedItemIndex: number,
        index: number,
    ) => void;
    onEndReached?: () => void;
    onEndReachedThreshold?: number;
    loadingStatus?: boolean;
}

// 卡片索引
const keyExtractor = (item: FeedModel, index: number) => {
    return index + '_doubleList';
};

export const DoubleList = memo((props: IProps) => {
    const {
        uiMode = 'space-between',
        recoList,
        onItemShow,
        onItemHide,
        onItemClick,
        data,
        initialNumToRender,
        paddingHorizontal = DEFAULT_PADDING, // 左右间距，默认11
        cardWidth = GOOD_CARD_WIDTH, // 卡片宽度，默认192
        refreshCount,
        ListFooterComponent,
        onEndReached,
        onFeedWeeklyItemShow,
        onFeedWeeklyPress,
        listKeys = {
            left: leftKey,
            right: rightKey,
        },
        onEndReachedThreshold,
        loadingStatus,
    } = props;

    const {
        leftData: lFeeds,
        rightData: rFeeds,
        updateHeight,
    } = useDoubleListData(recoList, refreshCount, cardWidth);

    const onLayout = useCallback(
        (listKey, event) => {
            updateHeight?.(listKey, event?.nativeEvent?.layout?.height);
        },
        [updateHeight],
    );

    // 单个卡片
    const renderFeedItem = useCallback(
        ({ item, index: feedItemIndex }) => {
            if (item?.type === FEED_CARD_TYPE.COMMON_GOOD_CARD) {
                return (
                    <FeedCommonGoodsCard
                        curItem={item}
                        index={feedItemIndex}
                        onItemClick={onItemClick}
                        cardWidth={cardWidth}
                    />
                );
            } else if (item?.type === FEED_CARD_TYPE.WEEKLY_CARD) {
                return (
                    <FeedWeeklyPromotionCard
                        data={item?.data}
                        feedItemIndex={item.realIndex}
                        onFeedWeeklyItemShow={onFeedWeeklyItemShow}
                        onFeedWeeklyPress={onFeedWeeklyPress}
                    />
                );
            } else {
                return (
                    <FeedRecommendItem curItem={item} index={feedItemIndex} />
                );
            }
        },
        [cardWidth, onItemClick, onFeedWeeklyItemShow, onFeedWeeklyPress],
    );

    const windowSize = useMemo(() => {
        return isAndroid() ? 3 : undefined;
    }, []);

    const renderSeparator = useCallback(() => {
        return <View style={styles.distance} />;
    }, []);

    const isFetching = useRef(false);

    const handleEndReached = useCallback(async () => {
        if (isFetching.current || loadingStatus) {
            return;
        }
        isFetching.current = true;
        await onEndReached?.();
        isFetching.current = false;
    }, [onEndReached, loadingStatus]);

    const endReached = useCallback(() => {
        handleEndReached();
    }, [handleEndReached]);

    const renderList = useCallback(
        (listKey: string, feeds: FeedModel[]) => {
            return (
                <View>
                    <CommonList
                        //eslint-disable-next-line react/jsx-no-bind
                        onLayout={(event) => {
                            onLayout(listKey, event);
                        }}
                        keyExtractor={keyExtractor}
                        renderItem={renderFeedItem}
                        data={feeds}
                        listKey={listKey}
                        onItemShow={onItemShow}
                        onItemHide={onItemHide}
                        windowSize={windowSize} // 解决安卓滑动突然转向，卡顿问题
                        ItemSeparatorComponent={renderSeparator}
                        initialNumToRender={initialNumToRender}
                        style={{ width: cardWidth }}
                        onEndReached={endReached}
                        onEndReachedThreshold={onEndReachedThreshold ?? 0.1}
                    />
                </View>
            );
        },
        [
            cardWidth,
            initialNumToRender,
            onItemHide,
            onItemShow,
            onLayout,
            renderFeedItem,
            renderSeparator,
            windowSize,
            endReached,
            onEndReachedThreshold,
        ],
    );

    // 瀑布流卡片
    if (lFeeds && rFeeds) {
        return (
            <View>
                <View
                    style={[
                        styles.containerRow,
                        {
                            justifyContent: uiMode,
                            paddingHorizontal: paddingHorizontal,
                        },
                    ]}
                >
                    {renderList(listKeys.left, lFeeds)}
                    {renderList(listKeys.right, rFeeds)}
                </View>
                {!!ListFooterComponent && ListFooterComponent?.()}
            </View>
        );
    }
    return renderList('one', data ?? []);
});
