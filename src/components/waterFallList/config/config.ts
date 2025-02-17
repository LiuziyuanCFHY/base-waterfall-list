import { productAdapter } from '../../../utils/utils';

// 猜你喜欢商品卡片宽度
export const GOOD_CARD_WIDTH = productAdapter(192);
// 商品图片距离右边的间距
export const HEAD_IMG_MARGIN_RIGHT = productAdapter(4);
// 商品图片高度
export const HEAD_IMG_HEIGHT = productAdapter(144);
// 商品标题上下间距
export const PROUDUCT_DISTANCE = productAdapter(8);
// 商品标题字体大小（一行）
export const TITLE_FONT_SIZE = productAdapter(14);
// 商品标题间距（一行）注意此处修改行高时需要看下dealData和updateHeight中的高度
export const TITLE_LINE_HEIGHT = productAdapter(3);

// 一行商品标题 字体大小+间距
export const ONE_LINE_TITLE_FONT = TITLE_FONT_SIZE + TITLE_LINE_HEIGHT;
// 最大价格字体大小
export const MAX_PRICE_FONT_SIZE = productAdapter(20);
// 最大价格字体上下间距
export const MAX_PRICE_LINE_HEIGHT = productAdapter(4);
// 一行价格字体 字体大小+间距
export const MAX_PRICE = MAX_PRICE_FONT_SIZE + MAX_PRICE_LINE_HEIGHT;
// 价格距离顶部的距离
export const PRICE_INFO_MARGIN_TOP = productAdapter(6);
// POI上间距
export const POI_PADDING_TOP = productAdapter(10);
// POI下间距
export const POI_PADDING_BOTTOM = productAdapter(14);
// 最大poi字体
export const MAX_POI_FONT_SIZE = productAdapter(12);
// 最大poi字体间距
export const MAX_POI_LINE_HEIGHT = productAdapter(4);
// 一行最大poi 字体大小+间距
export const MAX_POI = MAX_POI_FONT_SIZE + MAX_POI_LINE_HEIGHT;

export const DEFAULT_PADDING = productAdapter(11);

// 卡片总高度
export const TOTAL_HEIGHT =
    HEAD_IMG_HEIGHT +
    PROUDUCT_DISTANCE * 2 +
    ONE_LINE_TITLE_FONT +
    MAX_PRICE +
    PRICE_INFO_MARGIN_TOP +
    POI_PADDING_TOP +
    POI_PADDING_BOTTOM +
    MAX_POI;
// 左瀑布流key
export const leftKey = 'left';
// 右瀑布流key
export const rightKey = 'right';

export const COMMON_CARD_FONT_SIZE_22 = productAdapter(22);
export const COMMON_CARD_FONT_SIZE_18 = productAdapter(18);
export const COMMON_CARD_FONT_SIZE_16 = productAdapter(16);
export const COMMON_CARD_FONT_SIZE_15 = productAdapter(15);
export const COMMON_CARD_FONT_SIZE_14 = productAdapter(14);
export const COMMON_CARD_FONT_SIZE_13 = productAdapter(13);
export const COMMON_CARD_FONT_SIZE_12 = productAdapter(12);
export const COMMON_CARD_FONT_SIZE_11 = productAdapter(11);
export const COMMON_CARD_FONT_SIZE_10 = productAdapter(10);
export const WEEKLY_PROMOTION_HEIGHT = productAdapter(60);

export const WEEKLY_PRODUCT_MARGIN = productAdapter(6);
export const WEEKLY_PRODUCT_SIZE = productAdapter(58);
export const COMMON_CARD_CONTENT_PADDING = productAdapter(6);

// 通用商品卡标题的高度
export const COMMON_CARD_TITLE_LINE_HEIGHT = productAdapter(16);
// 标题顶部间距
export const COMMON_CARD_TITLE_TOP_PADDING = productAdapter(7);
export const COMMON_CARD_TITLE_FONT = COMMON_CARD_FONT_SIZE_13;
// 通用商品卡标题行图片右侧间距
export const COMMON_CARD_TITLE_ICON_RIGHT_MARGIN = productAdapter(6);
// 通用商品卡品牌分割线左右间距
export const COMMON_CARD_BRAND_LINE_HORIZONTAL_MARGIN = productAdapter(4);
// 通用商品卡描述行的高度
export const COMMON_CARD_DESC_LINE_HEIGHT = productAdapter(16);
// 通用商品卡描述与标题的竖直间距
export const COMMON_CARD_DESC_TO_TITLE_MARGIN = productAdapter(4);
// 通用商品卡poi区域高度
export const COMMON_CARD_POI_HEIGHT = productAdapter(28);
// 通用商品卡新人一分购区域高度
export const COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT = productAdapter(32);
// 通用商品卡普通价格区域高度
export const COMMON_CARD_PRICE_HEIGHT = productAdapter(20);
// 通用商品卡价格与上下内容间距
export const COMMON_CARD_PRICE_VERTICAL_MARGIN = productAdapter(6);
// 通用商品卡价格与上边内容间距（为了解决小米上行高不足问题，所以单独设置以下字段）
export const COMMON_CARD_PRICE_TOP_MARGIN = productAdapter(4);
export const WEEKLY_ARROW_URL =
    'https://s2-11289.kwimgs.com/kos/nlav11289/1/local_life_locallife_small_entrance_arrow_cdn.png';
