import React from 'react';
import { StaticLoading } from '@locallife/fallbackcomponents';
import { EStyleUtil } from '../../../utils/EStyleUtil';
import { SCREEN_WIDTH_414 } from '@locallife/design-base';
import { View } from 'react-native';
import { KidLoading } from '@kid-ui/krn';
export const footerStyles = EStyleUtil.create({
  container: {
    flex: 1,
    minHeight: 177,
    width: SCREEN_WIDTH_414,
    backgroundColor: '#F8F8F8'
  },
  footerContainer: {
    flex: 1,
    alignItems: 'center'
  },
  footerDarkContainer: {
    flex: 1,
    alignItems: 'center'
  },
  footer: {
    width: '100%',
    height: 92
  },
  noMoreFooter: {
    width: '100%',
    height: 177,
    marginTop: -50
  }
});
export const DetailFooter = /*#__PURE__*/React.memo(({
  isLoading,
  noMore,
  isDark,
  notShowSlogan = false
}) => {
  let content = /*#__PURE__*/React.createElement(StaticLoading, {
    containerStyle: footerStyles.footer
  });
  if (notShowSlogan) {
    return /*#__PURE__*/React.createElement(View, null);
  }
  if (noMore) {
    return /*#__PURE__*/React.createElement(StaticLoading, {
      containerStyle: footerStyles.noMoreFooter
    });
  }
  if (isLoading) {
    content = isDark ? /*#__PURE__*/React.createElement(View, {
      style: footerStyles.footerDarkContainer
    }, /*#__PURE__*/React.createElement(KidLoading, {
      style: footerStyles.footerDarkContainer
    })) : /*#__PURE__*/React.createElement(View, {
      style: footerStyles.footerContainer
    }, /*#__PURE__*/React.createElement(KidLoading, null));
  }
  return /*#__PURE__*/React.createElement(View, {
    style: footerStyles.container
  }, content);
});
//# sourceMappingURL=footer.js.map