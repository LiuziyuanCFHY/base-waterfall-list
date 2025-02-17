/**
 * 通用商品卡
 * scene 团购优惠底部双列feed新商品卡
 * author liyi33
 */
import React from 'react';
import { FeedBaseModel } from '../model';
interface FeedRecommendCardProps {
    curItem: FeedBaseModel;
    index: number;
    onItemClick?: (item: any, index: number) => void;
    cardWidth: number;
}
export declare const FeedCommonGoodsCard: React.MemoExoticComponent<({ curItem, index, onItemClick, cardWidth }: FeedRecommendCardProps) => JSX.Element>;
export {};
