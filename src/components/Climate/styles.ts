import {StyleSheet} from 'react-native';
import THEME from '../../utils/constants/Theme';
const styles = StyleSheet.create({
  climateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  climateText: {
    paddingLeft: 8,
    color: THEME.colors.white,
    fontSize: THEME.fontSize.subheading,
  },
});

export default styles;
