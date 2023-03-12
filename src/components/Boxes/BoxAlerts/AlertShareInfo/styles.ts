import {StyleSheet} from 'react-native';
import THEME from '../../../../utils/constants/Theme';

const styles = StyleSheet.create({
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
});
export default styles;
