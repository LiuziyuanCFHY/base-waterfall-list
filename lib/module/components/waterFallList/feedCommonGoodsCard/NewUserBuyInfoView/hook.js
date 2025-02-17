export const ButInfoViewPriceType = {
  Normal: 'Normal',
  NormalNoOriginPrice: 'NormalNoOriginPrice',
  Medium: 'Medium',
  Small: 'Small',
  SmallLess: 'SmallLess'
};
export const useBuyInfoSaleCount = saleCount => {
  let saleCountStr = '商品热卖';
  const count = saleCount ?? 0;
  if (count < 100) {
    saleCountStr = '商品热卖';
  } else if (count >= 100 && count < 10000) {
    saleCountStr = '已抢' + String(count);
  } else if (count >= 10000) {
    saleCountStr = '已抢' + (Math.round(count / 1000) / 10).toFixed(0) + '万+';
  }
  return saleCountStr;
};
export function removeEndValue(value) {
  if (value.endsWith('.0')) {
    return value.replace('.0', '');
  }
  return value;
}
export function calculateSoldCount(value) {
  const realVal = Number(value);
  if (realVal < 10000) {
    return '已售' + realVal.toString();
  }
  if (realVal < 99999500) {
    const val = (Math.round(realVal / 1000) / 10).toFixed(1);
    return `已售${removeEndValue(val.toString())}万`;
  }
  const val = (Math.round(realVal / 10000000) / 10).toFixed(1);
  return `已抢${removeEndValue(val.toString())}亿`;
}
//# sourceMappingURL=hook.js.map