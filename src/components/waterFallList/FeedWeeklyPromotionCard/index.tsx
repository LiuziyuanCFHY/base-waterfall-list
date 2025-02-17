import React, { memo, useCallback, useEffect, useRef } from 'react';
import {
    StyleProp,
    Text,
    TouchableWithoutFeedback,
    View,
    ViewStyle,
} from 'react-native';
import WeeklyProduct from './WeeklyProduct';
import { WeeklyPromotionModel } from './Model/WeeklyPromotionModel';
import { styles } from './styles';
import { KidCarousel } from '@kid-ui/krn';
import { isEmptyString, jumpUrl } from '@locallife/utils';
import { LocalLifeImage } from '@locallife/base-image';
// import { localLifeBizLogger } from '@locallife/log';
import { logLinkUrlNUll } from '../../../utils/logger';
import { productAdapter } from '../../../utils/utils';
import LinearGradient from 'react-native-linear-gradient';
import { WEEKLY_ARROW_URL } from '../config/config';

interface IProps {
    data: Array<WeeklyPromotionModel>;
    feedItemIndex: number;
    onFeedWeeklyItemShow?: (
        item: WeeklyPromotionModel,
        index: number,
        feedItemIndex: number,
    ) => void;
    onFeedWeeklyPress?: (
        item: WeeklyPromotionModel,
        index: number,
        feedItemIndex: number,
    ) => void;
}

export default memo((props: IProps) => {
    const {
        data: carouselList,
        feedItemIndex,
        onFeedWeeklyItemShow,
        onFeedWeeklyPress,
    } = props;

    const showSetRef = useRef(new Set());

    const reportElementShow = useCallback(
        (weeklyModel: WeeklyPromotionModel, bannerIndex) => {
            const itemId = `${weeklyModel?.title}:${bannerIndex}`;
            if (!showSetRef.current.has(itemId)) {
                onFeedWeeklyItemShow &&
                    onFeedWeeklyItemShow(
                        weeklyModel,
                        bannerIndex,
                        feedItemIndex,
                    );
                // // 整体卡片曝光
                // const logParams = {
                //     url: weeklyModel?.jumpUrl,
                //     campaign_name: weeklyModel?.title,
                //     index: feedItemIndex + 1,
                //     index_internal: bannerIndex + 1,
                // };
                // localLifeBizLogger.show('CAMPAIGN_CARD', logParams);
                showSetRef.current.add(itemId);
            }
        },
        [feedItemIndex, onFeedWeeklyItemShow],
    );

    // onIndexChanged在单个item时不会回调，这里补充调用下第0个
    useEffect(() => {
        reportElementShow(carouselList[0], 0);
    }, [carouselList, reportElementShow]);

    const onIndexChanged = useCallback(
        (bannerIndex: number) => {
            const item = carouselList?.[bannerIndex];
            reportElementShow(item, bannerIndex);
        },
        [carouselList, reportElementShow],
    );

    const paginationStyle = {
        justifyContent: 'center',
        bottom: 5,
        paddingRight: 5,
    } as StyleProp<ViewStyle>;

    const kidCarouselProps = {
        borderRadius: 0,
        carouselHeight: productAdapter(234),
        autoplay: true,
        loop: true,
        onIndexChanged: onIndexChanged,
        loadMinimal: false,
        autoplayTimeout: 6,
        dotStyle: {
            width: productAdapter(2),
            height: productAdapter(2),
            marginLeft: productAdapter(2),
            marginRight: 0,
        },
        activeDotStyle: {
            width: 10,
            height: productAdapter(2),
            marginLeft: 4,
            marginRight: 0,
        },
        paginationStyle,
    };

    const WeeklyPromotionItem = memo(
        ({
            weeklyModel,
            index,
        }: {
            weeklyModel: WeeklyPromotionModel;
            index: number;
        }) => {
            let productList = weeklyModel?.products ?? [];
            if (productList.length > 2) {
                productList = weeklyModel?.products.slice(0, 2);
            }

            // 没有商品的时候，上报
            // if (productList.length === 0) {
            //     let params = {
            //         errMsg: '周周小促没有返回商品',
            //         data: weeklyModel,
            //     };
            //     dataError(params);
            // }

            const onPress = useCallback(() => {
                // localLifeBizLogger.click('CAMPAIGN_CARD', {
                //     url: weeklyModel?.jumpUrl,
                //     campaign_name: weeklyModel?.title,
                //     index: feedItemIndex + 1,
                //     index_internal: index + 1,
                // });
                onFeedWeeklyPress &&
                    onFeedWeeklyPress(weeklyModel, index, feedItemIndex);
                jumpUrl(weeklyModel?.jumpUrl, 'jumpToWeeklyPromotion');
                // 检验快链是否为空，为空上报
                if (isEmptyString(weeklyModel?.jumpUrl)) {
                    const itemClass = typeof weeklyModel;
                    logLinkUrlNUll('feedWeeklyCard', itemClass, weeklyModel);
                }
            }, [index, weeklyModel]);

            // 渐变色值只下发一个的时候，展示纯色
            let minColor =
                weeklyModel?.backgroundColorMin ??
                weeklyModel?.backgroundColorMax ??
                '#FF3737';
            let maxColor =
                weeklyModel?.backgroundColorMax ??
                weeklyModel?.backgroundColorMin ??
                '#FF3737';

            return (
                <TouchableWithoutFeedback onPress={onPress}>
                    <LinearGradient
                        style={styles.gradient}
                        colors={[minColor, maxColor]}
                    >
                        <LocalLifeImage
                            sceneType={'WeeklyPromotion'}
                            style={styles.containerItem}
                            source={{ uri: weeklyModel.backgroundImage }}
                            resizeMode={'cover'}
                        >
                            <View style={styles.textContainer}>
                                <View style={styles.titleContainer}>
                                    <Text style={styles.title}>
                                        {weeklyModel?.title}
                                    </Text>
                                    <LocalLifeImage
                                        sceneType={'WeeklyProductArrow'}
                                        style={styles.arrowImage}
                                        source={{ uri: WEEKLY_ARROW_URL }}
                                        resizeMode={'cover'}
                                    />
                                </View>

                                <Text style={styles.subTitle}>
                                    {weeklyModel?.subTitle}
                                </Text>
                            </View>
                            <View style={styles.productContainer}>
                                {productList.map((item, index) => {
                                    return (
                                        <WeeklyProduct
                                            data={item}
                                            onProductPress={onPress}
                                            key={index}
                                        />
                                    );
                                })}
                            </View>
                        </LocalLifeImage>
                    </LinearGradient>
                </TouchableWithoutFeedback>
            );
        },
    );

    return (
        // @ts-ignore
        <View style={styles.container}>
            <KidCarousel
                {...kidCarouselProps}
                key={'carouselKey' + (carouselList?.length ?? 0)}
            >
                {carouselList?.map(
                    (item: WeeklyPromotionModel, index: number) => (
                        <WeeklyPromotionItem
                            weeklyModel={item}
                            index={index}
                            key={index}
                        />
                    ),
                )}
            </KidCarousel>
        </View>
    );
});
