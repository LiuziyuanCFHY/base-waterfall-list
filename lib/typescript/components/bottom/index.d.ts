import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import React from 'react';
type Props = {
    noMore: boolean;
    loading: boolean;
    containerStyle?: ViewStyle;
    textStyle?: StyleProp<TextStyle>;
    onPress: () => void;
    text?: string;
    iconStyle?: ImageStyle;
};
declare function GoodsBottom({ noMore, loading, containerStyle, textStyle, onPress, text, iconStyle, }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof GoodsBottom>;
export default _default;
