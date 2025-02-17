import React from 'react';
type Props = {
    timeStamp: number;
    end?: () => void;
    endContent?: string;
};
declare function CountDown({ timeStamp, end, endContent }: Props): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof CountDown>;
export default _default;
