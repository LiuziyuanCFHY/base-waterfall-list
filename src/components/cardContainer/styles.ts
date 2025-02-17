import { getThemeColor } from '@locallife/utils';
import { EStyleUtil } from '../../utils/EStyleUtil';
import { Platform } from 'react-native';
import { SCREEN_WIDTH_414 } from '@locallife/design-base';

export const cardStyles = EStyleUtil.create({
    cardContainer: {
        width: Platform.OS === 'ios' ? SCREEN_WIDTH_414 : 'auto',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: () =>
            getThemeColor({
                dark: '#2B2B2F',
                light: '#FFFFFF',
            }),
    },
});
