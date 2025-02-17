"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FeedCommonGoodsCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _style = _interopRequireDefault(require("./style"));
var _bizComponent = require("@locallife/biz-component");
var _image = _interopRequireDefault(require("@kds/image"));
var _utils = require("@locallife/utils");
var _hooks = require("../hook/hooks");
var _countDownContainer = _interopRequireDefault(require("./countDownContainer"));
var _NewUserBuyInfoView = require("./NewUserBuyInfoView");
var _PoiInfoView = require("./PoiInfoView");
var _DistanceLabel = require("./DistanceLabel");
var _PriceView = require("./PriceView");
var _hook = require("./NewUserBuyInfoView/hook");
var _constants = require("../../../constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * 通用商品卡
 * scene 团购优惠底部双列feed新商品卡
 * author liyi33
 */

const FeedCommonGoodsCard = exports.FeedCommonGoodsCard = /*#__PURE__*/(0, _react.memo)(({
  curItem,
  index,
  onItemClick,
  cardWidth
}) => {
  var _productModel$product;
  const productModel = (curItem === null || curItem === void 0 ? void 0 : curItem.data) ?? {};
  // 倒计时是否结束
  const [countDownEnd, setCountDownEnd] = (0, _react.useState)(false);
  const handleProduction = (0, _react.useCallback)(() => {
    if (onItemClick) {
      onItemClick(curItem, index);
    }
    (productModel === null || productModel === void 0 ? void 0 : productModel.goodsJumpUrl) && (0, _utils.jumpUrl)(productModel === null || productModel === void 0 ? void 0 : productModel.goodsJumpUrl, 'TO_HALF_POI_PAGE');
  }, [curItem, index, onItemClick, productModel === null || productModel === void 0 ? void 0 : productModel.goodsJumpUrl]);
  const handlePoi = (0, _react.useCallback)(() => {
    if (onItemClick) {
      const item = {
        ...curItem,
        iSClickPoi: true
      };
      onItemClick(item, index);
    }
    (productModel === null || productModel === void 0 ? void 0 : productModel.poiJumpUrl) && (0, _utils.jumpUrl)(productModel === null || productModel === void 0 ? void 0 : productModel.poiJumpUrl, 'TO_POI');
  }, [curItem, index, onItemClick, productModel === null || productModel === void 0 ? void 0 : productModel.poiJumpUrl]);
  const {
    titleInfo,
    onTextLayout
  } = (0, _hooks.useTextLineHook)(productModel === null || productModel === void 0 ? void 0 : productModel.productTitle);

  // 倒计时结束的回调
  const countDownEndCallback = (0, _react.useCallback)(() => {
    setCountDownEnd(true);
  }, []);

  // 是否是日历票品
  const isTicket = (0, _react.useMemo)(() => {
    return (productModel === null || productModel === void 0 ? void 0 : productModel.itemTypeCode) === _constants.ITEM_TYPE_CODE.TICKET;
  }, [productModel === null || productModel === void 0 ? void 0 : productModel.itemTypeCode]);
  // 是否是次卡
  const isSubCard = (0, _react.useMemo)(() => {
    return (productModel === null || productModel === void 0 ? void 0 : productModel.itemTypeCode) === _constants.ITEM_TYPE_CODE.TIMECARD;
  }, [productModel === null || productModel === void 0 ? void 0 : productModel.itemTypeCode]);
  // 是否展示倒计时
  const showCountDown = !countDownEnd && (productModel === null || productModel === void 0 ? void 0 : productModel.countdownInfo);

  // 是否展示第二行描述信息(这一行和倒计时互斥)
  const hasDescLine = ((productModel === null || productModel === void 0 ? void 0 : productModel.soldStock) ?? -1) > 0 && (0, _utils.isNotEmptyString)((productModel === null || productModel === void 0 ? void 0 : productModel.feedBackRate) ?? '') && !(productModel !== null && productModel !== void 0 && productModel.countdownInfo);

  // 优先级： 日历票、次卡 > 新人> 正常样式
  // 是否展示新人
  const isNewUser = !isTicket && !isSubCard && (productModel === null || productModel === void 0 ? void 0 : productModel.newUser);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: handleProduction
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _style.default.container
  }, /*#__PURE__*/_react.default.createElement(_image.default, {
    style: _style.default.coverImage,
    source: {
      uri: productModel === null || productModel === void 0 ? void 0 : productModel.coverUrl
    },
    resizeMode: 'cover'
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _style.default.coverBottomContent
  }, /*#__PURE__*/_react.default.createElement(_DistanceLabel.DistanceLabel, {
    goodsInfo: productModel
  }), /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: showCountDown
  }, /*#__PURE__*/_react.default.createElement(_countDownContainer.default, {
    data: productModel,
    end: countDownEndCallback
  })))), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _style.default.content
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _style.default.firstLine
  }, /*#__PURE__*/_react.default.createElement(_bizComponent.CommonLabels, {
    bizTags: (productModel === null || productModel === void 0 || (_productModel$product = productModel.productBizTagPositions) === null || _productModel$product === void 0 ? void 0 : _productModel$product.good_goods_title_core) ?? [],
    adaptScreen: false,
    autoCut: false,
    containerStyle: _style.default.labelStyle
  }), /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: (0, _utils.isNotEmptyString)((productModel === null || productModel === void 0 ? void 0 : productModel.brandName) ?? '')
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.default.brandText,
    numberOfLines: 1
  }, productModel === null || productModel === void 0 ? void 0 : productModel.brandName), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _style.default.verLine
  })), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.default.titleContainer
    // @ts-ignore
    ,
    onTextLayout: onTextLayout,
    numberOfLines: titleInfo.lineNumber
  }, titleInfo.firstLine)), /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: (0, _utils.isNotEmptyString)(titleInfo.nextLine)
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.default.nextLine,
    numberOfLines: 1
  }, titleInfo.nextLine)), /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: hasDescLine
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _style.default.descContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.default.feedBackRate,
    numberOfLines: 1
  }, productModel === null || productModel === void 0 ? void 0 : productModel.feedBackRate), /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: _style.default.soldStock,
    numberOfLines: 1
  }, (0, _hook.calculateSoldCount)(productModel === null || productModel === void 0 ? void 0 : productModel.soldStock)))), /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: isNewUser
  }, /*#__PURE__*/_react.default.createElement(_NewUserBuyInfoView.NewUserBuyInfoView, {
    productInfo: productModel
  })), /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: !isNewUser
  }, /*#__PURE__*/_react.default.createElement(_PriceView.PriceView, {
    goodsInfo: productModel,
    maxWidth: cardWidth
  })), /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: productModel === null || productModel === void 0 ? void 0 : productModel.poiName
  }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    onPress: handlePoi
  }, /*#__PURE__*/_react.default.createElement(_PoiInfoView.PoiInfoView, {
    goodsInfo: productModel
  }))))));
});
//# sourceMappingURL=index.js.map