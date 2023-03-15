import {Dimensions} from 'react-native';

const colors: {[key: string]: string} = {
  orange: '#ff3a20',
  mategreen: '#32878e',
  drakgreen: '#3d4a56',
  lightgreen: '#56858b',
  black: '#000000',
  gray: '#777777',
  white: '#ffffff',
  important: '#eaca1c',
  importantLight: '#eaca1c20',
  alert: '#ee5f4d',
  alertLight: '#ee5f4d20',
  advice: '#9bd6a2',
  adviceLight: '#9bd6a220',
};

const THEME = {
  colors,
  fontSize: {
    heading: 18,
    subheading: 16,
    title: 13,
    description: 10,
  },
  width: {
    default: Dimensions.get('window').width * 0.95,
    fullWidth: '100%',
  },
};

export default THEME;
