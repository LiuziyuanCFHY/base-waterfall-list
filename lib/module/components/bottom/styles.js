import { EStyleUtil } from '../..//utils/EStyleUtil';
import { getThemeColor } from '@locallife/utils';
import { LL_UI } from '@locallife/design-base';
export default EStyleUtil.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2
  },
  text: {
    fontSize: 12,
    color: LL_UI.Color.TEXT_MAIN,
    includeFontPadding: false
  },
  textNew: {
    fontSize: 14,
    color: () => getThemeColor('cs_common_text_secondary'),
    includeFontPadding: false
  },
  icon: {
    width: 14,
    height: 14,
    marginLeft: 2,
    tintColor: () => getThemeColor('cs_common_text_secondary')
  },
  iconNew: {
    width: 12,
    height: 12,
    marginLeft: 4,
    tintColor: () => getThemeColor('cs_common_text_secondary')
  }
});
//# sourceMappingURL=styles.js.map