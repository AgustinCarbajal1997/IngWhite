import {StyleSheet} from 'react-native';
import THEME from '../../utils/constants/Theme';
const styles = StyleSheet.create({
  followText: {
    color: THEME.colors.white,
  },
  notificationsContainer: {
    width: '85%',
    alignSelf: 'center',
  },
  notificationsButtonsContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  shareButtonText: {
    fontSize: 16,
    color: '#5E5C5C',
    paddingLeft: 40,
  },
  contentContainerStyle: {
    paddingTop: 0,
  },
  labelStyle: {
    fontSize: 13,
    color: THEME.colors.white,
  },
  notificationContainer: {
    paddingBottom: 40,
  },
  notificationBox: {
    marginRight: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationCheck: {
    borderWidth: 1,
    borderColor: 'white',
    width: 17,
    height: 17,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
