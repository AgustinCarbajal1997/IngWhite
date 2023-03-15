import {Text} from 'react-native';
import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';
import THEME from '../../utils/constants/Theme';
import styles from './styles';
import weather_icons from '../../utils/constants/climate';
import {Climate} from '../../models/models';
const ClimateBadge = ({data}: {data: Climate}) => {
  return (
    <>
      <Ionicon
        name={weather_icons[data?.weather[0].icon]}
        size={26}
        color={THEME.colors.white}
      />
      <Text testID="ClimateBadge" style={styles.climateText}>
        {Math.round(data?.main?.temp)}ºC
      </Text>
    </>
  );
};

export default ClimateBadge;
