import { LL_UI } from '@locallife/design-base';
import { productAdapter } from '../../../../utils/utils';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginLeft: productAdapter(2),
    },
    title: {
        fontFamily: 'SF Pro Display',
        fontSize: productAdapter(11),
        fontWeight: '700',
        color: LL_UI.Color.TEXT_WHITE,
        includeFontPadding: false,
    },
});
