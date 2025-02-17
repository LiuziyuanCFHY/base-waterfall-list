import { StyleSheet } from 'react-native';
import {
    COMMON_CARD_FONT_SIZE_11,
    COMMON_CARD_FONT_SIZE_12,
    COMMON_CARD_FONT_SIZE_18,
    COMMON_CARD_PRICE_HEIGHT,
    COMMON_CARD_PRICE_TOP_MARGIN,
    COMMON_CARD_PRICE_VERTICAL_MARGIN,
} from '../../config/config';
import { productAdapter } from '../../../../../src/utils/utils';
import { LL_UI } from '@locallife/design-base';

export default StyleSheet.create({
    firstPrice: {
        fontSize: COMMON_CARD_FONT_SIZE_18,
        fontFamily: 'SF Pro Display',
        color: LL_UI.Color.PRICE_TEXT,
        marginRight: productAdapter(6),
        fontWeight: '700',
        lineHeight: COMMON_CARD_PRICE_HEIGHT,
    },
    secondPrice: {
        fontSize: COMMON_CARD_FONT_SIZE_11,
        fontFamily: 'SF Pro Display',
        color: LL_UI.Color.PRICE_TEXT,
        fontWeight: '700',
    },
    priceInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: COMMON_CARD_PRICE_TOP_MARGIN,
        marginBottom: COMMON_CARD_PRICE_VERTICAL_MARGIN,
    },
    priceLine: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    unit: {
        color: LL_UI.Color.PRICE_TEXT,
        fontSize: COMMON_CARD_FONT_SIZE_12,
        fontWeight: '700',
    },
    secondaryCardTimes: {
        fontSize: COMMON_CARD_FONT_SIZE_11,
        color: LL_UI.Color.PRICE_TEXT,
        fontWeight: '400',
        paddingLeft: productAdapter(1),
    },
    originPrice: {
        marginLeft: productAdapter(3),
        marginBottom: productAdapter(3),
        fontSize: COMMON_CARD_FONT_SIZE_11,
        color: LL_UI.Color.TEXT_SECEND,
        textDecorationColor: LL_UI.Color.TEXT_SECEND,
        textDecorationLine: 'line-through',
    },
    label: {
        marginTop: productAdapter(2),
    },
});
