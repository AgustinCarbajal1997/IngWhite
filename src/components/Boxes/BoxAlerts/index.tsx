import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import AlertTitle from './AlertTitle';
import AlertShareInfo from './AlertShareInfo';
import {Alert} from '../../../models/models';
import AlertTypes from './AlertTypes';

const BoxAlert = ({item}: {item: Alert}) => {
  return (
    <View style={styles.boxAlertContainer} testID="BoxAlerts">
      <View style={styles.boxCalendarContainer}>
        <AlertTypes item={item} />
        <AlertTitle item={item} />
      </View>
      <AlertShareInfo item={item} />
    </View>
  );
};

export default BoxAlert;
