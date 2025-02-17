import { StyleSheet } from 'react-native';
import { productAdapter } from '../../../../utils/utils';
import { LL_UI } from '@locallife/design-base';
import {
    COMMON_CARD_FONT_SIZE_10,
    COMMON_CARD_FONT_SIZE_11,
} from '../../config/config';

export const styles = StyleSheet.create({
    countDownBgStyle: {
        paddingHorizontal: productAdapter(6),
        width: '100%',
        height: productAdapter(22),
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: productAdapter(57),
        height: productAdapter(13),
    },
    countDownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    desTextStyle: {
        fontSize: COMMON_CARD_FONT_SIZE_10,
        flexShrink: 1,
        marginStart: productAdapter(4),
        color: LL_UI.Color.TEXT_WHITE,
        fontWeight: '600',
        marginRight: productAdapter(2),
    },
    title: {
        fontFamily: 'SF Pro Display',
        fontSize: COMMON_CARD_FONT_SIZE_11,
        fontWeight: '700',
        color: LL_UI.Color.TEXT_WHITE,
        includeFontPadding: false,
    },
});
