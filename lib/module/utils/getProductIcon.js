import { productAdapter } from './utils';
// 获取大家还喜欢左边图片尺寸及链接
export const getProductIcon = iconObj => {
  try {
    var _JSON$parse$iconInfos, _iconObj$, _Icon$iconUrls, _Icon$iconStyle, _Icon$iconStyle2;
    if (!iconObj) {
      return;
    }
    const Icon = (_JSON$parse$iconInfos = JSON.parse(iconObj === null || iconObj === void 0 || (_iconObj$ = iconObj[0]) === null || _iconObj$ === void 0 ? void 0 : _iconObj$.content).iconInfos) === null || _JSON$parse$iconInfos === void 0 ? void 0 : _JSON$parse$iconInfos[0];
    return {
      url: Icon === null || Icon === void 0 || (_Icon$iconUrls = Icon.iconUrls) === null || _Icon$iconUrls === void 0 || (_Icon$iconUrls = _Icon$iconUrls[0]) === null || _Icon$iconUrls === void 0 ? void 0 : _Icon$iconUrls.url,
      width: productAdapter(Number(Icon === null || Icon === void 0 || (_Icon$iconStyle = Icon.iconStyle) === null || _Icon$iconStyle === void 0 ? void 0 : _Icon$iconStyle.iconWidth) || 42),
      height: productAdapter(Number(Icon === null || Icon === void 0 || (_Icon$iconStyle2 = Icon.iconStyle) === null || _Icon$iconStyle2 === void 0 ? void 0 : _Icon$iconStyle2.iconHeight) || 15)
    };
  } catch (error) {
    return;
  }
};
//# sourceMappingURL=getProductIcon.js.map