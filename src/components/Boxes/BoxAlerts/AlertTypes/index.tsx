import {View, Text} from 'react-native';
import React from 'react';
import {Alert} from '../../../../models/models';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import AlertOptions from '../../../../utils/enums/alerts';
import THEME from '../../../../utils/constants/Theme';

const AlertTypes = ({item}: {item: Alert}) => {
  return (
    <View
      style={[
        styles.boxDateContainer,
        item.nivel === AlertOptions.Important && styles.important,
        item.nivel === AlertOptions.Urgent && styles.alert,
        item.nivel === AlertOptions.Warn && styles.advice,
      ]}>
      {item.nivel === AlertOptions.Important && (
        <>
          <Ionicons name="notifications" size={40} color={THEME.colors.white} />
          <Text style={styles.month}>
            {AlertOptions.Important.toUpperCase()}
          </Text>
        </>
      )}
      {item.nivel === AlertOptions.Urgent && (
        <>
          <Foundation name="alert" size={40} color={THEME.colors.white} />
          <Text style={styles.month}>{AlertOptions.Urgent.toUpperCase()}</Text>
        </>
      )}
      {item.nivel === AlertOptions.Warn && (
        <>
          <Ionicons
            name="megaphone-outline"
            size={40}
            color={THEME.colors.white}
          />
          <Text style={styles.month}>{AlertOptions.Warn.toUpperCase()}</Text>
        </>
      )}
    </View>
  );
};

export default AlertTypes;
