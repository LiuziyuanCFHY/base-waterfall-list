import React from 'react';
import { WeeklyPromotionModel } from './Model/WeeklyPromotionModel';
interface IProps {
    data: Array<WeeklyPromotionModel>;
    feedItemIndex: number;
    onFeedWeeklyItemShow?: (item: WeeklyPromotionModel, index: number, feedItemIndex: number) => void;
    onFeedWeeklyPress?: (item: WeeklyPromotionModel, index: number, feedItemIndex: number) => void;
}
declare const _default: React.MemoExoticComponent<(props: IProps) => JSX.Element>;
export default _default;
