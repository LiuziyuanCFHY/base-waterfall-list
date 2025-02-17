import { EStyleUtil } from '../../utils/EStyleUtil';
import { SCREEN_WIDTH_414 } from '@locallife/design-base';
import { getThemeColor } from '@locallife/utils';
import React from 'react';
import { Platform, View } from 'react-native';
export const cardStyles = EStyleUtil.create({
  cardContainer: {
    width: Platform.OS === 'ios' ? SCREEN_WIDTH_414 : 'auto',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: () => getThemeColor({
      dark: '#2B2B2F',
      light: '#FFFFFF'
    })
  }
});
export const CardContainer = ({
  containerStyle,
  children,
  ignoreBottomPadding = false,
  ignoreTopPadding = false,
  ignoreLeftPadding = false,
  ignoreRightPadding = false,
  marginTop = 0
}) => {
  return /*#__PURE__*/React.createElement(View, {
    style: [cardStyles.cardContainer, containerStyle, ignoreBottomPadding && {
      paddingBottom: 0
    }, ignoreTopPadding && {
      paddingTop: 0
    }, ignoreLeftPadding && {
      paddingLeft: 0
    }, ignoreRightPadding && {
      paddingRight: 0
    }, marginTop !== 0 && {
      marginTop: marginTop
    }]
  }, children);
};
//# sourceMappingURL=index.js.map