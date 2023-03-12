import {StyleSheet, Dimensions} from 'react-native';
import THEME from '../../utils/constants/Theme';
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: THEME.colors.orange,
  },
  containerLogo: {
    width: Dimensions.get('window').width * 0.78,
    flexDirection: 'row',
    backgroundColor: 'red',
    marginVertical: 10,
  },
  img: {
    width: '100%',
    height: Dimensions.get('window').width * 0.15,
  },
  containerClose: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerItemContainer: {
    borderColor: 'transparent',
    borderTopColor: THEME.colors.white,
    borderWidth: 1,
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
  followContainer: {
    paddingBottom: 10,
  },
  followText: {
    color: THEME.colors.white,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerItem: {
    fontSize: 16,
    color: '#5E5C5C',
    paddingRight: 10,
  },
  powerBy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
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
