/**
 * @file hooks.ts
 * @description 请在此添加属于该页面的自定义hooks
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import { countFeedItemHeight } from '../../../utils/utils';
import {
    GOOD_CARD_WIDTH,
    leftKey,
    ONE_LINE_TITLE_FONT,
    rightKey,
} from '../config/config';
import { useLatest } from '@locallife/base-hooks';
import { FeedModel } from '../model';
import { EStyleUtil } from '../../../utils/EStyleUtil';

export const useDoubleListData = (
    feedGoodsInfos: FeedModel[],
    refreshCount: number = 0,
    cardWidth: number = GOOD_CARD_WIDTH,
) => {
    const leftHeight = useRef(0);
    const rightHeight = useRef(0);
    const [dataList, setDataList] = useState([]);
    const [leftData, setLeft] = useState<FeedModel[]>([]);
    const [rightData, setRight] = useState<FeedModel[]>([]);
    const lastIndex = useRef(0);
    const lastRefreshCount = useRef(0);

    useEffect(() => {
        if (feedGoodsInfos.length > 0) {
            setDataList([{ itemId: 'have-data' }]);
        }
    }, [feedGoodsInfos.length]);

    useEffect(() => {
        const lData = [];
        const rData = [];
        let tmpFeedGoodsInfos = feedGoodsInfos;
        if (
            lastIndex.current >= feedGoodsInfos.length &&
            refreshCount === lastRefreshCount.current
        ) {
            // 没有新增卡片直接返回
            return;
        }
        if (lastIndex.current !== 0) {
            tmpFeedGoodsInfos = tmpFeedGoodsInfos.slice(lastIndex.current);
        }
        lastIndex.current = feedGoodsInfos.length;
        tmpFeedGoodsInfos.forEach((item, index) => {
            const newItem = { ...item };
            // 1、realIndex赋值
            newItem.realIndex = index;
            // 2、计算卡片高度
            const itemHeight = countFeedItemHeight(
                newItem,
                ONE_LINE_TITLE_FONT,
                cardWidth,
            );
            // 3、构造双列的数据源
            if (leftHeight.current <= rightHeight.current) {
                leftHeight.current += itemHeight;
                lData.push(newItem);
            } else {
                rightHeight.current += itemHeight;
                rData.push(newItem);
            }
        });
        if (refreshCount === lastRefreshCount.current) {
            setLeft((prevLeftData) => prevLeftData.concat(lData));
            setRight((prevRightData) => prevRightData.concat(rData));
        } else {
            // 重新刷新了，更新数据源
            setLeft(lData);
            setRight(rData);
            lastRefreshCount.current = refreshCount;
        }
        // 仅feedGoodsInfos依赖即可
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [feedGoodsInfos]);

    const updateHeight = useCallback((listKey: string, height: number) => {
        if (listKey === leftKey) {
            leftHeight.current = height;
        } else if (listKey === rightKey) {
            rightHeight.current = height;
        }
    }, []);

    return {
        dataList,
        leftData,
        rightData,
        updateHeight,
    };
};

export const useTextLineHook = (title: string) => {
    const lastTitle = useLatest(title);
    const haveLayout = useRef(false);

    const [titleInfo, setTitleInfo] = useState<{
        lineNumber: number;
        firstLine: string;
        nextLine: string;
        maxHeight?: number;
        realTitle: string;
    }>({
        realTitle: title,
        lineNumber: 2,
        firstLine: lastTitle.current || '',
        nextLine: '',
        maxHeight: EStyleUtil.transNumberToRem(36),
    });

    useEffect(() => {
        if (lastTitle.current !== titleInfo.realTitle) {
            setTitleInfo({
                realTitle: lastTitle.current,
                lineNumber: 2,
                firstLine: lastTitle.current || '',
                nextLine: '',
                maxHeight: EStyleUtil.transNumberToRem(36),
            });
            haveLayout.current = false;
        }
    }, [lastTitle, title, titleInfo.realTitle]);

    const onTextLayout = useCallback(
        (e) => {
            if (haveLayout.current) {
                return;
            }
            if (e.nativeEvent.lines.length > 1) {
                const { text } = e.nativeEvent.lines[0];
                let remainText = '';
                for (let i = 1; i < e.nativeEvent.lines.length; i++) {
                    remainText += e.nativeEvent.lines[i].text;
                }
                setTitleInfo({
                    realTitle: lastTitle.current,
                    lineNumber: 1,
                    firstLine: text,
                    nextLine: remainText,
                    maxHeight: e.nativeEvent.lines[0].height * 2,
                });
            } else {
                setTitleInfo({
                    realTitle: lastTitle.current,
                    lineNumber: 1,
                    firstLine: lastTitle.current,
                    nextLine: '',
                    maxHeight: EStyleUtil.transNumberToRem(36),
                });
            }
            haveLayout.current = true;
        },
        [lastTitle],
    );
    return {
        onTextLayout,
        titleInfo,
    };
};
