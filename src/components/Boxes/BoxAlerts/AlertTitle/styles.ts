import {StyleSheet} from 'react-native';
import THEME from '../../../../utils/constants/Theme';

const styles = StyleSheet.create({
  boxDataContainer: {
    width: '70%',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  boxDataText: {
    color: THEME.colors.drakgreen,
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
