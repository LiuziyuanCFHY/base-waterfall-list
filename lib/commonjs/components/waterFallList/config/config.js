"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rightKey = exports.leftKey = exports.WEEKLY_PROMOTION_HEIGHT = exports.WEEKLY_PRODUCT_SIZE = exports.WEEKLY_PRODUCT_MARGIN = exports.WEEKLY_ARROW_URL = exports.TOTAL_HEIGHT = exports.TITLE_LINE_HEIGHT = exports.TITLE_FONT_SIZE = exports.PROUDUCT_DISTANCE = exports.PRICE_INFO_MARGIN_TOP = exports.POI_PADDING_TOP = exports.POI_PADDING_BOTTOM = exports.ONE_LINE_TITLE_FONT = exports.MAX_PRICE_LINE_HEIGHT = exports.MAX_PRICE_FONT_SIZE = exports.MAX_PRICE = exports.MAX_POI_LINE_HEIGHT = exports.MAX_POI_FONT_SIZE = exports.MAX_POI = exports.HEAD_IMG_MARGIN_RIGHT = exports.HEAD_IMG_HEIGHT = exports.GOOD_CARD_WIDTH = exports.DEFAULT_PADDING = exports.COMMON_CARD_TITLE_TOP_PADDING = exports.COMMON_CARD_TITLE_LINE_HEIGHT = exports.COMMON_CARD_TITLE_ICON_RIGHT_MARGIN = exports.COMMON_CARD_TITLE_FONT = exports.COMMON_CARD_PRICE_VERTICAL_MARGIN = exports.COMMON_CARD_PRICE_TOP_MARGIN = exports.COMMON_CARD_PRICE_HEIGHT = exports.COMMON_CARD_POI_HEIGHT = exports.COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT = exports.COMMON_CARD_FONT_SIZE_22 = exports.COMMON_CARD_FONT_SIZE_18 = exports.COMMON_CARD_FONT_SIZE_16 = exports.COMMON_CARD_FONT_SIZE_15 = exports.COMMON_CARD_FONT_SIZE_14 = exports.COMMON_CARD_FONT_SIZE_13 = exports.COMMON_CARD_FONT_SIZE_12 = exports.COMMON_CARD_FONT_SIZE_11 = exports.COMMON_CARD_FONT_SIZE_10 = exports.COMMON_CARD_DESC_TO_TITLE_MARGIN = exports.COMMON_CARD_DESC_LINE_HEIGHT = exports.COMMON_CARD_CONTENT_PADDING = exports.COMMON_CARD_BRAND_LINE_HORIZONTAL_MARGIN = void 0;
var _utils = require("../../../utils/utils");
// 猜你喜欢商品卡片宽度
const GOOD_CARD_WIDTH = exports.GOOD_CARD_WIDTH = (0, _utils.productAdapter)(192);
// 商品图片距离右边的间距
const HEAD_IMG_MARGIN_RIGHT = exports.HEAD_IMG_MARGIN_RIGHT = (0, _utils.productAdapter)(4);
// 商品图片高度
const HEAD_IMG_HEIGHT = exports.HEAD_IMG_HEIGHT = (0, _utils.productAdapter)(144);
// 商品标题上下间距
const PROUDUCT_DISTANCE = exports.PROUDUCT_DISTANCE = (0, _utils.productAdapter)(8);
// 商品标题字体大小（一行）
const TITLE_FONT_SIZE = exports.TITLE_FONT_SIZE = (0, _utils.productAdapter)(14);
// 商品标题间距（一行）注意此处修改行高时需要看下dealData和updateHeight中的高度
const TITLE_LINE_HEIGHT = exports.TITLE_LINE_HEIGHT = (0, _utils.productAdapter)(3);

// 一行商品标题 字体大小+间距
const ONE_LINE_TITLE_FONT = exports.ONE_LINE_TITLE_FONT = TITLE_FONT_SIZE + TITLE_LINE_HEIGHT;
// 最大价格字体大小
const MAX_PRICE_FONT_SIZE = exports.MAX_PRICE_FONT_SIZE = (0, _utils.productAdapter)(20);
// 最大价格字体上下间距
const MAX_PRICE_LINE_HEIGHT = exports.MAX_PRICE_LINE_HEIGHT = (0, _utils.productAdapter)(4);
// 一行价格字体 字体大小+间距
const MAX_PRICE = exports.MAX_PRICE = MAX_PRICE_FONT_SIZE + MAX_PRICE_LINE_HEIGHT;
// 价格距离顶部的距离
const PRICE_INFO_MARGIN_TOP = exports.PRICE_INFO_MARGIN_TOP = (0, _utils.productAdapter)(6);
// POI上间距
const POI_PADDING_TOP = exports.POI_PADDING_TOP = (0, _utils.productAdapter)(10);
// POI下间距
const POI_PADDING_BOTTOM = exports.POI_PADDING_BOTTOM = (0, _utils.productAdapter)(14);
// 最大poi字体
const MAX_POI_FONT_SIZE = exports.MAX_POI_FONT_SIZE = (0, _utils.productAdapter)(12);
// 最大poi字体间距
const MAX_POI_LINE_HEIGHT = exports.MAX_POI_LINE_HEIGHT = (0, _utils.productAdapter)(4);
// 一行最大poi 字体大小+间距
const MAX_POI = exports.MAX_POI = MAX_POI_FONT_SIZE + MAX_POI_LINE_HEIGHT;
const DEFAULT_PADDING = exports.DEFAULT_PADDING = (0, _utils.productAdapter)(11);

// 卡片总高度
const TOTAL_HEIGHT = exports.TOTAL_HEIGHT = HEAD_IMG_HEIGHT + PROUDUCT_DISTANCE * 2 + ONE_LINE_TITLE_FONT + MAX_PRICE + PRICE_INFO_MARGIN_TOP + POI_PADDING_TOP + POI_PADDING_BOTTOM + MAX_POI;
// 左瀑布流key
const leftKey = exports.leftKey = 'left';
// 右瀑布流key
const rightKey = exports.rightKey = 'right';
const COMMON_CARD_FONT_SIZE_22 = exports.COMMON_CARD_FONT_SIZE_22 = (0, _utils.productAdapter)(22);
const COMMON_CARD_FONT_SIZE_18 = exports.COMMON_CARD_FONT_SIZE_18 = (0, _utils.productAdapter)(18);
const COMMON_CARD_FONT_SIZE_16 = exports.COMMON_CARD_FONT_SIZE_16 = (0, _utils.productAdapter)(16);
const COMMON_CARD_FONT_SIZE_15 = exports.COMMON_CARD_FONT_SIZE_15 = (0, _utils.productAdapter)(15);
const COMMON_CARD_FONT_SIZE_14 = exports.COMMON_CARD_FONT_SIZE_14 = (0, _utils.productAdapter)(14);
const COMMON_CARD_FONT_SIZE_13 = exports.COMMON_CARD_FONT_SIZE_13 = (0, _utils.productAdapter)(13);
const COMMON_CARD_FONT_SIZE_12 = exports.COMMON_CARD_FONT_SIZE_12 = (0, _utils.productAdapter)(12);
const COMMON_CARD_FONT_SIZE_11 = exports.COMMON_CARD_FONT_SIZE_11 = (0, _utils.productAdapter)(11);
const COMMON_CARD_FONT_SIZE_10 = exports.COMMON_CARD_FONT_SIZE_10 = (0, _utils.productAdapter)(10);
const WEEKLY_PROMOTION_HEIGHT = exports.WEEKLY_PROMOTION_HEIGHT = (0, _utils.productAdapter)(60);
const WEEKLY_PRODUCT_MARGIN = exports.WEEKLY_PRODUCT_MARGIN = (0, _utils.productAdapter)(6);
const WEEKLY_PRODUCT_SIZE = exports.WEEKLY_PRODUCT_SIZE = (0, _utils.productAdapter)(58);
const COMMON_CARD_CONTENT_PADDING = exports.COMMON_CARD_CONTENT_PADDING = (0, _utils.productAdapter)(6);

// 通用商品卡标题的高度
const COMMON_CARD_TITLE_LINE_HEIGHT = exports.COMMON_CARD_TITLE_LINE_HEIGHT = (0, _utils.productAdapter)(16);
// 标题顶部间距
const COMMON_CARD_TITLE_TOP_PADDING = exports.COMMON_CARD_TITLE_TOP_PADDING = (0, _utils.productAdapter)(7);
const COMMON_CARD_TITLE_FONT = exports.COMMON_CARD_TITLE_FONT = COMMON_CARD_FONT_SIZE_13;
// 通用商品卡标题行图片右侧间距
const COMMON_CARD_TITLE_ICON_RIGHT_MARGIN = exports.COMMON_CARD_TITLE_ICON_RIGHT_MARGIN = (0, _utils.productAdapter)(6);
// 通用商品卡品牌分割线左右间距
const COMMON_CARD_BRAND_LINE_HORIZONTAL_MARGIN = exports.COMMON_CARD_BRAND_LINE_HORIZONTAL_MARGIN = (0, _utils.productAdapter)(4);
// 通用商品卡描述行的高度
const COMMON_CARD_DESC_LINE_HEIGHT = exports.COMMON_CARD_DESC_LINE_HEIGHT = (0, _utils.productAdapter)(16);
// 通用商品卡描述与标题的竖直间距
const COMMON_CARD_DESC_TO_TITLE_MARGIN = exports.COMMON_CARD_DESC_TO_TITLE_MARGIN = (0, _utils.productAdapter)(4);
// 通用商品卡poi区域高度
const COMMON_CARD_POI_HEIGHT = exports.COMMON_CARD_POI_HEIGHT = (0, _utils.productAdapter)(28);
// 通用商品卡新人一分购区域高度
const COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT = exports.COMMON_CARD_NEW_USER_ONE_CENT_HEIGHT = (0, _utils.productAdapter)(32);
// 通用商品卡普通价格区域高度
const COMMON_CARD_PRICE_HEIGHT = exports.COMMON_CARD_PRICE_HEIGHT = (0, _utils.productAdapter)(20);
// 通用商品卡价格与上下内容间距
const COMMON_CARD_PRICE_VERTICAL_MARGIN = exports.COMMON_CARD_PRICE_VERTICAL_MARGIN = (0, _utils.productAdapter)(6);
// 通用商品卡价格与上边内容间距（为了解决小米上行高不足问题，所以单独设置以下字段）
const COMMON_CARD_PRICE_TOP_MARGIN = exports.COMMON_CARD_PRICE_TOP_MARGIN = (0, _utils.productAdapter)(4);
const WEEKLY_ARROW_URL = exports.WEEKLY_ARROW_URL = 'https://s2-11289.kwimgs.com/kos/nlav11289/1/local_life_locallife_small_entrance_arrow_cdn.png';
//# sourceMappingURL=config.js.map