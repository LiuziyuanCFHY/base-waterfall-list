import React, { useCallback, useMemo } from 'react';
import { View, ViewStyle } from 'react-native';
import { get414Px } from '../../utils/designBase414';
import { rem } from '@kid-ui/krn/lib/utils';

function WaterFallItem({
    index,
    columnIndex,
    itemW,
    item,
    offsetTop,
    opacity,
    onLayout,
    children,
    marginLeft,
    cellInnerMargin,
}) {
    const itemStyle = useMemo(() => {
        const left: number =
            rem(marginLeft) +
            itemW * columnIndex +
            rem(cellInnerMargin) * columnIndex;
        return {
            position: 'absolute',
            top: get414Px(offsetTop - item.rowOffsetTop),
            left: get414Px(left),
            opacity: opacity,
            width: get414Px(itemW),
        } as ViewStyle;
    }, [
        cellInnerMargin,
        columnIndex,
        item.rowOffsetTop,
        itemW,
        marginLeft,
        offsetTop,
        opacity,
    ]);

    const handleOnLayout = useCallback(
        (e) => {
            onLayout(e, index);
        },
        [onLayout, index],
    );

    return (
        <View key={index} style={itemStyle} onLayout={handleOnLayout}>
            {children}
        </View>
    );
}

export default React.memo(WaterFallItem);
