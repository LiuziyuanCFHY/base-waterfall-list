import React, { useCallback } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import { WeeklyProductModel } from '../Model/WeeklyPromotionModel';
import { LocalLifeImage } from '@locallife/base-image';
import { DotDecreasePrice } from '@locallife/biz-component';
import { priceUnit } from '../../../../utils/utils';

interface IProps {
    data: WeeklyProductModel;
    onProductPress: () => void;
}
function WeeklyProduct({ data, onProductPress }: IProps) {
    const onPress = useCallback(() => {
        if (onProductPress) {
            onProductPress();
        }
    }, [onProductPress]);

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <LocalLifeImage
                    sceneType={'WeeklyProduct'}
                    style={styles.coverImage}
                    source={{ uri: data?.coverUrl }}
                    resizeMode={'cover'}
                />
                <View style={styles.rightContent}>
                    <Text style={styles.productTitle} numberOfLines={1}>
                        {data?.productTitle}
                    </Text>
                    <View style={styles.priceContainer}>
                        <Text style={styles.pricePrefix} numberOfLines={1}>
                            {priceUnit}
                        </Text>
                        <DotDecreasePrice
                            price={data?.discountPrice ?? ''}
                            firstPriceStyle={styles.firstPriceText}
                            dotSecondPriceStyle={styles.secondPriceText}
                        />
                        <Text style={styles.originPrice} numberOfLines={1}>
                            {data?.originPriceText}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default React.memo(WeeklyProduct);
