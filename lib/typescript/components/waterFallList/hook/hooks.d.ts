import { FeedModel } from '../model';
export declare const useDoubleListData: (feedGoodsInfos: FeedModel[], refreshCount?: number, cardWidth?: number) => {
    dataList: any[];
    leftData: FeedModel[];
    rightData: FeedModel[];
    updateHeight: (listKey: string, height: number) => void;
};
export declare const useTextLineHook: (title: string) => {
    onTextLayout: (e: any) => void;
    titleInfo: {
        lineNumber: number;
        firstLine: string;
        nextLine: string;
        maxHeight?: number;
        realTitle: string;
    };
};
