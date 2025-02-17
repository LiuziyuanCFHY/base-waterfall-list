import { StyleSheet } from 'react-native';
import { LL_UI } from '@locallife/design-base';
import { COMMON_CARD_FONT_SIZE_12 } from '../../config/config';
import { productAdapter } from '../../../../utils/utils';
import { isIOS } from '@locallife/utils';

export default StyleSheet.create({
    distanceLabel: {
        backgroundColor: isIOS() ? '#0000006a' : '#0000009f',
        marginLeft: productAdapter(6),
        borderRadius: productAdapter(3),
        marginBottom: productAdapter(6),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: productAdapter(4),
        paddingRight: productAdapter(4),
        paddingVertical: productAdapter(2),
    },
    distanceIcon: {
        width: productAdapter(14),
        height: productAdapter(14),
        marginRight: productAdapter(2),
    },
    distanceText: {
        fontSize: COMMON_CARD_FONT_SIZE_12,
        color: LL_UI.Color.TEXT_WHITE,
    },
    line: {
        height: productAdapter(8),
        width: productAdapter(0.5),
        backgroundColor: LL_UI.Color.TEXT_WHITE,
        marginLeft: productAdapter(4),
        marginRight: productAdapter(2),
    },
});
