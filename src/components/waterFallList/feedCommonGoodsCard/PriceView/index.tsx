import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import {
    BizTagsBean,
    CommonLabelArray,
    DotDecreasePrice,
    ShowWithData,
} from '@locallife/biz-component';
import { FeedGoodsInfo } from '../../model';
import { ITEM_TYPE_CODE } from '../../../../constants';
import styles from './styles';
import { priceUnit } from '../../../../utils/utils';
import { isIOS } from '@locallife/utils';
import { get414Px, rem } from '@locallife/design-base';

interface IProps {
    goodsInfo: FeedGoodsInfo;
    maxWidth: number;
}

interface Layout {
    x: number;
    y: number;
    width: number;
    height: number;
}

export const PriceView = React.memo(({ goodsInfo, maxWidth }: IProps) => {
    // 是否是日历票品
    const isTicket = useMemo(() => {
        return goodsInfo?.itemTypeCode === ITEM_TYPE_CODE.TICKET;
    }, [goodsInfo?.itemTypeCode]);
    // 是否是次卡
    const isSubCard = useMemo(() => {
        return goodsInfo?.itemTypeCode === ITEM_TYPE_CODE.TIMECARD;
    }, [goodsInfo?.itemTypeCode]);

    const itemTimes =
        goodsInfo?.productBizTagPositions?.good_goods_price_right_times_card;
    // 共省30元
    const itemPriceRightDiscount =
        goodsInfo?.productBizTagPositions?.good_goods_price_right_discount;
    // 快手更低价、会员专项、美团补贴
    const itemPriceFormarketing =
        goodsInfo?.productBizTagPositions
            ?.good_goods_price_right_marketing_info;
    const hasPriceLabel =
        itemTimes?.length > 0 ||
        itemPriceRightDiscount?.length > 0 ||
        itemPriceFormarketing?.length > 0;

    const hasOrginPrice = !!goodsInfo?.originPrice && !hasPriceLabel;

    const [labelMaxWidth, setLabelMaxWidth] = useState(0);

    const [showTags, setShowTags] = useState([] as BizTagsBean[]);

    useEffect(() => {
        // 单次
        const itemTimes =
            goodsInfo?.productBizTagPositions
                ?.good_goods_price_right_times_card;
        // 共省30元
        const itemPriceRightDiscount =
            goodsInfo?.productBizTagPositions?.good_goods_price_right_discount;
        // 快手更低价、会员专项、美团补贴
        const itemPriceFormarketing =
            goodsInfo?.productBizTagPositions
                ?.good_goods_price_right_marketing_info;

        let recombineBizTags: BizTagsBean[] = [];
        if ((itemTimes?.length ?? 0) > 0) {
            recombineBizTags.push({
                bizTags: itemTimes!!,
            });
        }
        if ((itemPriceRightDiscount?.length ?? 0) > 0) {
            recombineBizTags.push({
                bizTags: itemPriceRightDiscount!!,
            });
        }
        if ((itemPriceFormarketing?.length ?? 0) > 0) {
            recombineBizTags.push({
                bizTags: itemPriceFormarketing!!,
            });
        }
        setShowTags(recombineBizTags);
    }, [
        goodsInfo?.productBizTagPositions?.good_goods_price_right_discount,
        goodsInfo?.productBizTagPositions
            ?.good_goods_price_right_marketing_info,
        goodsInfo?.productBizTagPositions?.good_goods_price_right_times_card,
    ]);

    const _onLayout = useCallback(
        (event) => {
            const priceWidth = isIOS()
                ? rem(event.nativeEvent.layout.width)
                : get414Px(event.nativeEvent.layout.width);
            const remainingWidth = maxWidth - priceWidth - 10;
            setLabelMaxWidth(remainingWidth);
        },
        [maxWidth],
    );

    return (
        <View style={styles.priceInfo}>
            {/* 价格 */}
            <View style={styles.priceLine} onLayout={_onLayout}>
                <Text style={styles.unit}>{priceUnit}</Text>
                <DotDecreasePrice
                    price={goodsInfo?.discountPrice ?? ''}
                    firstPriceStyle={styles.firstPrice}
                    dotSecondPriceStyle={styles.secondPrice}
                />
                <Text style={styles.secondaryCardTimes}>
                    {isSubCard
                        ? `/${goodsInfo?.secondaryCardTimes}次`
                        : isTicket
                        ? '起'
                        : ''}
                </Text>
                {/* 原价 */}
                <ShowWithData data={hasOrginPrice}>
                    <Text style={styles.originPrice}>
                        {goodsInfo?.originPriceText}
                    </Text>
                </ShowWithData>
            </View>
            <ShowWithData data={labelMaxWidth > 0}>
                <View style={styles.label}>
                    <CommonLabelArray
                        bizTagArray={showTags}
                        maxWidth={labelMaxWidth}
                        adaptScreen={true}
                    />
                </View>
            </ShowWithData>
        </View>
    );
});
