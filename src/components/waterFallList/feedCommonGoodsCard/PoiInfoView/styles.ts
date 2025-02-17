import { StyleSheet } from 'react-native';
import { productAdapter } from '../../../../utils/utils';
import {
    COMMON_CARD_FONT_SIZE_11,
    COMMON_CARD_POI_HEIGHT,
} from '../../config/config';
import { LL_UI } from '@locallife/design-base';

export default StyleSheet.create({
    shopInfoLineContainer: {
        flexDirection: 'row',
        height: COMMON_CARD_POI_HEIGHT,
        alignItems: 'center',
        flexWrap: 'nowrap',
        borderTopColor: '#eaeaea',
        borderTopWidth: productAdapter(0.5),
    },
    shopInfoContainer: {
        flexDirection: 'row',
        flexShrink: 1,
        alignItems: 'center',
    },
    shopIcon: {
        width: productAdapter(14),
        height: productAdapter(14),
        marginRight: productAdapter(2),
    },
    subTitle: {
        fontWeight: '400',
        fontSize: COMMON_CARD_FONT_SIZE_11,
        lineHeight: productAdapter(16),
        flexShrink: 1,
        color: LL_UI.Color.TEXT_MAIN,
    },
    arrowIcon: {
        width: productAdapter(10),
        height: productAdapter(10),
        marginRight: productAdapter(2),
    },
});
