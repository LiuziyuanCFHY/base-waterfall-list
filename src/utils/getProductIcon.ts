import { productAdapter } from './utils';
// 获取大家还喜欢左边图片尺寸及链接
export const getProductIcon = (iconObj) => {
    try {
        if (!iconObj) {
            return;
        }
        const Icon = JSON.parse(iconObj?.[0]?.content).iconInfos?.[0];
        return {
            url: Icon?.iconUrls?.[0]?.url,
            width: productAdapter(Number(Icon?.iconStyle?.iconWidth) || 42),
            height: productAdapter(Number(Icon?.iconStyle?.iconHeight) || 15),
        };
    } catch (error) {
        return;
    }
};
