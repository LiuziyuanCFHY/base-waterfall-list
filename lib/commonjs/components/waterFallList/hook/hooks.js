"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTextLineHook = exports.useDoubleListData = void 0;
var _react = require("react");
var _utils = require("../../../utils/utils");
var _config = require("../config/config");
var _baseHooks = require("@locallife/base-hooks");
var _EStyleUtil = require("../../../utils/EStyleUtil");
/**
 * @file hooks.ts
 * @description 请在此添加属于该页面的自定义hooks
 */

const useDoubleListData = (feedGoodsInfos, refreshCount = 0, cardWidth = _config.GOOD_CARD_WIDTH) => {
  const leftHeight = (0, _react.useRef)(0);
  const rightHeight = (0, _react.useRef)(0);
  const [dataList, setDataList] = (0, _react.useState)([]);
  const [leftData, setLeft] = (0, _react.useState)([]);
  const [rightData, setRight] = (0, _react.useState)([]);
  const lastIndex = (0, _react.useRef)(0);
  const lastRefreshCount = (0, _react.useRef)(0);
  (0, _react.useEffect)(() => {
    if (feedGoodsInfos.length > 0) {
      setDataList([{
        itemId: 'have-data'
      }]);
    }
  }, [feedGoodsInfos.length]);
  (0, _react.useEffect)(() => {
    const lData = [];
    const rData = [];
    let tmpFeedGoodsInfos = feedGoodsInfos;
    if (lastIndex.current >= feedGoodsInfos.length && refreshCount === lastRefreshCount.current) {
      // 没有新增卡片直接返回
      return;
    }
    if (lastIndex.current !== 0) {
      tmpFeedGoodsInfos = tmpFeedGoodsInfos.slice(lastIndex.current);
    }
    lastIndex.current = feedGoodsInfos.length;
    tmpFeedGoodsInfos.forEach((item, index) => {
      const newItem = {
        ...item
      };
      // 1、realIndex赋值
      newItem.realIndex = index;
      // 2、计算卡片高度
      const itemHeight = (0, _utils.countFeedItemHeight)(newItem, _config.ONE_LINE_TITLE_FONT, cardWidth);
      // 3、构造双列的数据源
      if (leftHeight.current <= rightHeight.current) {
        leftHeight.current += itemHeight;
        lData.push(newItem);
      } else {
        rightHeight.current += itemHeight;
        rData.push(newItem);
      }
    });
    if (refreshCount === lastRefreshCount.current) {
      setLeft(prevLeftData => prevLeftData.concat(lData));
      setRight(prevRightData => prevRightData.concat(rData));
    } else {
      // 重新刷新了，更新数据源
      setLeft(lData);
      setRight(rData);
      lastRefreshCount.current = refreshCount;
    }
    // 仅feedGoodsInfos依赖即可
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedGoodsInfos]);
  const updateHeight = (0, _react.useCallback)((listKey, height) => {
    if (listKey === _config.leftKey) {
      leftHeight.current = height;
    } else if (listKey === _config.rightKey) {
      rightHeight.current = height;
    }
  }, []);
  return {
    dataList,
    leftData,
    rightData,
    updateHeight
  };
};
exports.useDoubleListData = useDoubleListData;
const useTextLineHook = title => {
  const lastTitle = (0, _baseHooks.useLatest)(title);
  const haveLayout = (0, _react.useRef)(false);
  const [titleInfo, setTitleInfo] = (0, _react.useState)({
    realTitle: title,
    lineNumber: 2,
    firstLine: lastTitle.current || '',
    nextLine: '',
    maxHeight: _EStyleUtil.EStyleUtil.transNumberToRem(36)
  });
  (0, _react.useEffect)(() => {
    if (lastTitle.current !== titleInfo.realTitle) {
      setTitleInfo({
        realTitle: lastTitle.current,
        lineNumber: 2,
        firstLine: lastTitle.current || '',
        nextLine: '',
        maxHeight: _EStyleUtil.EStyleUtil.transNumberToRem(36)
      });
      haveLayout.current = false;
    }
  }, [lastTitle, title, titleInfo.realTitle]);
  const onTextLayout = (0, _react.useCallback)(e => {
    if (haveLayout.current) {
      return;
    }
    if (e.nativeEvent.lines.length > 1) {
      const {
        text
      } = e.nativeEvent.lines[0];
      let remainText = '';
      for (let i = 1; i < e.nativeEvent.lines.length; i++) {
        remainText += e.nativeEvent.lines[i].text;
      }
      setTitleInfo({
        realTitle: lastTitle.current,
        lineNumber: 1,
        firstLine: text,
        nextLine: remainText,
        maxHeight: e.nativeEvent.lines[0].height * 2
      });
    } else {
      setTitleInfo({
        realTitle: lastTitle.current,
        lineNumber: 1,
        firstLine: lastTitle.current,
        nextLine: '',
        maxHeight: _EStyleUtil.EStyleUtil.transNumberToRem(36)
      });
    }
    haveLayout.current = true;
  }, [lastTitle]);
  return {
    onTextLayout,
    titleInfo
  };
};
exports.useTextLineHook = useTextLineHook;
//# sourceMappingURL=hooks.js.map