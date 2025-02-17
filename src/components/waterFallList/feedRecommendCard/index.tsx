/**
 * 通用商品卡
 * scene 底部推荐双列feed商品卡
 * author yiyushu
 */

import React, { memo, useCallback, useMemo } from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { CommonLabels } from '@locallife/biz-component';
import { ITEM_TYPE_CODE } from '../../../constants';
import { priceUnit } from '../../../utils/utils';
import { getProductIcon } from '../../../utils/getProductIcon';
import KwaiImage from '@kds/image';
import { jumpUrl } from '@locallife/utils';
import { localLifeBizLogger } from '@locallife/log';
import { FeedGoodsInfo } from '../model';

interface FeedRecommendCardProps {
    curItem: FeedGoodsInfo;
    index: number;
}

export const FeedRecommendItem = memo(
    ({ curItem, index }: FeedRecommendCardProps) => {
        /**
         * 点击上报
         * @param key 埋点key
         * @param exp 拓展埋点数据，必须是个对象！
         */
        const clickLogParam = useCallback(
            (key, exp = {}) => {
                localLifeBizLogger.click(key, {
                    poi_id: curItem?.poiId || '',
                    item_id: curItem?.itemId || '',
                    item_index: index + 1,
                    item_name: curItem?.productTitle || '',
                    ...exp,
                });
            },
            [curItem?.itemId, curItem?.poiId, curItem?.productTitle, index],
        );
        const handleProduction = useCallback(() => {
            clickLogParam('LOCALLIFE_COMPOSITE_GOODS_CARD');
            curItem?.goodsHalfJumpUrl &&
                jumpUrl(curItem?.goodsHalfJumpUrl, 'TO_HALF_POI_PAGE');
        }, [clickLogParam, curItem?.goodsHalfJumpUrl]);

        // 点击距离跳转POI
        const handleDistanceClick = useCallback(() => {
            clickLogParam('LOCALLIFE_COMPOSITE_GOODS_CARD_POI_BUTTON');
            curItem?.poiHalfJumpUrl &&
                jumpUrl(curItem?.poiHalfJumpUrl, 'TO_POI');
        }, [clickLogParam, curItem?.poiHalfJumpUrl]);

        const productIcon = useMemo(() => {
            return getProductIcon(
                curItem?.productBizTagPositions
                    ?.payment_succeed_item_title_core,
            );
        }, [curItem?.productBizTagPositions?.payment_succeed_item_title_core]);

        // 是否是日历票品
        const isTicket = useMemo(() => {
            return curItem?.itemTypeCode === ITEM_TYPE_CODE.TICKET;
        }, [curItem?.itemTypeCode]);
        // 是否是次卡
        const isSubCard = useMemo(() => {
            return curItem?.itemTypeCode === ITEM_TYPE_CODE.TIMECARD;
        }, [curItem?.itemTypeCode]);

        // 折扣价(discountPrice)为兜底的市场价(originPrice)时、当为次卡时 均不显示市场价（originPrice）、当为日历票时也不展示
        const isShowOriginPrice = useMemo(() => {
            return (
                Number(curItem?.originPrice) > Number(curItem?.discountPrice) &&
                !isSubCard &&
                !isTicket
            );
        }, [curItem?.originPrice, curItem?.discountPrice, isSubCard, isTicket]);

        return (
            <View style={styles.recommendItem}>
                <TouchableOpacity activeOpacity={1} onPress={handleProduction}>
                    <KwaiImage
                        style={styles.head}
                        source={{
                            uri: curItem.coverUrl,
                        }}
                        resizeMode={'cover'}
                    />
                    <View style={styles.content}>
                        {/* 瀑布流需要动态计算高度，来区分放左边还是右边，改样式时需要关注styles和countFeedItemHeight相关逻辑  */}
                        <Text style={[styles.flex]} numberOfLines={2}>
                            {!!productIcon?.url && (
                                <KwaiImage
                                    resizeMode={'cover'}
                                    style={[
                                        styles.icon,
                                        {
                                            width: productIcon?.width,
                                            height: productIcon?.height,
                                        },
                                    ]}
                                    source={{
                                        uri: productIcon?.url,
                                    }}
                                />
                            )}
                            {/* android图片设置marginRight不生效，故使用空格 */}
                            {!!productIcon?.url &&
                                Platform.OS === 'android' && (
                                    <Text style={styles.txt}>&nbsp;</Text>
                                )}
                            <Text style={styles.titleInfo}>
                                {curItem?.productTitle}
                            </Text>
                        </Text>
                        <View style={[styles.flex, styles.priceInfo]}>
                            <Text style={styles.discountPrice}>
                                <Text style={styles.unit}>{priceUnit}</Text>
                                {curItem.discountPrice}
                                <Text style={styles.secondaryCardTimes}>
                                    {isSubCard
                                        ? `/${curItem.secondaryCardTimes}次`
                                        : isTicket
                                        ? '起'
                                        : ''}
                                </Text>
                            </Text>
                            {!!curItem?.productBizTagPositions
                                ?.payment_succeed_item_price_right && (
                                <CommonLabels
                                    bizTags={
                                        curItem?.productBizTagPositions
                                            ?.payment_succeed_item_price_right
                                    }
                                    containerStyle={styles.priceMark}
                                    autoCut={false}
                                />
                            )}

                            {isShowOriginPrice ? (
                                <View style={styles.originPriceInfo}>
                                    <Text style={styles.originPrice}>
                                        {priceUnit}
                                        {curItem.originPrice}
                                    </Text>
                                </View>
                            ) : null}
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.poi, styles.flex]}
                    onPress={handleDistanceClick}
                >
                    <View style={[styles.flex, styles.poiInfo]}>
                        <Image
                            style={styles.poiIcon}
                            source={{
                                uri: 'https://s2-10833.kwimgs.com/kos/nlav10833/ll-transaction/static/transaction/img/poi-icon.962351164b4b18e8.png',
                            }}
                        />
                        <Text
                            style={[styles.poiTxt, styles.poiName]}
                            numberOfLines={1}
                        >
                            {curItem.poiName}
                        </Text>
                    </View>
                    {!!curItem.distanceText && (
                        <Text style={[styles.poiTxt]}>
                            {curItem.distanceText}
                        </Text>
                    )}
                </TouchableOpacity>
            </View>
        );
    },
);
