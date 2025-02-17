import React from 'react';
import { Text, View } from 'react-native';
import KwaiImage from '@kds/image';
import styles from './styles';
import { CommonLabels, ShowWithData } from '@locallife/biz-component';
export const DistanceLabel = /*#__PURE__*/React.memo(({
  goodsInfo
}) => {
  var _goodsInfo$productBiz, _goodsInfo$productBiz2, _goodsInfo$productBiz3;
  const locationIconUrl = 'https://s2-11289.kwimgs.com/kos/nlav11289/1/local_life_locallife_coordinate_icon_cdn.png';

  // 是否展示距离
  const showDistance = !!(goodsInfo !== null && goodsInfo !== void 0 && goodsInfo.distanceText);
  // 是否展示通用标签
  const showCommonLabel = !!(goodsInfo !== null && goodsInfo !== void 0 && (_goodsInfo$productBiz = goodsInfo.productBizTagPositions) !== null && _goodsInfo$productBiz !== void 0 && _goodsInfo$productBiz.good_goods_img_bottom);
  // 是否展示分割线
  const showLine = showDistance && showCommonLabel;
  // 是否展示本组件
  const show = showDistance || showCommonLabel;
  return /*#__PURE__*/React.createElement(ShowWithData, {
    data: show
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.distanceLabel
  }, /*#__PURE__*/React.createElement(ShowWithData, {
    data: showDistance
  }, /*#__PURE__*/React.createElement(KwaiImage, {
    resizeMode: "cover",
    source: {
      uri: locationIconUrl
    },
    style: [styles.distanceIcon]
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.distanceText,
    numberOfLines: 1
  }, goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.distanceText)), /*#__PURE__*/React.createElement(ShowWithData, {
    data: showLine
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.line]
  })), !!(goodsInfo !== null && goodsInfo !== void 0 && (_goodsInfo$productBiz2 = goodsInfo.productBizTagPositions) !== null && _goodsInfo$productBiz2 !== void 0 && _goodsInfo$productBiz2.good_goods_img_bottom) && /*#__PURE__*/React.createElement(CommonLabels, {
    bizTags: goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz3 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz3 === void 0 ? void 0 : _goodsInfo$productBiz3.good_goods_img_bottom
    // containerStyle={}
    ,
    autoCut: false
  })));
});
//# sourceMappingURL=index.js.map