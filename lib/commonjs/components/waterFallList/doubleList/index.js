"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoubleList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _config = require("../config/config");
var _bizComponent = require("@locallife/biz-component");
var _feedRecommendCard = require("../feedRecommendCard");
var _utils = require("@locallife/utils");
var _style = require("./style");
var _constants = require("../../../constants");
var _feedCommonGoodsCard = require("../feedCommonGoodsCard");
var _FeedWeeklyPromotionCard = _interopRequireDefault(require("../FeedWeeklyPromotionCard"));
var _hooks = require("../hook/hooks");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// 卡片索引
const keyExtractor = (item, index) => {
  return index + '_doubleList';
};
const DoubleList = exports.DoubleList = /*#__PURE__*/(0, _react.memo)(props => {
  const {
    uiMode = 'space-between',
    recoList,
    onItemShow,
    onItemHide,
    onItemClick,
    data,
    initialNumToRender,
    paddingHorizontal = _config.DEFAULT_PADDING,
    // 左右间距，默认11
    cardWidth = _config.GOOD_CARD_WIDTH,
    // 卡片宽度，默认192
    refreshCount,
    ListFooterComponent,
    onEndReached,
    onFeedWeeklyItemShow,
    onFeedWeeklyPress,
    listKeys = {
      left: _config.leftKey,
      right: _config.rightKey
    },
    onEndReachedThreshold,
    loadingStatus
  } = props;
  const {
    leftData: lFeeds,
    rightData: rFeeds,
    updateHeight
  } = (0, _hooks.useDoubleListData)(recoList, refreshCount, cardWidth);
  const onLayout = (0, _react.useCallback)((listKey, event) => {
    var _event$nativeEvent;
    updateHeight === null || updateHeight === void 0 || updateHeight(listKey, event === null || event === void 0 || (_event$nativeEvent = event.nativeEvent) === null || _event$nativeEvent === void 0 || (_event$nativeEvent = _event$nativeEvent.layout) === null || _event$nativeEvent === void 0 ? void 0 : _event$nativeEvent.height);
  }, [updateHeight]);

  // 单个卡片
  const renderFeedItem = (0, _react.useCallback)(({
    item,
    index: feedItemIndex
  }) => {
    if ((item === null || item === void 0 ? void 0 : item.type) === _constants.FEED_CARD_TYPE.COMMON_GOOD_CARD) {
      return /*#__PURE__*/_react.default.createElement(_feedCommonGoodsCard.FeedCommonGoodsCard, {
        curItem: item,
        index: feedItemIndex,
        onItemClick: onItemClick,
        cardWidth: cardWidth
      });
    } else if ((item === null || item === void 0 ? void 0 : item.type) === _constants.FEED_CARD_TYPE.WEEKLY_CARD) {
      return /*#__PURE__*/_react.default.createElement(_FeedWeeklyPromotionCard.default, {
        data: item === null || item === void 0 ? void 0 : item.data,
        feedItemIndex: item.realIndex,
        onFeedWeeklyItemShow: onFeedWeeklyItemShow,
        onFeedWeeklyPress: onFeedWeeklyPress
      });
    } else {
      return /*#__PURE__*/_react.default.createElement(_feedRecommendCard.FeedRecommendItem, {
        curItem: item,
        index: feedItemIndex
      });
    }
  }, [cardWidth, onItemClick, onFeedWeeklyItemShow, onFeedWeeklyPress]);
  const windowSize = (0, _react.useMemo)(() => {
    return (0, _utils.isAndroid)() ? 3 : undefined;
  }, []);
  const renderSeparator = (0, _react.useCallback)(() => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: _style.styles.distance
    });
  }, []);
  const isFetching = (0, _react.useRef)(false);
  const handleEndReached = (0, _react.useCallback)(async () => {
    if (isFetching.current || loadingStatus) {
      return;
    }
    isFetching.current = true;
    await (onEndReached === null || onEndReached === void 0 ? void 0 : onEndReached());
    isFetching.current = false;
  }, [onEndReached, loadingStatus]);
  const endReached = (0, _react.useCallback)(() => {
    handleEndReached();
  }, [handleEndReached]);
  const renderList = (0, _react.useCallback)((listKey, feeds) => {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_bizComponent.CommonList
    //eslint-disable-next-line react/jsx-no-bind
    , {
      onLayout: event => {
        onLayout(listKey, event);
      },
      keyExtractor: keyExtractor,
      renderItem: renderFeedItem,
      data: feeds,
      listKey: listKey,
      onItemShow: onItemShow,
      onItemHide: onItemHide,
      windowSize: windowSize // 解决安卓滑动突然转向，卡顿问题
      ,
      ItemSeparatorComponent: renderSeparator,
      initialNumToRender: initialNumToRender,
      style: {
        width: cardWidth
      },
      onEndReached: endReached,
      onEndReachedThreshold: onEndReachedThreshold ?? 0.1
    }));
  }, [cardWidth, initialNumToRender, onItemHide, onItemShow, onLayout, renderFeedItem, renderSeparator, windowSize, endReached, onEndReachedThreshold]);

  // 瀑布流卡片
  if (lFeeds && rFeeds) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [_style.styles.containerRow, {
        justifyContent: uiMode,
        paddingHorizontal: paddingHorizontal
      }]
    }, renderList(listKeys.left, lFeeds), renderList(listKeys.right, rFeeds)), !!ListFooterComponent && (ListFooterComponent === null || ListFooterComponent === void 0 ? void 0 : ListFooterComponent()));
  }
  return renderList('one', data ?? []);
});
//# sourceMappingURL=index.js.map