import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import KwaiImage from '@kds/image';
import { ShowWithData } from '@locallife/biz-component';
export const PoiInfoView = /*#__PURE__*/React.memo(({
  goodsInfo
}) => {
  return /*#__PURE__*/React.createElement(View, {
    style: styles.shopInfoLineContainer
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.shopInfoContainer
  }, /*#__PURE__*/React.createElement(KwaiImage, {
    resizeMode: "cover",
    source: {
      uri: goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.shopLightIcon
    },
    style: [styles.shopIcon]
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.subTitle,
    numberOfLines: 1
  }, (goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.poiName) ?? '')), /*#__PURE__*/React.createElement(ShowWithData, {
    data: goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.shopArrowIcon
  }, /*#__PURE__*/React.createElement(KwaiImage, {
    resizeMode: "cover",
    source: {
      uri: goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.shopArrowIcon
    },
    style: [styles.arrowIcon]
  })));
});
//# sourceMappingURL=index.js.map