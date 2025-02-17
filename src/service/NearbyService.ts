import { useInfiniteQuery } from 'react-query';
import {
    bizRequest,
    BizRequestConfig,
    IRequestParam,
    RequestMethod,
} from '@locallife/biz-request';
import { BizTags } from '@locallife/biz-component';

import {
    ChannelSourceEnum,
    IUseQueryNearbyGoodsParams,
} from '../components/waterFallList/model';

export interface KSBaseResponse {
    [propName: string]: any;
    message?: string;
}

export interface ProductBizTagPositions {
    good_item_tab_timescard?: Array<BizTags>; //好货单次标签
    poi_good_shop_timescard?: Array<BizTags>; //好店单次标签，发现单次标签
    special_group_buy_img_superscript?: Array<BizTags>; // 商品头图左上角标签
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
    itemTypeCode?: number; //商品类型 21 为次卡
    secondaryCardTimes?: number; // 次数
    productBizTagPositions?: ProductBizTagPositions;
    extendJson?: string; // 商业化广告埋点用
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
    status?: number; // 200 表示成功
    message?: string;
}

export interface GoodsListResponse extends KSFoodBaseResponse {
    data?: GoodsInfoList;
}

const useQueryUrl = '/rest/n/nearby/localfood/feed/goods';

const fetchGoodsList = async (
    queryParams: IUseQueryNearbyGoodsParams = {
        size: '20',
        channelSource: ChannelSourceEnum.POI_DETAIL,
        poiId: '',
        cursor: '',
        fetchUrl: '',
    },
): Promise<GoodsListResponse> => {
    const params: IRequestParam = {
        url: queryParams?.fetchUrl || useQueryUrl,
        method: RequestMethod.GET,
        params: queryParams,
        headers: {
            'X-Client-Type': 1,
        },
        businessName: 'api',
        responseType: 'string',
    } as IRequestParam;
    try {
        return await bizRequest
            .request(params, {
                enableRequestParamsVerify: false,
            } as BizRequestConfig)
            .catch((reason) => {
                return Promise.reject(reason);
            });
    } catch (e) {
        throw e;
    }
};

const NO_MORE = 'nomore';

// 判断字符串是否为空
export const isEmptyString = (str?: string): boolean =>
    typeof str === 'undefined' || str == null || str === '';

// 请求结束，处理数据
function dealData(data, pages, setData) {
    const currentPage = pages?.length ?? 0;
    const items = pages[currentPage - 1]?.data?.feedList;
    items?.forEach((item) => {
        data.push(item);
    });
    const oldLenght = (data?.length || 0) - (items?.length || 0);
    setData([...data], oldLenght);
}

export function useQueryNearbyGoods(
    queryParams: IUseQueryNearbyGoodsParams = {
        size: '20',
        channelSource: ChannelSourceEnum.POI_DETAIL,
        poiId: '',
        fetchUrl: '',
    },
    handleCallback,
    setData,
    data,
) {
    return useInfiniteQuery<any, Error>(
        [queryParams?.fetchUrl || useQueryUrl],
        (params) => {
            return fetchGoodsList({
                ...queryParams,
                cursor: params.pageParam,
            });
        },
        {
            onSettled: (response) => {
                if (response) {
                    handleCallback(response.pages);
                    const currentPage = response.pages.length ?? 0;
                    if (currentPage < 1) {
                        return;
                    }
                    const lastIndex = response.pages.length - 1;
                    if (lastIndex === 0) {
                        setData([]);
                        dealData(data, response.pages, setData);
                    } else {
                        dealData(data, response.pages, setData);
                    }
                }
            },
            getNextPageParam: (lastPage) => {
                if (lastPage?.data?.cursor !== NO_MORE) {
                    return lastPage?.data?.cursor;
                }
                return undefined;
            },
        },
    );
}
