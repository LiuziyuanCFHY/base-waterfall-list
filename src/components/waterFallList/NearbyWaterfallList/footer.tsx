import React from 'react';
import { StaticLoading } from '@locallife/fallbackcomponents';
import { EStyleUtil } from '../../../utils/EStyleUtil';
import { SCREEN_WIDTH_414 } from '@locallife/design-base';
import { View } from 'react-native';
import { KidLoading } from '@kid-ui/krn';

type IProps = {
    isLoading: boolean;
    noMore: boolean;
    isDark: boolean;
    notShowSlogan: boolean;
};

export const footerStyles = EStyleUtil.create({
    container: {
        flex: 1,
        minHeight: 177,
        width: SCREEN_WIDTH_414,
        backgroundColor: '#F8F8F8',
    },
    footerContainer: {
        flex: 1,
        alignItems: 'center',
    },
    footerDarkContainer: {
        flex: 1,
        alignItems: 'center',
    },
    footer: {
        width: '100%',
        height: 92,
    },
    noMoreFooter: {
        width: '100%',
        height: 177,
        marginTop: -50,
    },
});

export const DetailFooter = React.memo(
    ({ isLoading, noMore, isDark, notShowSlogan = false }: IProps) => {
        let content = <StaticLoading containerStyle={footerStyles.footer} />;
        if (notShowSlogan) {
            return <View />;
        }
        if (noMore) {
            return <StaticLoading containerStyle={footerStyles.noMoreFooter} />;
        }
        if (isLoading) {
            content = isDark ? (
                <View style={footerStyles.footerDarkContainer}>
                    <KidLoading style={footerStyles.footerDarkContainer} />
                </View>
            ) : (
                <View style={footerStyles.footerContainer}>
                    <KidLoading />
                </View>
            );
        }
        return <View style={footerStyles.container}>{content}</View>;
    },
);
