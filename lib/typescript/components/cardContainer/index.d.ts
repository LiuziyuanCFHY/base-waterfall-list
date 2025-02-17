import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';
export declare const cardStyles: {
    cardContainer: import("../../utils/EStyleUtil").AnyStyle;
};
interface Props {
    children: ReactNode;
    containerStyle?: ViewStyle;
    ignoreBottomPadding?: boolean;
    ignoreTopPadding?: boolean;
    ignoreLeftPadding?: boolean;
    ignoreRightPadding?: boolean;
    marginTop?: number;
}
export declare const CardContainer: ({ containerStyle, children, ignoreBottomPadding, ignoreTopPadding, ignoreLeftPadding, ignoreRightPadding, marginTop, }: Props) => JSX.Element;
export {};
