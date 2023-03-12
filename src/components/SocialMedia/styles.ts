import {StyleSheet} from 'react-native';
import THEME from '../../utils/constants/Theme';
const styles = StyleSheet.create({
  footerItemContainer: {
    borderColor: 'transparent',
    borderTopColor: THEME.colors.white,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  followContainer: {
    paddingBottom: 10,
  },
  followText: {
    color: THEME.colors.white,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerItem: {
    fontSize: 16,
    color: '#5E5C5C',
    paddingRight: 10,
  },
  powerBy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: 16,
    color: '#5E5C5C',
    paddingLeft: 40,
  },
});

export default styles;
