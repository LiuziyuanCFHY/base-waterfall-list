import { productAdapter } from '../../../utils/utils';
import { StyleSheet } from 'react-native';

import {
    COMMON_CARD_BRAND_LINE_HORIZONTAL_MARGIN,
    COMMON_CARD_CONTENT_PADDING,
    COMMON_CARD_DESC_LINE_HEIGHT,
    COMMON_CARD_DESC_TO_TITLE_MARGIN,
    COMMON_CARD_FONT_SIZE_11,
    COMMON_CARD_TITLE_FONT,
    COMMON_CARD_TITLE_ICON_RIGHT_MARGIN,
    COMMON_CARD_TITLE_LINE_HEIGHT,
    COMMON_CARD_TITLE_TOP_PADDING,
} from '../config/config';
import { LL_UI } from '@locallife/design-base';

// 瀑布流需要动态计算高度，来区分放左边还是右边
// 商品图片高度 144  + 标题上下间距各8即 16 + 标题为一行字时 14+ 一行间距 3 + 打标签价格一行最大字为 20+最大行间距为 4+ poi上间距 10+ poi下间距 14 + poi字大小 12
export default StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: productAdapter(8),
    },
    coverImage: {
        width: '100%', // 或者设置为特定的宽度
        height: 'auto', // 让高度自适应
        aspectRatio: 1, // 设定宽高比为 1:1
        borderTopLeftRadius: productAdapter(8),
        borderTopRightRadius: productAdapter(8),
    },
    coverBottomContent: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
    },
    content: {
        paddingHorizontal: COMMON_CARD_CONTENT_PADDING,
        position: 'relative',
        paddingTop: COMMON_CARD_TITLE_TOP_PADDING,
    },
    // 两行标题相关
    firstLine: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nextLine: {
        fontSize: COMMON_CARD_TITLE_FONT,
        fontWeight: '500',
        color: '#222222',
        marginTop: productAdapter(3),
        lineHeight: COMMON_CARD_TITLE_LINE_HEIGHT,
    },
    labelStyle: {
        marginRight: COMMON_CARD_TITLE_ICON_RIGHT_MARGIN,
        marginTop: productAdapter(1),
    },
    brandText: {
        fontSize: COMMON_CARD_TITLE_FONT,
        fontWeight: '500',
        maxWidth: productAdapter(153),
        color: '#222222',
        lineHeight: COMMON_CARD_TITLE_LINE_HEIGHT,
    },
    verLine: {
        width: productAdapter(0.5),
        marginHorizontal: COMMON_CARD_BRAND_LINE_HORIZONTAL_MARGIN,
        height: productAdapter(10),
        backgroundColor: '#9C9C9C',
        opacity: 0.6,
    },
    titleContainer: {
        fontSize: COMMON_CARD_TITLE_FONT,
        fontWeight: '500',
        color: '#222222',
        flex: 1,
        lineHeight: COMMON_CARD_TITLE_LINE_HEIGHT,
    },
    descContainer: {
        flexDirection: 'row',
        marginTop: COMMON_CARD_DESC_TO_TITLE_MARGIN,
        lineHeight: COMMON_CARD_DESC_LINE_HEIGHT,
        alignItems: 'center',
    },
    feedBackRate: {
        fontSize: COMMON_CARD_FONT_SIZE_11,
        color: LL_UI.Color.TEXT_MAIN,
        marginRight: productAdapter(6),
    },
    soldStock: {
        fontSize: COMMON_CARD_FONT_SIZE_11,
        color: LL_UI.Color.TEXT_MAIN,
    },
});
