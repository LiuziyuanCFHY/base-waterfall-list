"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.NearbyDiscountList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _NearbyService = require("../../../service/NearbyService");
var _bottom = _interopRequireDefault(require("../../bottom"));
var _designBase = require("../../../utils/designBase414");
var _doubleList = require("../doubleList");
var _model = require("../model");
var _EStyleUtil = require("../../../utils/EStyleUtil");
var _bizComponent = require("@locallife/biz-component");
var _cardContainer = require("../../cardContainer");
var _utils = require("@locallife/utils");
var _footer = require("./footer");
var _fallbackcomponents = require("@locallife/fallbackcomponents");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const styles = _EStyleUtil.EStyleUtil.create({
  footer: {
    height: 80,
    alignItems: 'center'
  },
  footerText: {
    marginTop: 16,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16
  },
  container: {
    paddingBottom: 16,
    paddingTop: 12
  },
  title: {
    fontSize: 16,
    marginBottom: 12,
    fontWeight: 'bold',
    color: () => (0, _utils.getThemeColor)('cs_common_text_title')
  },
  goodsBottomContainer: {
    marginTop: 8,
    marginBottom: 0,
    marginLeft: 3
  }
});
const NearbyDiscountList = exports.NearbyDiscountList = /*#__PURE__*/(0, _react.memo)(props => {
  var _ref;
  const {
    fetchParams,
    fetchType,
    listKeys = {
      left: '_leftKey',
      right: '_rightKey'
    },
    onFeedWeeklyItemShow,
    onFeedWeeklyPress,
    onItemShow,
    onItemHide,
    onItemClick,
    cardWidth = (_designBase.SCREEN_WIDTH - 40) / 2,
    paddingHorizontal = 16,
    containerStyle,
    titleStyle,
    cardTitle,
    onEndReachedThreshold = 0.2,
    keyExtractorIndex = 0,
    ListFooterComponent = null,
    isShowEmpty,
    setEmpty,
    onClickMore,
    onShowClickMore,
    setIsError
  } = props;
  const [nearbyFeedsist, setNearbyFeedsist] = (0, _react.useState)([]);
  const [requestCount, setRequestCount] = (0, _react.useState)(0);
  const [isEmpty, setIsEmpty] = (0, _react.useState)(false);
  const [nextFetch, setNextFetch] = (0, _react.useState)(false);
  const handleSetNearbyFeedsList = (0, _react.useCallback)(data => {
    setNearbyFeedsist([...data]);
  }, []);
  const {
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isRefetching,
    isError
  } = (0, _NearbyService.useQueryNearbyGoods)(fetchParams, pages => {
    var _pages$lastIndex, _pages$lastIndex2;
    const nowCount = requestCount + 1;
    setRequestCount(nowCount);
    const lastIndex = (pages === null || pages === void 0 ? void 0 : pages.length) - 1;
    const resultDataLenght = (_pages$lastIndex = pages[lastIndex]) === null || _pages$lastIndex === void 0 || (_pages$lastIndex = _pages$lastIndex.data) === null || _pages$lastIndex === void 0 || (_pages$lastIndex = _pages$lastIndex.feedList) === null || _pages$lastIndex === void 0 ? void 0 : _pages$lastIndex.length;
    const hasNext = (_pages$lastIndex2 = pages[lastIndex]) === null || _pages$lastIndex2 === void 0 || (_pages$lastIndex2 = _pages$lastIndex2.data) === null || _pages$lastIndex2 === void 0 ? void 0 : _pages$lastIndex2.hasNext;
    if (nowCount === 1 && !resultDataLenght && !nextFetch) {
      if (hasNext) {
        setNextFetch(true);
        fetchNextPage();
      } else {
        setIsEmpty(true);
        setEmpty === null || setEmpty === void 0 || setEmpty(true);
      }
    } else if (nowCount === 2 && !resultDataLenght && nextFetch) {
      setIsEmpty(true);
      setEmpty === null || setEmpty === void 0 || setEmpty(true);
    }
  }, handleSetNearbyFeedsList, nearbyFeedsist);
  (0, _react.useEffect)(() => {
    if (isError) {
      // 接口报错的情况
      setIsError === null || setIsError === void 0 || setIsError(isError, nearbyFeedsist);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, nearbyFeedsist]);
  const loadingStatus = (0, _react.useMemo)(() => {
    return isFetchingNextPage || isRefetching || isLoading;
  }, [isFetchingNextPage, isRefetching, isLoading]);
  const noMore = (0, _react.useMemo)(() => {
    return !hasNextPage && !isFetchingNextPage;
  }, [hasNextPage, isFetchingNextPage]);
  (0, _react.useEffect)(() => {
    if (!noMore && fetchType === _model.IFetchType.ClickMore && !isEmpty) {
      onShowClickMore === null || onShowClickMore === void 0 || onShowClickMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noMore, fetchType, isEmpty]);
  const handleOnPress = (0, _react.useCallback)(() => {
    if (loadingStatus || !hasNextPage) {
      return;
    }
    fetchNextPage();
    onClickMore === null || onClickMore === void 0 || onClickMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchNextPage, loadingStatus, hasNextPage, onClickMore]);
  const footer = (0, _react.useCallback)(() => {
    if (fetchType === _model.IFetchType.ClickMore) {
      return /*#__PURE__*/_react.default.createElement(_bottom.default, {
        loading: false,
        noMore: noMore,
        containerStyle: styles.goodsBottomContainer,
        onPress: handleOnPress
      });
    }
    return /*#__PURE__*/_react.default.createElement(_footer.DetailFooter, {
      isLoading: loadingStatus,
      noMore: !hasNextPage,
      isDark: false,
      notShowSlogan: false
    });
  }, [loadingStatus, hasNextPage, noMore, handleOnPress, fetchType]);
  const onEndReached = (0, _react.useCallback)(async () => {
    if (fetchType === _model.IFetchType.PullUp) {
      if (loadingStatus || !hasNextPage) {
        return;
      }
      await fetchNextPage();
    }
  }, [loadingStatus, hasNextPage, fetchNextPage, fetchType]);
  const getFooter = (0, _react.useCallback)(() => {
    if (ListFooterComponent) {
      return ListFooterComponent({
        hasNextPage,
        isLoading,
        isFetchingNextPage,
        isRefetching
      });
    } else {
      return footer();
    }
  }, [ListFooterComponent, hasNextPage, isLoading, isFetchingNextPage, isRefetching, footer]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_bizComponent.ShowWithData, {
    data: ((_ref = nearbyFeedsist || []) === null || _ref === void 0 ? void 0 : _ref.length) > 0
  }, /*#__PURE__*/_react.default.createElement(_cardContainer.CardContainer, {
    containerStyle: {
      ...styles.container,
      ...containerStyle
    }
  }, !!cardTitle && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: {
      ...styles.title,
      ...titleStyle
    }
  }, cardTitle), /*#__PURE__*/_react.default.createElement(_doubleList.DoubleList, {
    index: keyExtractorIndex,
    recoList: nearbyFeedsist || [],
    cardWidth: cardWidth,
    paddingHorizontal: paddingHorizontal,
    ListFooterComponent: getFooter,
    listKeys: listKeys,
    onFeedWeeklyItemShow: onFeedWeeklyItemShow,
    onFeedWeeklyPress: onFeedWeeklyPress,
    onItemClick: onItemClick,
    onItemHide: onItemHide,
    onItemShow: onItemShow,
    onEndReachedThreshold: onEndReachedThreshold,
    onEndReached: onEndReached,
    loadingStatus: loadingStatus
  }))), !!(isEmpty && isShowEmpty) && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _footer.footerStyles.container
  }, /*#__PURE__*/_react.default.createElement(_fallbackcomponents.StaticLoading, {
    containerStyle: _footer.footerStyles.footer
  })));
});
var _default = exports.default = NearbyDiscountList;
//# sourceMappingURL=index.js.map