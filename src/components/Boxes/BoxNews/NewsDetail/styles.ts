import {StyleSheet} from 'react-native';
import THEME from '../../../../utils/constants/Theme';

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
  descriptionContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  descriptionText: {
    color: THEME.colors.gray,
  },
  buttonsContainer: {
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonMoreRead: {
    color: THEME.colors.orange,
    paddingRight: 8,
  },
  buttonShare: {
    color: THEME.colors.lightgreen,
    paddingRight: 8,
  },
});
export default styles;
