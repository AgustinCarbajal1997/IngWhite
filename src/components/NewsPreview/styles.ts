import {StyleSheet} from 'react-native';
import THEME from '../../utils/constants/Theme';

const styles = StyleSheet.create({
  boxContainerClose: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: THEME.colors.gray,
    borderBottomWidth: 1,
  },
  imgContainerClose: {
    width: '35%',
  },
  imgClose: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textTitleContainerClose: {
    width: '65%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textTitleClose: {
    color: THEME.colors.drakgreen,
    fontSize: 12,
  },
});
export default styles;
