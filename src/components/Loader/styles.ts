import {StyleSheet} from 'react-native';
import THEME from '../../utils/constants/Theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: '40%',
    left: '45%',
    zIndex: 3,
    backgroundColor: THEME.colors.white,
    borderRadius: 10,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default styles;
