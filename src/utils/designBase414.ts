import { Dimensions, Platform } from 'react-native';
import { rem as kidRem } from '@kid-ui/krn/lib/utils';

export const SCREEN_WIDTH = Math.min(
    Dimensions.get('screen').width,
    Dimensions.get('screen').height,
);

const isIOS = Platform.OS === 'ios';

const radio414 = SCREEN_WIDTH / 414;

const getRADIO = () => {
    if (isIOS) {
        if (Dimensions.get('window').width < 390) {
            return radio414;
        } else {
            return 1;
        }
    }
    return radio414;
};

export const RADIO = getRADIO();

export const get414Px = (num: number) => {
    return num / RADIO;
};

export const rem = (num: number, baseWidth?: number) => {
    return kidRem(num, baseWidth);
};
