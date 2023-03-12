import {StyleSheet} from 'react-native';
import THEME from '../../../utils/constants/Theme';

const styles = StyleSheet.create({
  boxAlertContainer: {
    width: '100%',
    flexDirection: 'column',
    borderBottomColor: THEME.colors.gray,
    borderBottomWidth: 1,
  },
  boxCalendarContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  boxDateContainer: {
    width: '30%',
    backgroundColor: THEME.colors.orange,
    alignItems: 'center',
    paddingVertical: 10,
  },
  day: {
    fontSize: 40,
    fontWeight: '700',
    color: THEME.colors.white,
  },
  month: {
    fontSize: 13,
    color: THEME.colors.white,
  },
  boxDataContainer: {
    width: '70%',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  boxDataText: {
    color: THEME.colors.drakgreen,
  },
  buttonsContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonMoreRead: {
    color: THEME.colors.orange,
    fontSize: 10,
    fontWeight: '700',
    paddingRight: 4,
  },
  buttonShare: {
    color: THEME.colors.lightgreen,
    fontSize: 13,
    fontWeight: '700',
    paddingRight: 4,
  },
  descriptionContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  descriptionDate: {
    color: THEME.colors.lightgreen,
    fontSize: THEME.fontSize.description,
  },
  description: {
    color: THEME.colors.gray,
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
