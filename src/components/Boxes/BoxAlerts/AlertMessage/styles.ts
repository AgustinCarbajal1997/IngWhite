import {StyleSheet} from 'react-native';
import THEME from '../../../../utils/constants/Theme';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  message: {
    textAlign: 'center',
    fontSize: 18,
    color: THEME.colors.gray,
  },
});

export default styles;
