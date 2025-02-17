import { StyleSheet } from 'react-native';
import { productAdapter } from '../../../utils/utils';

export const styles = StyleSheet.create({
    containerRow: {
        flexDirection: 'row',
    },
    distance: {
        height: productAdapter(8),
    },
});
