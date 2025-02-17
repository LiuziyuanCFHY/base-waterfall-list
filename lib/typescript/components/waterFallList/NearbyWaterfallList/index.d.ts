import React from 'react';
import { ViewStyle } from 'react-native';
import { FeedModel, IFetchType, IUseQueryNearbyGoodsParams } from '../model';
import { WeeklyPromotionModel } from '../FeedWeeklyPromotionCard/Model/WeeklyPromotionModel';
interface IProps {
    fetchType: IFetchType;
    fetchParams: IUseQueryNearbyGoodsParams;
    onFeedWeeklyItemShow?: (item: WeeklyPromotionModel, index: number, feedItemIndex: number) => void;
    onFeedWeeklyPress?: (item: WeeklyPromotionModel, index: number, feedItemIndex: number) => void;
    onItemShow?: (item: FeedModel, index: number) => void;
    onItemHide?: (item: FeedModel, index: number) => void;
    onItemClick?: (item: any, index: number) => void;
    cardWidth?: number;
    containerStyle?: ViewStyle;
    cardTitle?: string;
    titleStyle?: ViewStyle;
    onEndReachedThreshold?: number;
    ListFooterComponent?: ({ hasNextPage, isLoading, isFetchingNextPage, isRefetching, }: {
        hasNextPage: boolean | undefined;
        isLoading: boolean;
        isFetchingNextPage: boolean;
        isRefetching: boolean;
    }) => React.ReactElement | null;
    isShowEmpty?: boolean;
    setEmpty?: (isEmpty: boolean) => void;
    onClickMore?: () => void;
    onShowClickMore?: () => void;
    setIsError?: (boolean: any, data: any[]) => void;
    marginLeft?: number;
    marginRight?: number;
    cellTopMargin?: number;
    cellInnerMargin?: number;
}
declare const NearbyWaterfallList: React.MemoExoticComponent<(props: IProps) => JSX.Element>;
export default NearbyWaterfallList;
export { NearbyWaterfallList };
