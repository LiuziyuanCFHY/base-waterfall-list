import React from 'react';
type IProps = {
    isLoading: boolean;
    noMore: boolean;
    isDark: boolean;
    notShowSlogan: boolean;
};
export declare const footerStyles: {
    container: import("../../../utils/EStyleUtil").AnyStyle;
    footerContainer: import("../../../utils/EStyleUtil").AnyStyle;
    footerDarkContainer: import("../../../utils/EStyleUtil").AnyStyle;
    footer: import("../../../utils/EStyleUtil").AnyStyle;
    noMoreFooter: import("../../../utils/EStyleUtil").AnyStyle;
};
export declare const DetailFooter: React.MemoExoticComponent<({ isLoading, noMore, isDark, notShowSlogan }: IProps) => JSX.Element>;
export {};
