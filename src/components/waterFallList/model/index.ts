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
    realIndex?: number; // 非后端返回字段，用于标识在列表中真正的位置
    newUser?: boolean; // 新人且是一分购或者一元购
    buyUrl?: string; // 抢按钮的图片链接
    extendJson?: string; // 商业化广告透传埋点用
}

// 为了feed能够展示不同卡片，增加此类型
export interface FeedBaseModel {
    type: string;
    data: any;
    realIndex?: number; // 非后端返回字段，用于标识在列表中真正的位置
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

export enum FEED_CARD_TYPE {
    /** 默认展示的卡片  */
    DEFAULT_CARD = -1,
    /** 普通商品卡  */
    COMMON_GOOD_CARD = 1,
    /** 周周小促  */
    WEEKLY_CARD = 2,
}

export enum IFetchType {
    PullUp = 'PullUp', // 上拉加载
    ClickMore = 'ClickMore', // 点击更多
}

export enum ChannelSourceEnum {
    POI_DETAIL = 'POI_DETAIL',
    GOODS_DETAIL = 'GOODS_DETAIL',
}

export interface IUseQueryNearbyGoodsParams {
    size?: number | string;
    channelSource?: ChannelSourceEnum;
    poiId?: string;
    cursor?: string;
    fetchUrl?: string;
}
