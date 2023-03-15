import {StyleSheet} from 'react-native';
import THEME from '../../utils/constants/Theme';

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  darkness: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: 150,
  },
  buttonClose: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerText: {
    position: 'absolute',
    bottom: 0,
    color: THEME.colors.white,
    paddingHorizontal: 20,
    paddingBottom: 10,
    fontSize: THEME.fontSize.subheading,
  },
});
export default styles;
