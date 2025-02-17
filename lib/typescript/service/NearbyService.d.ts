import { BizTags } from '@locallife/biz-component';
import { IUseQueryNearbyGoodsParams } from '../components/waterFallList/model';
export interface KSBaseResponse {
    [propName: string]: any;
    message?: string;
}
export interface ProductBizTagPositions {
    good_item_tab_timescard?: Array<BizTags>;
    poi_good_shop_timescard?: Array<BizTags>;
    special_group_buy_img_superscript?: Array<BizTags>;
}
export interface GoodCardModel {
    coverUrl?: string;
    discountPrice?: string;
    discountText?: string;
    distanceText?: string;
    goodsJumpUrl?: string;
    itemId?: string;
    originPriceText?: string;
    originPrice?: string;
    poiId?: string;
    poiJumpUrl?: string;
    poiName?: string;
    productTitle?: string;
    shopDarkIcon?: string;
    shopLightIcon?: string;
    /** *非协议内容** */
    realIndex?: number;
    itemTypeCode?: number;
    secondaryCardTimes?: number;
    productBizTagPositions?: ProductBizTagPositions;
    extendJson?: string;
}
export interface FeedBaseModel {
    type: string;
    data: any;
    realIndex?: number;
}
export interface CountdownInfo {
    /**
     * 时间戳 当前阶段结束时间
     */
    endTime?: number;
    /**
     * 文案
     */
    text?: string;
    /**
     * 文案背景图
     */
    bgImgUrl?: string;
}
export interface FeedGoodsInfo {
    cardType: string;
    coverUrl: string;
    productTitle: string;
    discountPrice: string;
    originPrice: string;
    originPriceText: string;
    itemId: string;
    poiName: string;
    poiId: string;
    goodsJumpUrl: string;
    goodsHalfJumpUrl: string;
    distanceText: string;
    discountText: string;
    poiJumpUrl: string;
    poiHalfJumpUrl: string;
    shopLightIcon: string;
    shopArrowIcon?: string;
    shopDarkIcon: string;
    itemTypeCode: number;
    secondaryCardTimes: number;
    index: string;
    productBizTagPositions?: any;
    brandName?: string;
    soldStock?: number;
    feedBackRate?: string;
    priceSuffix?: string;
    content?: any;
    countdownInfo?: CountdownInfo;
    realIndex?: number;
    newUser?: boolean;
    buyUrl?: string;
    extendJson?: string;
}
export type FeedModel = FeedBaseModel | FeedGoodsInfo;
export interface GoodsInfoList {
    pageSize?: number;
    goodsInfoList?: Array<GoodCardModel>;
    feedList?: Array<FeedModel>;
    cursor?: String;
}
export interface KSFoodBaseResponse extends KSBaseResponse {
    result?: number;
    status?: number;
    message?: string;
}
export interface GoodsListResponse extends KSFoodBaseResponse {
    data?: GoodsInfoList;
}
export declare const isEmptyString: (str?: string) => boolean;
export declare function useQueryNearbyGoods(queryParams: IUseQueryNearbyGoodsParams, handleCallback: any, setData: any, data: any): import("react-query").UseInfiniteQueryResult<any, Error>;
