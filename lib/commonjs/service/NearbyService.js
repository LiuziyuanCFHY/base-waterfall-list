"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmptyString = void 0;
exports.useQueryNearbyGoods = useQueryNearbyGoods;
var _reactQuery = require("react-query");
var _bizRequest = require("@locallife/biz-request");
var _model = require("../components/waterFallList/model");
const useQueryUrl = '/rest/n/nearby/localfood/feed/goods';
const fetchGoodsList = async (queryParams = {
  size: '20',
  channelSource: _model.ChannelSourceEnum.POI_DETAIL,
  poiId: '',
  cursor: '',
  fetchUrl: ''
}) => {
  const params = {
    url: (queryParams === null || queryParams === void 0 ? void 0 : queryParams.fetchUrl) || useQueryUrl,
    method: _bizRequest.RequestMethod.GET,
    params: queryParams,
    headers: {
      'X-Client-Type': 1
    },
    businessName: 'api',
    responseType: 'string'
  };
  try {
    return await _bizRequest.bizRequest.request(params, {
      enableRequestParamsVerify: false
    }).catch(reason => {
      return Promise.reject(reason);
    });
  } catch (e) {
    throw e;
  }
};
const NO_MORE = 'nomore';

// 判断字符串是否为空
const isEmptyString = str => typeof str === 'undefined' || str == null || str === '';

// 请求结束，处理数据
exports.isEmptyString = isEmptyString;
function dealData(data, pages, setData) {
  var _pages;
  const currentPage = (pages === null || pages === void 0 ? void 0 : pages.length) ?? 0;
  const items = (_pages = pages[currentPage - 1]) === null || _pages === void 0 || (_pages = _pages.data) === null || _pages === void 0 ? void 0 : _pages.feedList;
  items === null || items === void 0 || items.forEach(item => {
    data.push(item);
  });
  const oldLenght = ((data === null || data === void 0 ? void 0 : data.length) || 0) - ((items === null || items === void 0 ? void 0 : items.length) || 0);
  setData([...data], oldLenght);
}
function useQueryNearbyGoods(queryParams = {
  size: '20',
  channelSource: _model.ChannelSourceEnum.POI_DETAIL,
  poiId: '',
  fetchUrl: ''
}, handleCallback, setData, data) {
  return (0, _reactQuery.useInfiniteQuery)([(queryParams === null || queryParams === void 0 ? void 0 : queryParams.fetchUrl) || useQueryUrl], params => {
    return fetchGoodsList({
      ...queryParams,
      cursor: params.pageParam
    });
  }, {
    onSettled: response => {
      if (response) {
        handleCallback(response.pages);
        const currentPage = response.pages.length ?? 0;
        if (currentPage < 1) {
          return;
        }
        const lastIndex = response.pages.length - 1;
        if (lastIndex === 0) {
          setData([]);
          dealData(data, response.pages, setData);
        } else {
          dealData(data, response.pages, setData);
        }
      }
    },
    getNextPageParam: lastPage => {
      var _lastPage$data;
      if ((lastPage === null || lastPage === void 0 || (_lastPage$data = lastPage.data) === null || _lastPage$data === void 0 ? void 0 : _lastPage$data.cursor) !== NO_MORE) {
        var _lastPage$data2;
        return lastPage === null || lastPage === void 0 || (_lastPage$data2 = lastPage.data) === null || _lastPage$data2 === void 0 ? void 0 : _lastPage$data2.cursor;
      }
      return undefined;
    }
  });
}
//# sourceMappingURL=NearbyService.js.map