import {StyleSheet} from 'react-native';
import THEME from '../../utils/constants/Theme';
const styles = StyleSheet.create({
  dropdownButton: {
    width: 135,
    backgroundColor: THEME.colors.orange,
    paddingVertical: 3,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  dropdownText: {
    color: THEME.colors.white,
    paddingRight: 10,
  },
  dropdownFloatContainer: {
    position: 'absolute',
    width: 135,
    left: 0,
    top: '128%',
    backgroundColor: THEME.colors.lightgreen,
  },
  dropdownFloatIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  dropdownFloatIconsText: {
    color: THEME.colors.white,
    paddingLeft: 8,
  },
});

export default styles;
