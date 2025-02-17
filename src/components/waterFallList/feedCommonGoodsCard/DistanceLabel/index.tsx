import React from 'react';
import { Text, View } from 'react-native';
import KwaiImage from '@kds/image';
import styles from './styles';
import { CommonLabels, ShowWithData } from '@locallife/biz-component';
import { FeedGoodsInfo } from '../../model';

interface IProps {
    goodsInfo: FeedGoodsInfo;
}

interface Layout {
    x: number;
    y: number;
    width: number;
    height: number;
}

export const DistanceLabel = React.memo(({ goodsInfo }: IProps) => {
    const locationIconUrl =
        'https://s2-11289.kwimgs.com/kos/nlav11289/1/local_life_locallife_coordinate_icon_cdn.png';

    // 是否展示距离
    const showDistance = !!goodsInfo?.distanceText;
    // 是否展示通用标签
    const showCommonLabel =
        !!goodsInfo?.productBizTagPositions?.good_goods_img_bottom;
    // 是否展示分割线
    const showLine = showDistance && showCommonLabel;
    // 是否展示本组件
    const show = showDistance || showCommonLabel;

    return (
        <ShowWithData data={show}>
            <View style={styles.distanceLabel}>
                <ShowWithData data={showDistance}>
                    <KwaiImage
                        resizeMode="cover"
                        source={{
                            uri: locationIconUrl,
                        }}
                        style={[styles.distanceIcon]}
                    />
                    <Text style={styles.distanceText} numberOfLines={1}>
                        {goodsInfo?.distanceText}
                    </Text>
                </ShowWithData>
                <ShowWithData data={showLine}>
                    <View style={[styles.line]} />
                </ShowWithData>
                {!!goodsInfo?.productBizTagPositions?.good_goods_img_bottom && (
                    <CommonLabels
                        bizTags={
                            goodsInfo?.productBizTagPositions
                                ?.good_goods_img_bottom
                        }
                        // containerStyle={}
                        autoCut={false}
                    />
                )}
            </View>
        </ShowWithData>
    );
});
