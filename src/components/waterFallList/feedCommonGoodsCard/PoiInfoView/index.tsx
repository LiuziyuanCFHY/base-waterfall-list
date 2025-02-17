import React from 'react';
import { Text, View } from 'react-native';
import { FeedGoodsInfo } from '../../model';
import styles from './styles';
import KwaiImage from '@kds/image';
import { ShowWithData } from '@locallife/biz-component';

interface IProps {
    goodsInfo: FeedGoodsInfo;
}

interface Layout {
    x: number;
    y: number;
    width: number;
    height: number;
}

export const PoiInfoView = React.memo(({ goodsInfo }: IProps) => {
    return (
        <View style={styles.shopInfoLineContainer}>
            <View style={styles.shopInfoContainer}>
                <KwaiImage
                    resizeMode="cover"
                    source={{
                        uri: goodsInfo?.shopLightIcon,
                    }}
                    style={[styles.shopIcon]}
                />
                <Text style={styles.subTitle} numberOfLines={1}>
                    {goodsInfo?.poiName ?? ''}
                </Text>
            </View>
            <ShowWithData data={goodsInfo?.shopArrowIcon}>
                <KwaiImage
                    resizeMode="cover"
                    source={{
                        uri: goodsInfo?.shopArrowIcon,
                    }}
                    style={[styles.arrowIcon]}
                />
            </ShowWithData>
        </View>
    );
});
