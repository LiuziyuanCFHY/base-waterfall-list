import React, { useCallback } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import { LocalLifeImage } from '@locallife/base-image';
import { DotDecreasePrice } from '@locallife/biz-component';
import { priceUnit } from '../../../../utils/utils';
function WeeklyProduct({
  data,
  onProductPress
}) {
  const onPress = useCallback(() => {
    if (onProductPress) {
      onProductPress();
    }
  }, [onProductPress]);
  return /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: onPress
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(LocalLifeImage, {
    sceneType: 'WeeklyProduct',
    style: styles.coverImage,
    source: {
      uri: data === null || data === void 0 ? void 0 : data.coverUrl
    },
    resizeMode: 'cover'
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.rightContent
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.productTitle,
    numberOfLines: 1
  }, data === null || data === void 0 ? void 0 : data.productTitle), /*#__PURE__*/React.createElement(View, {
    style: styles.priceContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.pricePrefix,
    numberOfLines: 1
  }, priceUnit), /*#__PURE__*/React.createElement(DotDecreasePrice, {
    price: (data === null || data === void 0 ? void 0 : data.discountPrice) ?? '',
    firstPriceStyle: styles.firstPriceText,
    dotSecondPriceStyle: styles.secondPriceText
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.originPrice,
    numberOfLines: 1
  }, data === null || data === void 0 ? void 0 : data.originPriceText)))));
}
export default /*#__PURE__*/React.memo(WeeklyProduct);
//# sourceMappingURL=index.js.map