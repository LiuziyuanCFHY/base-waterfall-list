"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _WeeklyProduct = _interopRequireDefault(require("./WeeklyProduct"));
var _styles = require("./styles");
var _krn = require("@kid-ui/krn");
var _utils = require("@locallife/utils");
var _baseImage = require("@locallife/base-image");
var _logger = require("../../../utils/logger");
var _utils2 = require("../../../utils/utils");
var _reactNativeLinearGradient = _interopRequireDefault(require("react-native-linear-gradient"));
var _config = require("../config/config");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } // import { localLifeBizLogger } from '@locallife/log';
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(props => {
  const {
    data: carouselList,
    feedItemIndex,
    onFeedWeeklyItemShow,
    onFeedWeeklyPress
  } = props;
  const showSetRef = (0, _react.useRef)(new Set());
  const reportElementShow = (0, _react.useCallback)((weeklyModel, bannerIndex) => {
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
  (0, _react.useEffect)(() => {
    reportElementShow(carouselList[0], 0);
  }, [carouselList, reportElementShow]);
  const onIndexChanged = (0, _react.useCallback)(bannerIndex => {
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
    carouselHeight: (0, _utils2.productAdapter)(234),
    autoplay: true,
    loop: true,
    onIndexChanged: onIndexChanged,
    loadMinimal: false,
    autoplayTimeout: 6,
    dotStyle: {
      width: (0, _utils2.productAdapter)(2),
      height: (0, _utils2.productAdapter)(2),
      marginLeft: (0, _utils2.productAdapter)(2),
      marginRight: 0
    },
    activeDotStyle: {
      width: 10,
      height: (0, _utils2.productAdapter)(2),
      marginLeft: 4,
      marginRight: 0
    },
    paginationStyle
  };
  const WeeklyPromotionItem = /*#__PURE__*/(0, _react.memo)(({
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

    const onPress = (0, _react.useCallback)(() => {
      // localLifeBizLogger.click('CAMPAIGN_CARD', {
      //     url: weeklyModel?.jumpUrl,
      //     campaign_name: weeklyModel?.title,
      //     index: feedItemIndex + 1,
      //     index_internal: index + 1,
      // });
      onFeedWeeklyPress && onFeedWeeklyPress(weeklyModel, index, feedItemIndex);
      (0, _utils.jumpUrl)(weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.jumpUrl, 'jumpToWeeklyPromotion');
      // 检验快链是否为空，为空上报
      if ((0, _utils.isEmptyString)(weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.jumpUrl)) {
        const itemClass = typeof weeklyModel;
        (0, _logger.logLinkUrlNUll)('feedWeeklyCard', itemClass, weeklyModel);
      }
    }, [index, weeklyModel]);

    // 渐变色值只下发一个的时候，展示纯色
    let minColor = (weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.backgroundColorMin) ?? (weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.backgroundColorMax) ?? '#FF3737';
    let maxColor = (weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.backgroundColorMax) ?? (weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.backgroundColorMin) ?? '#FF3737';
    return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
      onPress: onPress
    }, /*#__PURE__*/_react.default.createElement(_reactNativeLinearGradient.default, {
      style: _styles.styles.gradient,
      colors: [minColor, maxColor]
    }, /*#__PURE__*/_react.default.createElement(_baseImage.LocalLifeImage, {
      sceneType: 'WeeklyPromotion',
      style: _styles.styles.containerItem,
      source: {
        uri: weeklyModel.backgroundImage
      },
      resizeMode: 'cover'
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _styles.styles.textContainer
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _styles.styles.titleContainer
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: _styles.styles.title
    }, weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.title), /*#__PURE__*/_react.default.createElement(_baseImage.LocalLifeImage, {
      sceneType: 'WeeklyProductArrow',
      style: _styles.styles.arrowImage,
      source: {
        uri: _config.WEEKLY_ARROW_URL
      },
      resizeMode: 'cover'
    })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: _styles.styles.subTitle
    }, weeklyModel === null || weeklyModel === void 0 ? void 0 : weeklyModel.subTitle)), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _styles.styles.productContainer
    }, productList.map((item, index) => {
      return /*#__PURE__*/_react.default.createElement(_WeeklyProduct.default, {
        data: item,
        onProductPress: onPress,
        key: index
      });
    })))));
  });
  return (
    /*#__PURE__*/
    // @ts-ignore
    _react.default.createElement(_reactNative.View, {
      style: _styles.styles.container
    }, /*#__PURE__*/_react.default.createElement(_krn.KidCarousel, _extends({}, kidCarouselProps, {
      key: 'carouselKey' + ((carouselList === null || carouselList === void 0 ? void 0 : carouselList.length) ?? 0)
    }), carouselList === null || carouselList === void 0 ? void 0 : carouselList.map((item, index) => /*#__PURE__*/_react.default.createElement(WeeklyPromotionItem, {
      weeklyModel: item,
      index: index,
      key: index
    }))))
  );
});
//# sourceMappingURL=index.js.map