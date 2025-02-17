/**
 * 通用商品卡
 * scene 团购优惠底部双列feed新商品卡
 * author liyi33
 */
import React, { memo, useCallback, useMemo, useState } from 'react';
import { Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import styles from './style';
import { CommonLabels, ShowWithData } from '@locallife/biz-component';
import KwaiImage from '@kds/image';
import { isNotEmptyString, jumpUrl } from '@locallife/utils';
import { useTextLineHook } from '../hook/hooks';
import CountDownContainer from './countDownContainer';
import { NewUserBuyInfoView } from './NewUserBuyInfoView';
import { PoiInfoView } from './PoiInfoView';
import { DistanceLabel } from './DistanceLabel';
import { PriceView } from './PriceView';
import { calculateSoldCount } from './NewUserBuyInfoView/hook';
import { ITEM_TYPE_CODE } from '../../../constants';
export const FeedCommonGoodsCard = /*#__PURE__*/memo(({
  curItem,
  index,
  onItemClick,
  cardWidth
}) => {
  var _productModel$product;
  const productModel = (curItem === null || curItem === void 0 ? void 0 : curItem.data) ?? {};
  // 倒计时是否结束
  const [countDownEnd, setCountDownEnd] = useState(false);
  const handleProduction = useCallback(() => {
    if (onItemClick) {
      onItemClick(curItem, index);
    }
    (productModel === null || productModel === void 0 ? void 0 : productModel.goodsJumpUrl) && jumpUrl(productModel === null || productModel === void 0 ? void 0 : productModel.goodsJumpUrl, 'TO_HALF_POI_PAGE');
  }, [curItem, index, onItemClick, productModel === null || productModel === void 0 ? void 0 : productModel.goodsJumpUrl]);
  const handlePoi = useCallback(() => {
    if (onItemClick) {
      const item = {
        ...curItem,
        iSClickPoi: true
      };
      onItemClick(item, index);
    }
    (productModel === null || productModel === void 0 ? void 0 : productModel.poiJumpUrl) && jumpUrl(productModel === null || productModel === void 0 ? void 0 : productModel.poiJumpUrl, 'TO_POI');
  }, [curItem, index, onItemClick, productModel === null || productModel === void 0 ? void 0 : productModel.poiJumpUrl]);
  const {
    titleInfo,
    onTextLayout
  } = useTextLineHook(productModel === null || productModel === void 0 ? void 0 : productModel.productTitle);

  // 倒计时结束的回调
  const countDownEndCallback = useCallback(() => {
    setCountDownEnd(true);
  }, []);

  // 是否是日历票品
  const isTicket = useMemo(() => {
    return (productModel === null || productModel === void 0 ? void 0 : productModel.itemTypeCode) === ITEM_TYPE_CODE.TICKET;
  }, [productModel === null || productModel === void 0 ? void 0 : productModel.itemTypeCode]);
  // 是否是次卡
  const isSubCard = useMemo(() => {
    return (productModel === null || productModel === void 0 ? void 0 : productModel.itemTypeCode) === ITEM_TYPE_CODE.TIMECARD;
  }, [productModel === null || productModel === void 0 ? void 0 : productModel.itemTypeCode]);
  // 是否展示倒计时
  const showCountDown = !countDownEnd && (productModel === null || productModel === void 0 ? void 0 : productModel.countdownInfo);

  // 是否展示第二行描述信息(这一行和倒计时互斥)
  const hasDescLine = ((productModel === null || productModel === void 0 ? void 0 : productModel.soldStock) ?? -1) > 0 && isNotEmptyString((productModel === null || productModel === void 0 ? void 0 : productModel.feedBackRate) ?? '') && !(productModel !== null && productModel !== void 0 && productModel.countdownInfo);

  // 优先级： 日历票、次卡 > 新人> 正常样式
  // 是否展示新人
  const isNewUser = !isTicket && !isSubCard && (productModel === null || productModel === void 0 ? void 0 : productModel.newUser);
  return /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
    onPress: handleProduction
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.container
  }, /*#__PURE__*/React.createElement(KwaiImage, {
    style: styles.coverImage,
    source: {
      uri: productModel === null || productModel === void 0 ? void 0 : productModel.coverUrl
    },
    resizeMode: 'cover'
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.coverBottomContent
  }, /*#__PURE__*/React.createElement(DistanceLabel, {
    goodsInfo: productModel
  }), /*#__PURE__*/React.createElement(ShowWithData, {
    data: showCountDown
  }, /*#__PURE__*/React.createElement(CountDownContainer, {
    data: productModel,
    end: countDownEndCallback
  })))), /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.firstLine
  }, /*#__PURE__*/React.createElement(CommonLabels, {
    bizTags: (productModel === null || productModel === void 0 || (_productModel$product = productModel.productBizTagPositions) === null || _productModel$product === void 0 ? void 0 : _productModel$product.good_goods_title_core) ?? [],
    adaptScreen: false,
    autoCut: false,
    containerStyle: styles.labelStyle
  }), /*#__PURE__*/React.createElement(ShowWithData, {
    data: isNotEmptyString((productModel === null || productModel === void 0 ? void 0 : productModel.brandName) ?? '')
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.brandText,
    numberOfLines: 1
  }, productModel === null || productModel === void 0 ? void 0 : productModel.brandName), /*#__PURE__*/React.createElement(View, {
    style: styles.verLine
  })), /*#__PURE__*/React.createElement(Text, {
    style: styles.titleContainer
    // @ts-ignore
    ,
    onTextLayout: onTextLayout,
    numberOfLines: titleInfo.lineNumber
  }, titleInfo.firstLine)), /*#__PURE__*/React.createElement(ShowWithData, {
    data: isNotEmptyString(titleInfo.nextLine)
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.nextLine,
    numberOfLines: 1
  }, titleInfo.nextLine)), /*#__PURE__*/React.createElement(ShowWithData, {
    data: hasDescLine
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.descContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.feedBackRate,
    numberOfLines: 1
  }, productModel === null || productModel === void 0 ? void 0 : productModel.feedBackRate), /*#__PURE__*/React.createElement(Text, {
    style: styles.soldStock,
    numberOfLines: 1
  }, calculateSoldCount(productModel === null || productModel === void 0 ? void 0 : productModel.soldStock)))), /*#__PURE__*/React.createElement(ShowWithData, {
    data: isNewUser
  }, /*#__PURE__*/React.createElement(NewUserBuyInfoView, {
    productInfo: productModel
  })), /*#__PURE__*/React.createElement(ShowWithData, {
    data: !isNewUser
  }, /*#__PURE__*/React.createElement(PriceView, {
    goodsInfo: productModel,
    maxWidth: cardWidth
  })), /*#__PURE__*/React.createElement(ShowWithData, {
    data: productModel === null || productModel === void 0 ? void 0 : productModel.poiName
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: handlePoi
  }, /*#__PURE__*/React.createElement(PoiInfoView, {
    goodsInfo: productModel
  }))))));
});
//# sourceMappingURL=index.js.map