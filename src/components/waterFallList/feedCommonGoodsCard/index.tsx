/**
 * 通用商品卡
 * scene 团购优惠底部双列feed新商品卡
 * author liyi33
 */
import React, { memo, useCallback, useMemo, useState } from 'react';
import {
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import styles from './style';
import { CommonLabels, ShowWithData } from '@locallife/biz-component';
import KwaiImage from '@kds/image';
import { isNotEmptyString, jumpUrl } from '@locallife/utils';
import { FeedBaseModel, FeedGoodsInfo } from '../model';
import { useTextLineHook } from '../hook/hooks';
import CountDownContainer from './countDownContainer';
import { NewUserBuyInfoView } from './NewUserBuyInfoView';
import { PoiInfoView } from './PoiInfoView';
import { DistanceLabel } from './DistanceLabel';
import { PriceView } from './PriceView';
import { calculateSoldCount } from './NewUserBuyInfoView/hook';
import { ITEM_TYPE_CODE } from '../../../constants';

interface FeedRecommendCardProps {
    curItem: FeedBaseModel;
    index: number;
    onItemClick?: (item: any, index: number) => void; // 用于外界埋点
    cardWidth: number;
}

export const FeedCommonGoodsCard = memo(
    ({ curItem, index, onItemClick, cardWidth }: FeedRecommendCardProps) => {
        const productModel: FeedGoodsInfo = curItem?.data ?? {};
        // 倒计时是否结束
        const [countDownEnd, setCountDownEnd] = useState(false);

        const handleProduction = useCallback(() => {
            if (onItemClick) {
                onItemClick(curItem, index);
            }
            productModel?.goodsJumpUrl &&
                jumpUrl(productModel?.goodsJumpUrl, 'TO_HALF_POI_PAGE');
        }, [curItem, index, onItemClick, productModel?.goodsJumpUrl]);

        const handlePoi = useCallback(() => {
            if (onItemClick) {
                const item = {
                    ...curItem,
                    iSClickPoi: true,
                };
                onItemClick(item, index);
            }
            productModel?.poiJumpUrl &&
                jumpUrl(productModel?.poiJumpUrl, 'TO_POI');
        }, [curItem, index, onItemClick, productModel?.poiJumpUrl]);

        const { titleInfo, onTextLayout } = useTextLineHook(
            productModel?.productTitle,
        );

        // 倒计时结束的回调
        const countDownEndCallback = useCallback(() => {
            setCountDownEnd(true);
        }, []);

        // 是否是日历票品
        const isTicket = useMemo(() => {
            return productModel?.itemTypeCode === ITEM_TYPE_CODE.TICKET;
        }, [productModel?.itemTypeCode]);
        // 是否是次卡
        const isSubCard = useMemo(() => {
            return productModel?.itemTypeCode === ITEM_TYPE_CODE.TIMECARD;
        }, [productModel?.itemTypeCode]);
        // 是否展示倒计时
        const showCountDown = !countDownEnd && productModel?.countdownInfo;

        // 是否展示第二行描述信息(这一行和倒计时互斥)
        const hasDescLine =
            (productModel?.soldStock ?? -1) > 0 &&
            isNotEmptyString(productModel?.feedBackRate ?? '') &&
            !productModel?.countdownInfo;

        // 优先级： 日历票、次卡 > 新人> 正常样式
        // 是否展示新人
        const isNewUser = !isTicket && !isSubCard && productModel?.newUser;

        return (
            <TouchableWithoutFeedback onPress={handleProduction}>
                <View style={styles.container}>
                    <KwaiImage
                        style={styles.coverImage}
                        source={{
                            uri: productModel?.coverUrl,
                        }}
                        resizeMode={'cover'}
                    >
                        {/* 头图下面展示的元素：倒计时、距离 */}
                        <View style={styles.coverBottomContent}>
                            {/* 距离  */}
                            <DistanceLabel goodsInfo={productModel} />
                            {/* 倒计时  */}
                            <ShowWithData data={showCountDown}>
                                <CountDownContainer
                                    data={productModel}
                                    end={countDownEndCallback}
                                />
                            </ShowWithData>
                        </View>
                    </KwaiImage>
                    <View style={styles.content}>
                        {/* 两行标题  */}
                        <View style={styles.firstLine}>
                            <CommonLabels
                                bizTags={
                                    productModel?.productBizTagPositions
                                        ?.good_goods_title_core ?? []
                                }
                                adaptScreen={false}
                                autoCut={false}
                                containerStyle={styles.labelStyle}
                            />
                            <ShowWithData
                                data={isNotEmptyString(
                                    productModel?.brandName ?? '',
                                )}
                            >
                                <Text
                                    style={styles.brandText}
                                    numberOfLines={1}
                                >
                                    {productModel?.brandName}
                                </Text>
                                <View style={styles.verLine} />
                            </ShowWithData>
                            <Text
                                style={styles.titleContainer}
                                // @ts-ignore
                                onTextLayout={onTextLayout}
                                numberOfLines={titleInfo.lineNumber}
                            >
                                {titleInfo.firstLine}
                            </Text>
                        </View>
                        <ShowWithData
                            data={isNotEmptyString(titleInfo.nextLine)}
                        >
                            <Text style={styles.nextLine} numberOfLines={1}>
                                {titleInfo.nextLine}
                            </Text>
                        </ShowWithData>

                        {/* 标题下的描述区 */}
                        <ShowWithData data={hasDescLine}>
                            <View style={styles.descContainer}>
                                <Text
                                    style={styles.feedBackRate}
                                    numberOfLines={1}
                                >
                                    {productModel?.feedBackRate}
                                </Text>
                                <Text
                                    style={styles.soldStock}
                                    numberOfLines={1}
                                >
                                    {calculateSoldCount(
                                        productModel?.soldStock,
                                    )}
                                </Text>
                            </View>
                        </ShowWithData>

                        {/* 新人价格与抢购样式*/}
                        <ShowWithData data={isNewUser}>
                            <NewUserBuyInfoView productInfo={productModel} />
                        </ShowWithData>

                        {/* 价格区域，与新人互斥 */}
                        <ShowWithData data={!isNewUser}>
                            <PriceView
                                goodsInfo={productModel}
                                maxWidth={cardWidth}
                            />
                        </ShowWithData>
                        {/* poi区域 */}
                        <ShowWithData data={productModel?.poiName}>
                            <TouchableOpacity onPress={handlePoi}>
                                <PoiInfoView goodsInfo={productModel} />
                            </TouchableOpacity>
                        </ShowWithData>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    },
);
