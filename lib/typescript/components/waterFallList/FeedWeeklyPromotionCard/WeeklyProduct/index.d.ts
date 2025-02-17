import React from 'react';
import { WeeklyProductModel } from '../Model/WeeklyPromotionModel';
interface IProps {
    data: WeeklyProductModel;
    onProductPress: () => void;
}
declare function WeeklyProduct({ data, onProductPress }: IProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof WeeklyProduct>;
export default _default;
