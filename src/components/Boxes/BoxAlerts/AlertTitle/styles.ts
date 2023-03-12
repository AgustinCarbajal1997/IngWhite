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
    backgroundColor: THEME.colors.important.backgroundColor,
  },
  importantLight: {
    backgroundColor: THEME.colors.importantLight.backgroundColor,
  },
  alert: {
    backgroundColor: THEME.colors.alert.backgroundColor,
  },
  alertLight: {
    backgroundColor: THEME.colors.alertLight.backgroundColor,
  },
  advice: {
    backgroundColor: THEME.colors.advice.backgroundColor,
  },
  adviceLight: {
    backgroundColor: THEME.colors.adviceLight.backgroundColor,
  },
});
export default styles;
