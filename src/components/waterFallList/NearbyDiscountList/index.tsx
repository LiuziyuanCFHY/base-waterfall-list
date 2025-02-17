import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { useQueryNearbyGoods } from '../../../service/NearbyService';
import GoodsBottom from '../../bottom';
import { SCREEN_WIDTH } from '../../../utils/designBase414';
import { DoubleList } from '../doubleList';
import { FeedModel, IFetchType, IUseQueryNearbyGoodsParams } from '../model';
import { EStyleUtil } from '../../../utils/EStyleUtil';
import { ShowWithData } from '@locallife/biz-component';
import { CardContainer } from '../../cardContainer';
import { getThemeColor } from '@locallife/utils';
import { WeeklyPromotionModel } from '../FeedWeeklyPromotionCard/Model/WeeklyPromotionModel';
import { DetailFooter, footerStyles } from './footer';
import { StaticLoading } from '@locallife/fallbackcomponents';

const styles = EStyleUtil.create({
    footer: {
        height: 80,
        alignItems: 'center',
    },
    footerText: {
        marginTop: 16,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
    },
    container: {
        paddingBottom: 16,
        paddingTop: 12,
    },
    title: {
        fontSize: 16,
        marginBottom: 12,
        fontWeight: 'bold',
        color: () => getThemeColor('cs_common_text_title'),
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
    listKeys?: {
        left: string;
        right: string;
    };
    onFeedWeeklyItemShow?: (
        item: WeeklyPromotionModel,
        index: number,
        feedItemIndex: number,
    ) => void;
    onFeedWeeklyPress?: (
        item: WeeklyPromotionModel,
        index: number,
        feedItemIndex: number,
    ) => void;
    onItemShow?: (item: FeedModel, index: number) => void;
    onItemHide?: (item: FeedModel, index: number) => void;
    onItemClick?: (item: any, index: number) => void;
    cardWidth?: number;
    paddingHorizontal?: number;
    containerStyle?: ViewStyle;
    cardTitle?: string;
    titleStyle?: ViewStyle;
    keyExtractorIndex?: number;
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
}

const NearbyDiscountList = memo((props: IProps) => {
    const {
        fetchParams,
        fetchType,
        listKeys = {
            left: '_leftKey',
            right: '_rightKey',
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
        setIsError,
    } = props;

    const [nearbyFeedsist, setNearbyFeedsist] = useState<any[]>([]);
    const [requestCount, setRequestCount] = useState<number>(0);
    const [isEmpty, setIsEmpty] = useState<boolean>(false);
    const [nextFetch, setNextFetch] = useState<boolean>(false);

    const handleSetNearbyFeedsList = useCallback((data) => {
        setNearbyFeedsist([...data]);
    }, []);

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
        nearbyFeedsist,
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchNextPage, loadingStatus, hasNextPage, onClickMore]);

    const footer = useCallback(() => {
        if (fetchType === IFetchType.ClickMore) {
            return (
                <GoodsBottom
                    loading={false}
                    noMore={noMore}
                    containerStyle={styles.goodsBottomContainer}
                    onPress={handleOnPress}
                />
            );
        }
        return (
            <DetailFooter
                isLoading={loadingStatus}
                noMore={!hasNextPage}
                isDark={false}
                notShowSlogan={false}
            />
        );
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
                        </Text>
                    )}
                    <DoubleList
                        index={keyExtractorIndex}
                        recoList={nearbyFeedsist || []}
                        cardWidth={cardWidth}
                        paddingHorizontal={paddingHorizontal}
                        ListFooterComponent={getFooter}
                        listKeys={listKeys}
                        onFeedWeeklyItemShow={onFeedWeeklyItemShow}
                        onFeedWeeklyPress={onFeedWeeklyPress}
                        onItemClick={onItemClick}
                        onItemHide={onItemHide}
                        onItemShow={onItemShow}
                        onEndReachedThreshold={onEndReachedThreshold}
                        onEndReached={onEndReached}
                        loadingStatus={loadingStatus}
                    />
                </CardContainer>
            </ShowWithData>
            {!!(isEmpty && isShowEmpty) && (
                <View style={footerStyles.container}>
                    <StaticLoading containerStyle={footerStyles.footer} />
                </View>
            )}
        </>
    );
});

export default NearbyDiscountList;

export { NearbyDiscountList };
