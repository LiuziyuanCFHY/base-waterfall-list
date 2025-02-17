import { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { TTheme } from '@locallife/utils';
export declare let localLifeBizFeedCardAdaptScreen: boolean;
export declare const changeLocalLifeBizFeedCardAdaptScreen: (adaptScreen: boolean) => void;
type Function<K> = () => K;
type Value<T> = T | (string & {});
type Variable<T> = Value<T> | Function<Value<T>>;
type Extended<T> = {
    [K in keyof T]: Variable<T[K]>;
};
export type AnyStyle = ImageStyle & TextStyle & ViewStyle;
type AnyStyleSet = {
    [key: string]: AnyStyle;
};
type MediaQuery = {
    [key: string]: Extended<AnyStyle>;
};
type EStyleSet<T = any> = {
    [K in keyof T]: T[K] extends Variable<number> ? T[K] : T[K] extends MediaQuery ? T[K] : Extended<AnyStyle>;
};
type StyleSet<T = any> = {
    [K in keyof T]: T[K] extends number ? T[K] : T[K] extends string ? T[K] : T[K] extends Function<number> ? number : T[K] extends Function<string> ? string : T[K] extends MediaQuery ? AnyStyleSet : AnyStyle;
};
interface EStyleRows {
    $theme?: TTheme;
}
declare class EStyleWrapper {
    globalRows: EStyleRows;
    updateNumberStyles(styles: AnyStyle): void;
    create: <T = EStyleSet<any>>(styles: EStyleSet<T>) => StyleSet<T>;
    build(obj?: EStyleRows): void;
    value(namespace: keyof EStyleRows): any;
    flatten<T>(style?: StyleProp<T>): T extends (infer U)[] ? U : T;
    /**
     * 将数字转换为rem，用于在EStyleUtil样式***外***使用
     * 某些场景中你需要和EStyleUtil样式内的数字保持一致，可以使用该方法，因为EStyleUtil样式内的数字已经默认转换了
     * @param num
     */
    transNumberToRem(num: number): number;
}
export declare const EStyleUtil: EStyleWrapper;
export {};
