/**
 * 通用商品卡
 * scene 底部推荐双列feed商品卡
 * author yiyushu
 */
import React from 'react';
import { FeedGoodsInfo } from '../model';
interface FeedRecommendCardProps {
    curItem: FeedGoodsInfo;
    index: number;
}
export declare const FeedRecommendItem: React.MemoExoticComponent<({ curItem, index }: FeedRecommendCardProps) => JSX.Element>;
export {};
