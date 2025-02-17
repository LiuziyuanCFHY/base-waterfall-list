import KwaiImage from '@kds/image';
import { CountDown, ShowWithData } from '@locallife/biz-component';
import React from 'react';
import { View, ViewStyle, Text } from 'react-native';
import { styles } from './style';
import { FeedGoodsInfo } from '../../model';

type Props = {
    data: FeedGoodsInfo;
    end?: () => void;
};

function CountDownContainer({ data, end }: Props) {
    return (
        <ShowWithData data={data?.countdownInfo?.bgImgUrl}>
            <KwaiImage
                source={{
                    uris: [
                        {
                            url: data?.countdownInfo?.bgImgUrl ?? '',
                        },
                    ],
                }}
                style={styles.countDownBgStyle}
            >
                <KwaiImage
                    source={{
                        uris: [
                            {
                                url: data?.countdownInfo?.iconUrl ?? '',
                            },
                        ],
                    }}
                    style={styles.icon}
                />
                <View style={styles.countDownContainer}>
                    <Text style={[styles.desTextStyle]}>
                        {data?.countdownInfo?.text ?? ''}
                    </Text>
                    <CountDown
                        timeStamp={data?.countdownInfo?.endTime ?? 0}
                        loopCountDown={false}
                        textStyle={styles.title as ViewStyle}
                        endCallback={end}
                    />
                </View>
            </KwaiImage>
        </ShowWithData>
    );
}

export default React.memo(CountDownContainer);
