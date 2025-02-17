/**
 * 通用商品卡
 * scene 底部推荐双列feed商品卡
 * author yiyushu
 */

import React, { memo, useCallback, useMemo } from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';
import { CommonLabels } from '@locallife/biz-component';
import { ITEM_TYPE_CODE } from '../../../constants';
import { priceUnit } from '../../../utils/utils';
import { getProductIcon } from '../../../utils/getProductIcon';
import KwaiImage from '@kds/image';
import { jumpUrl } from '@locallife/utils';
import { localLifeBizLogger } from '@locallife/log';
export const FeedRecommendItem = /*#__PURE__*/memo(({
  curItem,
  index
}) => {
  var _curItem$productBizTa2, _curItem$productBizTa3, _curItem$productBizTa4;
  /**
   * 点击上报
   * @param key 埋点key
   * @param exp 拓展埋点数据，必须是个对象！
   */
  const clickLogParam = useCallback((key, exp = {}) => {
    localLifeBizLogger.click(key, {
      poi_id: (curItem === null || curItem === void 0 ? void 0 : curItem.poiId) || '',
      item_id: (curItem === null || curItem === void 0 ? void 0 : curItem.itemId) || '',
      item_index: index + 1,
      item_name: (curItem === null || curItem === void 0 ? void 0 : curItem.productTitle) || '',
      ...exp
    });
  }, [curItem === null || curItem === void 0 ? void 0 : curItem.itemId, curItem === null || curItem === void 0 ? void 0 : curItem.poiId, curItem === null || curItem === void 0 ? void 0 : curItem.productTitle, index]);
  const handleProduction = useCallback(() => {
    clickLogParam('LOCALLIFE_COMPOSITE_GOODS_CARD');
    (curItem === null || curItem === void 0 ? void 0 : curItem.goodsHalfJumpUrl) && jumpUrl(curItem === null || curItem === void 0 ? void 0 : curItem.goodsHalfJumpUrl, 'TO_HALF_POI_PAGE');
  }, [clickLogParam, curItem === null || curItem === void 0 ? void 0 : curItem.goodsHalfJumpUrl]);

  // 点击距离跳转POI
  const handleDistanceClick = useCallback(() => {
    clickLogParam('LOCALLIFE_COMPOSITE_GOODS_CARD_POI_BUTTON');
    (curItem === null || curItem === void 0 ? void 0 : curItem.poiHalfJumpUrl) && jumpUrl(curItem === null || curItem === void 0 ? void 0 : curItem.poiHalfJumpUrl, 'TO_POI');
  }, [clickLogParam, curItem === null || curItem === void 0 ? void 0 : curItem.poiHalfJumpUrl]);
  const productIcon = useMemo(() => {
    var _curItem$productBizTa;
    return getProductIcon(curItem === null || curItem === void 0 || (_curItem$productBizTa = curItem.productBizTagPositions) === null || _curItem$productBizTa === void 0 ? void 0 : _curItem$productBizTa.payment_succeed_item_title_core);
  }, [curItem === null || curItem === void 0 || (_curItem$productBizTa2 = curItem.productBizTagPositions) === null || _curItem$productBizTa2 === void 0 ? void 0 : _curItem$productBizTa2.payment_succeed_item_title_core]);

  // 是否是日历票品
  const isTicket = useMemo(() => {
    return (curItem === null || curItem === void 0 ? void 0 : curItem.itemTypeCode) === ITEM_TYPE_CODE.TICKET;
  }, [curItem === null || curItem === void 0 ? void 0 : curItem.itemTypeCode]);
  // 是否是次卡
  const isSubCard = useMemo(() => {
    return (curItem === null || curItem === void 0 ? void 0 : curItem.itemTypeCode) === ITEM_TYPE_CODE.TIMECARD;
  }, [curItem === null || curItem === void 0 ? void 0 : curItem.itemTypeCode]);

  // 折扣价(discountPrice)为兜底的市场价(originPrice)时、当为次卡时 均不显示市场价（originPrice）、当为日历票时也不展示
  const isShowOriginPrice = useMemo(() => {
    return Number(curItem === null || curItem === void 0 ? void 0 : curItem.originPrice) > Number(curItem === null || curItem === void 0 ? void 0 : curItem.discountPrice) && !isSubCard && !isTicket;
  }, [curItem === null || curItem === void 0 ? void 0 : curItem.originPrice, curItem === null || curItem === void 0 ? void 0 : curItem.discountPrice, isSubCard, isTicket]);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.recommendItem
  }, /*#__PURE__*/React.createElement(TouchableOpacity, {
    activeOpacity: 1,
    onPress: handleProduction
  }, /*#__PURE__*/React.createElement(KwaiImage, {
    style: styles.head,
    source: {
      uri: curItem.coverUrl
    },
    resizeMode: 'cover'
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.flex],
    numberOfLines: 2
  }, !!(productIcon !== null && productIcon !== void 0 && productIcon.url) && /*#__PURE__*/React.createElement(KwaiImage, {
    resizeMode: 'cover',
    style: [styles.icon, {
      width: productIcon === null || productIcon === void 0 ? void 0 : productIcon.width,
      height: productIcon === null || productIcon === void 0 ? void 0 : productIcon.height
    }],
    source: {
      uri: productIcon === null || productIcon === void 0 ? void 0 : productIcon.url
    }
  }), !!(productIcon !== null && productIcon !== void 0 && productIcon.url) && Platform.OS === 'android' && /*#__PURE__*/React.createElement(Text, {
    style: styles.txt
  }, "\xA0"), /*#__PURE__*/React.createElement(Text, {
    style: styles.titleInfo
  }, curItem === null || curItem === void 0 ? void 0 : curItem.productTitle)), /*#__PURE__*/React.createElement(View, {
    style: [styles.flex, styles.priceInfo]
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.discountPrice
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.unit
  }, priceUnit), curItem.discountPrice, /*#__PURE__*/React.createElement(Text, {
    style: styles.secondaryCardTimes
  }, isSubCard ? `/${curItem.secondaryCardTimes}次` : isTicket ? '起' : '')), !!(curItem !== null && curItem !== void 0 && (_curItem$productBizTa3 = curItem.productBizTagPositions) !== null && _curItem$productBizTa3 !== void 0 && _curItem$productBizTa3.payment_succeed_item_price_right) && /*#__PURE__*/React.createElement(CommonLabels, {
    bizTags: curItem === null || curItem === void 0 || (_curItem$productBizTa4 = curItem.productBizTagPositions) === null || _curItem$productBizTa4 === void 0 ? void 0 : _curItem$productBizTa4.payment_succeed_item_price_right,
    containerStyle: styles.priceMark,
    autoCut: false
  }), isShowOriginPrice ? /*#__PURE__*/React.createElement(View, {
    style: styles.originPriceInfo
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.originPrice
  }, priceUnit, curItem.originPrice)) : null))), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: [styles.poi, styles.flex],
    onPress: handleDistanceClick
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.flex, styles.poiInfo]
  }, /*#__PURE__*/React.createElement(Image, {
    style: styles.poiIcon,
    source: {
      uri: 'https://s2-10833.kwimgs.com/kos/nlav10833/ll-transaction/static/transaction/img/poi-icon.962351164b4b18e8.png'
    }
  }), /*#__PURE__*/React.createElement(Text, {
    style: [styles.poiTxt, styles.poiName],
    numberOfLines: 1
  }, curItem.poiName)), !!curItem.distanceText && /*#__PURE__*/React.createElement(Text, {
    style: [styles.poiTxt]
  }, curItem.distanceText)));
});
//# sourceMappingURL=index.js.map