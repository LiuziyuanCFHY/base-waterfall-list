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
export interface FeedBaseModel {
    type: string;
    data: any;
    realIndex?: number;
}
export type FeedModel = FeedBaseModel | FeedGoodsInfo;
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
    /**
     * 倒计时icon
     */
    iconUrl?: string;
}
export declare enum FEED_CARD_TYPE {
    /** 默认展示的卡片  */
    DEFAULT_CARD = -1,
    /** 普通商品卡  */
    COMMON_GOOD_CARD = 1,
    /** 周周小促  */
    WEEKLY_CARD = 2
}
export declare enum IFetchType {
    PullUp = "PullUp",
    ClickMore = "ClickMore"
}
export declare enum ChannelSourceEnum {
    POI_DETAIL = "POI_DETAIL",
    GOODS_DETAIL = "GOODS_DETAIL"
}
export interface IUseQueryNearbyGoodsParams {
    size?: number | string;
    channelSource?: ChannelSourceEnum;
    poiId?: string;
    cursor?: string;
    fetchUrl?: string;
}
