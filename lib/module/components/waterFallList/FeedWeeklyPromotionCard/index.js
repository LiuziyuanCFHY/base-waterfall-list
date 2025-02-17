function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { memo, useCallback, useEffect, useRef } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import WeeklyProduct from './WeeklyProduct';
import { styles } from './styles';
import { KidCarousel } from '@kid-ui/krn';
import { isEmptyString, jumpUrl } from '@locallife/utils';
import { LocalLifeImage } from '@locallife/base-image';
// import { localLifeBizLogger } from '@locallife/log';
import { logLinkUrlNUll } from '../../../utils/logger';
import { productAdapter } from '../../../utils/utils';
import LinearGradient from 'react-native-linear-gradient';
import { WEEKLY_ARROW_URL } from '../config/config';
export default /*#__PURE__*/memo(props => {
  const {
    data: carouselList,
    feedItemIndex,
    onFeedWeeklyItemShow,
    onFeedWeeklyPress
  } = props;
  const showSetRef = useRef(new Set());
  const reportElementShow = useCallback((weeklyModel, bannerIndex) => {
    const itemId = `${weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.title}:${bannerIndex}`;
    if (!showSetRef.current.has(itemId)) {
      onFeedWeeklyItemShow && onFeedWeeklyItemShow(weeklyModel, bannerIndex, feedItemIndex);
      // // 整体卡片曝光
      // const logParams = {
      //     url: weeklyModel?.jumpUrl,
      //     campaign_name: weeklyModel?.title,
      //     index: feedItemIndex + 1,
      //     index_internal: bannerIndex + 1,
      // };
      // localLifeBizLogger.show('CAMPAIGN_CARD', logParams);
      showSetRef.current.add(itemId);
    }
  }, [feedItemIndex, onFeedWeeklyItemShow]);

  // onIndexChanged在单个item时不会回调，这里补充调用下第0个
  useEffect(() => {
    reportElementShow(carouselList[0], 0);
  }, [carouselList, reportElementShow]);
  const onIndexChanged = useCallback(bannerIndex => {
    const item = carouselList === null || carouselList === void 0 ? void 0 : carouselList[bannerIndex];
    reportElementShow(item, bannerIndex);
  }, [carouselList, reportElementShow]);
  const paginationStyle = {
    justifyContent: 'center',
    bottom: 5,
    paddingRight: 5
  };
  const kidCarouselProps = {
    borderRadius: 0,
    carouselHeight: productAdapter(234),
    autoplay: true,
    loop: true,
    onIndexChanged: onIndexChanged,
    loadMinimal: false,
    autoplayTimeout: 6,
    dotStyle: {
      width: productAdapter(2),
      height: productAdapter(2),
      marginLeft: productAdapter(2),
      marginRight: 0
    },
    activeDotStyle: {
      width: 10,
      height: productAdapter(2),
      marginLeft: 4,
      marginRight: 0
    },
    paginationStyle
  };
  const WeeklyPromotionItem = /*#__PURE__*/memo(({
    weeklyModel,
    index
  }) => {
    let productList = (weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.products) ?? [];
    if (productList.length > 2) {
      productList = weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.products.slice(0, 2);
    }

    // 没有商品的时候，上报
    // if (productList.length === 0) {
    //     let params = {
    //         errMsg: '周周小促没有返回商品',
    //         data: weeklyModel,
    //     };
    //     dataError(params);
    // }

    const onPress = useCallback(() => {
      // localLifeBizLogger.click('CAMPAIGN_CARD', {
      //     url: weeklyModel?.jumpUrl,
      //     campaign_name: weeklyModel?.title,
      //     index: feedItemIndex + 1,
      //     index_internal: index + 1,
      // });
      onFeedWeeklyPress && onFeedWeeklyPress(weeklyModel, index, feedItemIndex);
      jumpUrl(weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.jumpUrl, 'jumpToWeeklyPromotion');
      // 检验快链是否为空，为空上报
      if (isEmptyString(weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.jumpUrl)) {
        const itemClass = typeof weeklyModel;
        logLinkUrlNUll('feedWeeklyCard', itemClass, weeklyModel);
      }
    }, [index, weeklyModel]);

    // 渐变色值只下发一个的时候，展示纯色
    let minColor = (weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.backgroundColorMin) ?? (weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.backgroundColorMax) ?? '#FF3737';
    let maxColor = (weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.backgroundColorMax) ?? (weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.backgroundColorMin) ?? '#FF3737';
    return /*#__PURE__*/React.createElement(TouchableWithoutFeedback, {
      onPress: onPress
    }, /*#__PURE__*/React.createElement(LinearGradient, {
      style: styles.gradient,
      colors: [minColor, maxColor]
    }, /*#__PURE__*/React.createElement(LocalLifeImage, {
      sceneType: 'WeeklyPromotion',
      style: styles.containerItem,
      source: {
        uri: weeklyModel.backgroundImage
      },
      resizeMode: 'cover'
    }, /*#__PURE__*/React.createElement(View, {
      style: styles.textContainer
    }, /*#__PURE__*/React.createElement(View, {
      style: styles.titleContainer
    }, /*#__PURE__*/React.createElement(Text, {
      style: styles.title
    }, weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.title), /*#__PURE__*/React.createElement(LocalLifeImage, {
      sceneType: 'WeeklyProductArrow',
      style: styles.arrowImage,
      source: {
        uri: WEEKLY_ARROW_URL
      },
      resizeMode: 'cover'
    })), /*#__PURE__*/React.createElement(Text, {
      style: styles.subTitle
    }, weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.subTitle)), /*#__PURE__*/React.createElement(View, {
      style: styles.productContainer
    }, productList.map((item, index) => {
      return /*#__PURE__*/React.createElement(WeeklyProduct, {
        data: item,
        onProductPress: onPress,
        key: index
      });
    })))));
  });
  return (
    /*#__PURE__*/
    // @ts-ignore
    React.createElement(View, {
      style: styles.container
    }, /*#__PURE__*/React.createElement(KidCarousel, _extends({}, kidCarouselProps, {
      key: 'carouselKey' + ((carouselList === null || carouselList === void 0 ? void 0 : carouselList.length) ?? 0)
    }), carouselList === null || carouselList === void 0 ? void 0 : carouselList.map((item, index) => /*#__PURE__*/React.createElement(WeeklyPromotionItem, {
      weeklyModel: item,
      index: index,
      key: index
    }))))
  );
});
//# sourceMappingURL=index.js.map