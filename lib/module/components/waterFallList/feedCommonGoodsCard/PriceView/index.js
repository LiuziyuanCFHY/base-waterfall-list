import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { CommonLabelArray, DotDecreasePrice, ShowWithData } from '@locallife/biz-component';
import { ITEM_TYPE_CODE } from '../../../../constants';
import styles from './styles';
import { priceUnit } from '../../../../utils/utils';
import { isIOS } from '@locallife/utils';
import { get414Px, rem } from '@locallife/design-base';
export const PriceView = /*#__PURE__*/React.memo(({
  goodsInfo,
  maxWidth
}) => {
  var _goodsInfo$productBiz, _goodsInfo$productBiz2, _goodsInfo$productBiz3, _goodsInfo$productBiz7, _goodsInfo$productBiz8, _goodsInfo$productBiz9;
  // 是否是日历票品
  const isTicket = useMemo(() => {
    return (goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.itemTypeCode) === ITEM_TYPE_CODE.TICKET;
  }, [goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.itemTypeCode]);
  // 是否是次卡
  const isSubCard = useMemo(() => {
    return (goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.itemTypeCode) === ITEM_TYPE_CODE.TIMECARD;
  }, [goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.itemTypeCode]);
  const itemTimes = goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz === void 0 ? void 0 : _goodsInfo$productBiz.good_goods_price_right_times_card;
  // 共省30元
  const itemPriceRightDiscount = goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz2 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz2 === void 0 ? void 0 : _goodsInfo$productBiz2.good_goods_price_right_discount;
  // 快手更低价、会员专项、美团补贴
  const itemPriceFormarketing = goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz3 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz3 === void 0 ? void 0 : _goodsInfo$productBiz3.good_goods_price_right_marketing_info;
  const hasPriceLabel = (itemTimes === null || itemTimes === void 0 ? void 0 : itemTimes.length) > 0 || (itemPriceRightDiscount === null || itemPriceRightDiscount === void 0 ? void 0 : itemPriceRightDiscount.length) > 0 || (itemPriceFormarketing === null || itemPriceFormarketing === void 0 ? void 0 : itemPriceFormarketing.length) > 0;
  const hasOrginPrice = !!(goodsInfo !== null && goodsInfo !== void 0 && goodsInfo.originPrice) && !hasPriceLabel;
  const [labelMaxWidth, setLabelMaxWidth] = useState(0);
  const [showTags, setShowTags] = useState([]);
  useEffect(() => {
    var _goodsInfo$productBiz4, _goodsInfo$productBiz5, _goodsInfo$productBiz6;
    // 单次
    const itemTimes = goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz4 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz4 === void 0 ? void 0 : _goodsInfo$productBiz4.good_goods_price_right_times_card;
    // 共省30元
    const itemPriceRightDiscount = goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz5 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz5 === void 0 ? void 0 : _goodsInfo$productBiz5.good_goods_price_right_discount;
    // 快手更低价、会员专项、美团补贴
    const itemPriceFormarketing = goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz6 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz6 === void 0 ? void 0 : _goodsInfo$productBiz6.good_goods_price_right_marketing_info;
    let recombineBizTags = [];
    if (((itemTimes === null || itemTimes === void 0 ? void 0 : itemTimes.length) ?? 0) > 0) {
      recombineBizTags.push({
        bizTags: itemTimes
      });
    }
    if (((itemPriceRightDiscount === null || itemPriceRightDiscount === void 0 ? void 0 : itemPriceRightDiscount.length) ?? 0) > 0) {
      recombineBizTags.push({
        bizTags: itemPriceRightDiscount
      });
    }
    if (((itemPriceFormarketing === null || itemPriceFormarketing === void 0 ? void 0 : itemPriceFormarketing.length) ?? 0) > 0) {
      recombineBizTags.push({
        bizTags: itemPriceFormarketing
      });
    }
    setShowTags(recombineBizTags);
  }, [goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz7 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz7 === void 0 ? void 0 : _goodsInfo$productBiz7.good_goods_price_right_discount, goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz8 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz8 === void 0 ? void 0 : _goodsInfo$productBiz8.good_goods_price_right_marketing_info, goodsInfo === null || goodsInfo === void 0 || (_goodsInfo$productBiz9 = goodsInfo.productBizTagPositions) === null || _goodsInfo$productBiz9 === void 0 ? void 0 : _goodsInfo$productBiz9.good_goods_price_right_times_card]);
  const _onLayout = useCallback(event => {
    const priceWidth = isIOS() ? rem(event.nativeEvent.layout.width) : get414Px(event.nativeEvent.layout.width);
    const remainingWidth = maxWidth - priceWidth - 10;
    setLabelMaxWidth(remainingWidth);
  }, [maxWidth]);
  return /*#__PURE__*/React.createElement(View, {
    style: styles.priceInfo
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.priceLine,
    onLayout: _onLayout
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.unit
  }, priceUnit), /*#__PURE__*/React.createElement(DotDecreasePrice, {
    price: (goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.discountPrice) ?? '',
    firstPriceStyle: styles.firstPrice,
    dotSecondPriceStyle: styles.secondPrice
  }), /*#__PURE__*/React.createElement(Text, {
    style: styles.secondaryCardTimes
  }, isSubCard ? `/${goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.secondaryCardTimes}次` : isTicket ? '起' : ''), /*#__PURE__*/React.createElement(ShowWithData, {
    data: hasOrginPrice
  }, /*#__PURE__*/React.createElement(Text, {
    style: styles.originPrice
  }, goodsInfo === null || goodsInfo === void 0 ? void 0 : goodsInfo.originPriceText))), /*#__PURE__*/React.createElement(ShowWithData, {
    data: labelMaxWidth > 0
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.label
  }, /*#__PURE__*/React.createElement(CommonLabelArray, {
    bizTagArray: showTags,
    maxWidth: labelMaxWidth,
    adaptScreen: true
  }))));
});
//# sourceMappingURL=index.js.map