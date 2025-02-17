import React from "react";
import { FeedGoodsInfo } from "../../model";
type Props = {
    data: FeedGoodsInfo;
    end?: () => void;
};
declare function CountDownContainer({ data, end }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof CountDownContainer>;
export default _default;
