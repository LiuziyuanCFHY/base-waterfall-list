import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import padStart from 'lodash/padStart';
import { styles } from './style';
import { getServerTime } from '@locallife/utils';
import { ShowWithData } from '@locallife/biz-component';

type Props = {
    timeStamp: number;
    end?: () => void;
    endContent?: string;
};

function getTime(
    timeStamp: number,
    initTimeStamp: number,
    endContent?: string,
) {
    const leftTime = timeStamp - initTimeStamp;
    let h, m, s;
    if (leftTime > 0) {
        h = Math.floor(leftTime / 1000 / 60 / 60);
        m = Math.floor((leftTime / 1000 / 60) % 60);
        s = Math.floor((leftTime / 1000) % 60);
    } else {
        return endContent ? endContent : undefined;
    }
    const format = (n) => {
        return padStart(String(n), 2, '0');
    };
    return `${format(h)}:${format(m)}:${format(s)}`;
}

// 商品item左侧封面倒计时组件
function CountDown({ timeStamp, end, endContent }: Props) {
    const countDown = useCallback(async () => {
        return await getServerTime();
    }, []);

    const intervalIDRef = useRef<NodeJS.Timer>();
    const [showTime, setShowTime] = useState('');

    function countFinished(lftTime: number, callback?: () => void) {
        if (callback) {
            // lftTime 指到计时被舍入的部分，比如到计时剩余 100 ms，但因为小于 1s，会显示 0，lftTime = 100；
            const time = Math.min(1000, lftTime + Math.random() * 1000);
            setTimeout(() => {
                callback();
            }, time);
        }
    }

    const loopCountDown = useCallback(
        (timeStamp, resultTime, endContent) => {
            //@ts-ignore
            setShowTime(getTime(timeStamp, resultTime, endContent));
            if (showTime !== endContent) {
                intervalIDRef.current = setInterval(() => {
                    countDown().then((result) => {
                        //@ts-ignore
                        setShowTime(getTime(timeStamp, result, endContent));
                        if (showTime === endContent) {
                            countFinished(timeStamp - result, end);
                            //@ts-ignore
                            clearInterval(intervalIDRef?.current);
                        }
                    });
                }, 1000);
            } else {
                countFinished(timeStamp - resultTime, end);
            }
        },
        [countDown, end, showTime],
    );

    useEffect(() => {
        countDown()
            .then((resultTime) => {
                loopCountDown(timeStamp, resultTime, endContent);
            })
            .catch(() => {
                loopCountDown(timeStamp, Date.now(), endContent);
            });

        return () => {
            if (intervalIDRef?.current) {
                //@ts-ignore
                clearInterval(intervalIDRef?.current);
            }
        };
    }, [countDown, endContent, loopCountDown, showTime, timeStamp]);
    return (
        <ShowWithData data={showTime}>
            <View style={styles.container}>
                <Text style={styles.title}>{showTime}</Text>
            </View>
        </ShowWithData>
    );
}

export default React.memo(CountDown);
