import {StyleSheet} from 'react-native';
import THEME from '../../utils/constants/Theme';
const styles = StyleSheet.create({
  container: {
    borderColor: THEME.colors.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listenToUsContainer: {
    paddingHorizontal: 15,
  },
  listenToUsTitle: {
    color: THEME.colors.white,
    fontSize: 15,
    paddingBottom: 5,
  },
  listenToUsDesc: {
    color: THEME.colors.white,
    fontSize: 10,
  },
});

export default styles;
