import React from 'react';
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
    onFeedWeeklyItemShow?: (item: WeeklyPromotionModel, feedItemIndex: number, index: number) => void;
    onFeedWeeklyPress?: (item: WeeklyPromotionModel, feedItemIndex: number, index: number) => void;
    onEndReached?: () => void;
    onEndReachedThreshold?: number;
    loadingStatus?: boolean;
}
export declare const DoubleList: React.MemoExoticComponent<(props: IProps) => JSX.Element>;
export {};
