import { Text, TouchableOpacity, View } from 'react-native';
import PoiIconConst from '../../common/PoiIconConst';
import React from 'react';
import styles from './styles';
import { KidIcon, KidLoading } from '@kid-ui/krn';
function GoodsBottom({
  noMore,
  loading,
  containerStyle,
  textStyle,
  onPress,
  text,
  iconStyle
}) {
  if (noMore) {
    return /*#__PURE__*/React.createElement(View, null);
  }
  if (loading) {
    return /*#__PURE__*/React.createElement(View, {
      style: styles.container
    }, /*#__PURE__*/React.createElement(KidLoading, null));
  }
  return /*#__PURE__*/React.createElement(TouchableOpacity, {
    onPress: onPress,
    activeOpacity: 1,
    style: [styles.container, containerStyle]
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.text, textStyle]
  }, text ? text : '查看更多'), /*#__PURE__*/React.createElement(KidIcon, {
    style: [styles.iconNew, iconStyle],
    kid: PoiIconConst.COMMMON_BASE_OPEN_24
  })));
}
export default /*#__PURE__*/React.memo(GoodsBottom);
//# sourceMappingURL=index.js.map