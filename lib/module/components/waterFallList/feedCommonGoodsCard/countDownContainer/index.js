import KwaiImage from '@kds/image';
import { CountDown, ShowWithData } from '@locallife/biz-component';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
function CountDownContainer({
  data,
  end
}) {
  var _data$countdownInfo, _data$countdownInfo2, _data$countdownInfo3, _data$countdownInfo4, _data$countdownInfo5;
  return /*#__PURE__*/React.createElement(ShowWithData, {
    data: data === null || data === void 0 || (_data$countdownInfo = data.countdownInfo) === null || _data$countdownInfo === void 0 ? void 0 : _data$countdownInfo.bgImgUrl
  }, /*#__PURE__*/React.createElement(KwaiImage, {
    source: {
      uris: [{
        url: (data === null || data === void 0 || (_data$countdownInfo2 = data.countdownInfo) === null || _data$countdownInfo2 === void 0 ? void 0 : _data$countdownInfo2.bgImgUrl) ?? ''
      }]
    },
    style: styles.countDownBgStyle
  }, /*#__PURE__*/React.createElement(KwaiImage, {
    source: {
      uris: [{
        url: (data === null || data === void 0 || (_data$countdownInfo3 = data.countdownInfo) === null || _data$countdownInfo3 === void 0 ? void 0 : _data$countdownInfo3.iconUrl) ?? ''
      }]
    },
    style: styles.icon
  }), /*#__PURE__*/React.createElement(View, {
    style: styles.countDownContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.desTextStyle]
  }, (data === null || data === void 0 || (_data$countdownInfo4 = data.countdownInfo) === null || _data$countdownInfo4 === void 0 ? void 0 : _data$countdownInfo4.text) ?? ''), /*#__PURE__*/React.createElement(CountDown, {
    timeStamp: (data === null || data === void 0 || (_data$countdownInfo5 = data.countdownInfo) === null || _data$countdownInfo5 === void 0 ? void 0 : _data$countdownInfo5.endTime) ?? 0,
    loopCountDown: false,
    textStyle: styles.title,
    endCallback: end
  }))));
}
export default /*#__PURE__*/React.memo(CountDownContainer);
//# sourceMappingURL=index.js.map