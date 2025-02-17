import React from 'react';
import { Text, View } from 'react-native';
import { LocalLifeImage } from '@locallife/base-image';
import { DotDecreasePrice, ShowWithData } from '@locallife/biz-component';
import { FeedGoodsInfo } from '../../model';
import styles from './styles';

interface IProps {
    productInfo: FeedGoodsInfo;
}

interface Layout {
    x: number;
    y: number;
    width: number;
    height: number;
}

export const NewUserBuyInfoView = React.memo(({ productInfo }: IProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.priceInfoContainer}>
                    <Text style={styles.priceUnit}>¥</Text>
                    <DotDecreasePrice
                        price={productInfo.discountPrice ?? ''}
                        firstPriceStyle={styles.firstPriceFontStyle}
                        dotSecondPriceStyle={styles.firstPriceFontStyle}
                    />
                    <ShowWithData data={productInfo?.priceSuffix}>
                        <Text style={styles.priceSuffix}>
                            {productInfo?.priceSuffix}
                        </Text>
                    </ShowWithData>
                </View>
                <ShowWithData data={productInfo?.originPriceText}>
                    <Text style={styles.originPrice}>
                        {productInfo?.originPriceText}
                    </Text>
                </ShowWithData>
            </View>
            <LocalLifeImage
                style={styles.qiangButton}
                source={{ uri: productInfo?.buyUrl }}
                resizeMode={'cover'}
                sceneType={'NewUserBuyInfoView'}
            />
        </View>
    );
});
