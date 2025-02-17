import {
    ImageStyle,
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';
import PoiIconConst from '../../common/PoiIconConst';
import React from 'react';
import styles from './styles';
import { KidIcon, KidLoading } from '@kid-ui/krn';

type Props = {
    noMore: boolean;
    loading: boolean;
    containerStyle?: ViewStyle;
    textStyle?: StyleProp<TextStyle>;
    onPress: () => void;
    text?: string;
    iconStyle?: ImageStyle;
};

function GoodsBottom({
    noMore,
    loading,
    containerStyle,
    textStyle,
    onPress,
    text,
    iconStyle,
}: Props) {
    if (noMore) {
        return <View />;
    }
    if (loading) {
        return (
            <View style={styles.container}>
                <KidLoading />
            </View>
        );
    }
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.container, containerStyle]}
        >
            <View style={styles.content}>
                <Text style={[styles.text, textStyle]}>
                    {text ? text : '查看更多'}
                </Text>
                <KidIcon
                    style={[styles.iconNew, iconStyle]}
                    kid={PoiIconConst.COMMMON_BASE_OPEN_24}
                />
            </View>
        </TouchableOpacity>
    );
}

export default React.memo(GoodsBottom);
