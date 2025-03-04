import React from 'react';
import { FlatList, type FlatListProps, type ViewStyle } from 'react-native';
export type ItemData = {
    offsetTop: number;
    itemH: number;
    itemData: any;
    columnIndex: number;
    index: number;
};
export type RowData = {
    rowIndex: number;
    rowData: ItemData[];
    rowH: number;
    rowOffsetTop: number;
};
export type IRenderItemProps = {
    item: ItemData;
    index: number;
    row: RowData;
};
export interface IWaterFallListProps extends Omit<FlatListProps<RowData>, 'renderItem' | 'ItemSeparatorComponent'> {
    renderItem: ({ item, index, row, }: IRenderItemProps) => React.ReactElement | null;
    ItemSeparatorComponent?: () => JSX.Element;
    children?: React.ReactNode;
    rowStyle?: ViewStyle;
    data: any[];
    onItemLayoutDone?: () => void;
    marginLeft?: number;
    marginRight?: number;
    cellTopMargin?: number;
    cellInnerMargin?: number;
}
export interface IWaterFallList {
    refreshList: (offset?: number, animated?: boolean) => void;
    flatList: FlatList | null;
}
