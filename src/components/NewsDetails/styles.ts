import {StyleSheet} from 'react-native';
import THEME from '../../utils/constants/Theme';

const styles = StyleSheet.create({
  boxContainer: {
    width: '100%',
    position: 'relative',
    borderBottomColor: THEME.colors.gray,
    borderBottomWidth: 1,
  },
  headerContainer: {
    width: '100%',
    height: 150,
  },
  descriptionContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonsContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;
