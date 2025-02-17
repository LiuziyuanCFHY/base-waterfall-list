export interface WeeklyProductModel {
    itemId: string;
    coverUrl: string;
    productTitle: string;
    discountPrice: string;
    originPrice: string;
    originPriceText: string;
}
export interface WeeklyPromotionCarouselModel {
    carouselList: Array<WeeklyPromotionModel>;
}
export interface WeeklyPromotionModel {
    title: string;
    subTitle: string;
    backgroundImage: string;
    backgroundColorMin: string;
    backgroundColorMax: string;
    jumpUrl: string;
    products: Array<WeeklyProductModel>;
}
