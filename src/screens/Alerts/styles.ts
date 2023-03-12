import {StyleSheet} from 'react-native';
import THEME from '../../utils/constants/Theme';

const styles = StyleSheet.create({
  alertsScreenContainer: {
    position: 'relative',
    flex: 1,
  },
  updateButtonContainer: {
    alignSelf: 'center',
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  updateButton: {
    color: THEME.colors.orange,
    marginLeft: 5,
  },
});

export default styles;
