import { rem } from '@kid-ui/krn/lib/utils';

import { getProductIcon } from './getProductIcon';
import { FeedGoodsInfo } from '../components/waterFallList/model';
import {
    COMMON_CARD_BRAND_LINE_HORIZONTAL_MARGIN,
    COMMON_CARD_CONTENT_PADDING,
    COMMON_CARD_DESC_LINE_HEIGHT,
    COMMON_CARD_DESC_TO_TITLE_MARGIN,
    COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT,
    COMMON_CARD_POI_HEIGHT,
    COMMON_CARD_PRICE_HEIGHT,
    COMMON_CARD_PRICE_TOP_MARGIN,
    COMMON_CARD_PRICE_VERTICAL_MARGIN,
    COMMON_CARD_TITLE_FONT,
    COMMON_CARD_TITLE_ICON_RIGHT_MARGIN,
    COMMON_CARD_TITLE_LINE_HEIGHT,
    COMMON_CARD_TITLE_TOP_PADDING,
    HEAD_IMG_MARGIN_RIGHT,
    ONE_LINE_TITLE_FONT,
    TOTAL_HEIGHT,
} from '../components/waterFallList/config/config';
import { FEED_CARD_TYPE, ITEM_TYPE_CODE } from '../constants';
import { isNotEmptyString } from '@locallife/utils';

let adaptScreen = true;

export const productAdapter = (size: number) => {
    return adaptScreen ? rem(size) : size;
};

export class AdaptScreenUtils {
    private static isInit = false;
    static setAdaptScreen(adapt: boolean = true) {
        if (this.isInit) {
            return;
        }
        adaptScreen = adapt;
        this.isInit = true;
    }
}

const CHAR_TYPE = {
    CAPITAL: 'capital',
    LOWER: 'lower',
    NUMBER: 'number',
    SPACE: 'space',
    CHINESE: 'chinese',
    BRACKET: 'bracket',
};

const CHAR_WIDTHS = {
    [CHAR_TYPE.CAPITAL]: 11,
    [CHAR_TYPE.LOWER]: 8.6,
    [CHAR_TYPE.NUMBER]: 9.9,
    [CHAR_TYPE.SPACE]: 4,
    [CHAR_TYPE.CHINESE]: 17.3,
    [CHAR_TYPE.BRACKET]: 5.95,
};

function getCharType(char: string) {
    if (/[A-Z]/.test(char)) {
        return CHAR_TYPE.CAPITAL;
    } else if (/([a-z]|[\u0021-\u002F])/.test(char)) {
        return CHAR_TYPE.LOWER;
    } else if (/\d/.test(char)) {
        return CHAR_TYPE.NUMBER;
    } else if (/\s/.test(char)) {
        return CHAR_TYPE.SPACE;
    } else if (char === '【' || char === '】') {
        // 直接匹配【和】
        return CHAR_TYPE.BRACKET; // 匹配括号
    } else {
        return CHAR_TYPE.CHINESE;
    }
}

const getStrWidth = (str: string, fontSize: number) => {
    const scale = fontSize / 17;
    const width = Array.from(str).reduce((sum: number, char) => {
        const charType = getCharType(char);
        const charWidth: number = CHAR_WIDTHS[charType] * scale;
        return sum + charWidth;
    }, 0) as number;
    return Math.ceil(width / fontSize) * fontSize;
};
const getNumberOfLines = (str: string, fontSize: number, width: number) => {
    // 计算⾏数
    if (!str) {
        return 0;
    }
    return Math.ceil(getStrWidth(str, fontSize) / width);
};

// 金额半角符号
export const priceUnit = '¥';

const countRecommendItemHeight = (
    item: FeedGoodsInfo,
    fontSize: number,
    width: number,
) => {
    let titleWith = width; // ⼀项宽度
    let tmpHeight = TOTAL_HEIGHT; // ⽐如⼀⾏⽂字时，⼀项的⾼度是200
    if (item?.productBizTagPositions?.payment_succeed_item_title_core) {
        // 如果title前⾯后图⽚就减去 图⽚的宽度
        const ICON_TOTAL_WIDTH =
            ((getProductIcon(
                item?.productBizTagPositions?.payment_succeed_item_title_core,
            )?.width || 0) as number) + HEAD_IMG_MARGIN_RIGHT;
        titleWith -= ICON_TOTAL_WIDTH;
    }
    let numLines = getNumberOfLines(item.productTitle, fontSize, titleWith);
    if (numLines > 1) {
        // 如果获取的是2⾏就让⾼度加上⾏⽂字的⾼度
        tmpHeight += ONE_LINE_TITLE_FONT;
    }
    return tmpHeight;
};

// 公共部分高度不计算，仅计算动态部分高度，用于双列竖直排布比较大小
const countCommonFoodsHeight = (
    productModel: FeedGoodsInfo,
    fontSize: number,
    width: number,
) => {
    // 标题部分高度
    let titleWdith = width - COMMON_CARD_CONTENT_PADDING * 2; // ⼀项宽度
    let tmpHeight = width + COMMON_CARD_PRICE_VERTICAL_MARGIN;

    // 如果title前⾯有图⽚就减去 图⽚的宽度
    if (productModel?.productBizTagPositions?.good_goods_title_core) {
        const ICON_TOTAL_WIDTH =
            ((getProductIcon(
                productModel?.productBizTagPositions?.good_goods_title_core,
            )?.width || 0) as number) + COMMON_CARD_TITLE_ICON_RIGHT_MARGIN;
        titleWdith -= ICON_TOTAL_WIDTH;
    }
    let titleStr = productModel?.productTitle;
    // 如果title前⾯有品牌就减去 品牌的间隔
    if (productModel?.brandName) {
        titleWdith -= COMMON_CARD_BRAND_LINE_HORIZONTAL_MARGIN;
        titleStr = productModel?.brandName + productModel?.productTitle;
    }
    let numLines = getNumberOfLines(titleStr, fontSize, titleWdith);
    // 第一行标题高度底部距离 + 第一行标题高度
    tmpHeight += COMMON_CARD_TITLE_LINE_HEIGHT + COMMON_CARD_TITLE_TOP_PADDING;
    if (numLines > 1) {
        // 如果获取的是2⾏就让⾼度加上⾏⽂字的⾼度
        tmpHeight += COMMON_CARD_TITLE_LINE_HEIGHT;
    }

    // 描述部分高度
    // 是否展示第二行描述信息(这一行和倒计时互斥)
    const hasDescLine =
        (productModel?.soldStock ?? -1) > 0 &&
        isNotEmptyString(productModel?.feedBackRate ?? '') &&
        !productModel?.countdownInfo;
    if (hasDescLine) {
        tmpHeight +=
            COMMON_CARD_DESC_LINE_HEIGHT + COMMON_CARD_DESC_TO_TITLE_MARGIN;
    }

    // 价格部分高度
    // 是否是日历票品
    const isTicket = productModel.itemTypeCode === ITEM_TYPE_CODE.TICKET;
    // 是否是次卡
    const isSubCard = productModel.itemTypeCode === ITEM_TYPE_CODE.TIMECARD;
    // 是否展示新人一分购
    const isNewUser = !isTicket && !isSubCard && productModel.newUser;
    if (isNewUser) {
        tmpHeight +=
            COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT +
            COMMON_CARD_PRICE_VERTICAL_MARGIN;
    } else {
        tmpHeight += COMMON_CARD_PRICE_HEIGHT + COMMON_CARD_PRICE_TOP_MARGIN;
    }

    // poi部分高度
    const hasPoi = !!productModel?.poiName;
    if (hasPoi) {
        tmpHeight += COMMON_CARD_POI_HEIGHT;
    }

    return tmpHeight;
};

const countWeeklyPromotionHeight = () => {
    return productAdapter(234);
};

// 计算高度
export const countFeedItemHeight = (
    item: any,
    fontSize: number,
    width: number,
) => {
    // 根据不同卡片类型，返回不同高度
    if (item?.type === FEED_CARD_TYPE.COMMON_GOOD_CARD) {
        return countCommonFoodsHeight(
            item?.data,
            COMMON_CARD_TITLE_FONT,
            width,
        );
    } else if (item?.type === FEED_CARD_TYPE.COMMON_GOOD_CARD) {
        return countWeeklyPromotionHeight();
    } else {
        return countRecommendItemHeight(item, fontSize, width);
    }
};
