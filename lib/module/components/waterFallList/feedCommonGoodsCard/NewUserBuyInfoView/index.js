import React from 'react';
import { Text, View } from 'react-native';
import { LocalLifeImage } from '@locallife/base-image';
import { DotDecreasePrice, ShowWithData } from '@locallife/biz-component';
import styles from './styles';
export const NewUserBuyInfoView = /*#__PURE__*/React.memo(({
  productInfo
}) => {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.leftContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.priceInfoContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.priceUnit
  }, "\xA5"), /*#__PURE__*/React.createElement(DotDecreasePrice, {
    price: productInfo.discountPrice ?? '',
    firstPriceStyle: styles.firstPriceFontStyle,
    dotSecondPriceStyle: styles.firstPriceFontStyle
  }), /*#__PURE__*/React.createElement(ShowWithData, {
    data: productInfo === null || productInfo === void 0 ? void 0 : productInfo.priceSuffix
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.priceSuffix
  }, productInfo === null || productInfo === void 0 ? void 0 : productInfo.priceSuffix))), /*#__PURE__*/React.createElement(ShowWithData, {
    data: productInfo === null || productInfo === void 0 ? void 0 : productInfo.originPriceText
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.originPrice
  }, productInfo === null || productInfo === void 0 ? void 0 : productInfo.originPriceText))), /*#__PURE__*/React.createElement(LocalLifeImage, {
    style: styles.qiangButton,
    source: {
      uri: productInfo === null || productInfo === void 0 ? void 0 : productInfo.buyUrl
    },
    resizeMode: 'cover',
    sceneType: 'NewUserBuyInfoView'
  }));
});
//# sourceMappingURL=index.js.map