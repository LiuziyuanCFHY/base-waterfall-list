import React, { useCallback, useMemo } from 'react';
import { ItemData } from './type';
import { View } from 'react-native';
import { style } from './style';
import WaterFallItem from './waterFallItem';
import { get414Px, SCREEN_WIDTH, rem } from '../../utils/designBase414';

function WaterFallRowItem({
    item,
    cusTomRowStyle,
    numColumns,
    onLayout,
    renderItem,
    marginLeft = 16,
    marginRight = 16,
    cellTopMargin = 10,
    cellInnerMargin = 8,
}) {
    const waterStyle = useMemo(() => {
        return [
            style.rowStyle,
            ...(cusTomRowStyle ? [cusTomRowStyle] : []),
            (item.rowH || 0) > 0
                ? {
                      height: get414Px(item.rowH) || 0,
                  }
                : undefined,
        ];
    }, [item.rowH, cusTomRowStyle]);
    const itemW = useMemo(() => {
        return (
            (SCREEN_WIDTH -
                rem(
                    marginLeft +
                        marginRight +
                        (numColumns - 1) * cellInnerMargin,
                )) /
            numColumns
        );
    }, [numColumns, marginLeft, marginRight, cellInnerMargin]);
    const dividerStyle = useMemo(() => {
        return {
            ...style.diverStyle,
            height: rem(cellTopMargin),
        };
    }, [cellTopMargin]);
    const render = useCallback(
        (data) => {
            return data.rowData.map((rowItemData: ItemData) => {
                const { offsetTop, columnIndex, index, itemH } = rowItemData;
                const opacity = itemH ? 1 : 0;
                return (
                    <WaterFallItem
                        item={data}
                        key={data.rowIndex + '_' + index}
                        index={index}
                        columnIndex={columnIndex}
                        itemW={itemW}
                        offsetTop={offsetTop}
                        opacity={opacity}
                        onLayout={onLayout}
                        marginLeft={marginLeft}
                        cellInnerMargin={cellInnerMargin}
                    >
                        <>
                            {renderItem({
                                item: rowItemData,
                                index,
                                row: data,
                            })}
                            <View style={dividerStyle} />
                        </>
                    </WaterFallItem>
                );
            });
        },
        [
            cellInnerMargin,
            dividerStyle,
            itemW,
            marginLeft,
            onLayout,
            renderItem,
        ],
    );
    return <View style={waterStyle}>{render(item)}</View>;
}

export default React.memo(WaterFallRowItem);
