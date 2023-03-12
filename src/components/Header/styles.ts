import {StyleSheet, Dimensions} from 'react-native';
import THEME from '../../utils/constants/Theme';
const styles = StyleSheet.create({
  containerHeader: {
    backgroundColor: THEME.colors.drakgreen,
  },
  containerAppHeader: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  containerAppHeaderLogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerWelcomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: Dimensions.get('window').width * 0.7,
    height: 40,
  },
  footerMenuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
  },
  footerMenu: {
    paddingBottom: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  logoImg: {
    marginLeft: 15,
    width: '75%',
    height: '100%',
    resizeMode: 'contain',
  },
  climateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  climateText: {
    paddingLeft: 8,
    color: THEME.colors.white,
    fontSize: THEME.fontSize.subheading,
  },
  textWelcomeHeader: {
    color: THEME.colors.white,
    fontSize: THEME.fontSize.heading,
    lineHeight: 10,
    paddingTop: 10,
    paddingVertical: 4,
  },
  borderBottomTextActive: {
    borderBottomColor: THEME.colors.orange,
    borderBottomWidth: 2,
    marginLeft: 15,
  },
  borderBottomText: {
    borderBottomColor: THEME.colors.mategreen,
    borderBottomWidth: 2,
    marginLeft: 15,
  },
  containerCronipesosEnabled: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },

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
  },
  dropdownFloatIconsText: {
    color: THEME.colors.white,
  },
});

export default styles;
