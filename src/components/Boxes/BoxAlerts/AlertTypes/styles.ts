import {StyleSheet} from 'react-native';
import THEME from '../../../../utils/constants/Theme';

const styles = StyleSheet.create({
  boxDateContainer: {
    width: '30%',
    backgroundColor: THEME.colors.orange,
    alignItems: 'center',
    paddingVertical: 10,
  },
  month: {
    fontSize: 13,
    color: THEME.colors.white,
  },
  important: {
    backgroundColor: THEME.colors.important,
  },
  importantLight: {
    backgroundColor: THEME.colors.importantLight,
  },
  alert: {
    backgroundColor: THEME.colors.alert,
  },
  alertLight: {
    backgroundColor: THEME.colors.alertLight,
  },
  advice: {
    backgroundColor: THEME.colors.advice,
  },
  adviceLight: {
    backgroundColor: THEME.colors.adviceLight,
  },
});
export default styles;
