import React from 'react';
import {Text, View} from 'react-native';
import AlertOptions from '../../../../utils/enums/alerts';
import styles from './styles';

const AlertTitle = ({item}) => {
  return (
    <View
      style={[
        styles.boxDataContainer,
        item.nivel === AlertOptions.Important && styles.importantLight,
        item.nivel === AlertOptions.Urgent && styles.alertLight,
        item.nivel === AlertOptions.Warn && styles.adviceLight,
      ]}>
      <View>
        <Text style={styles.boxDataText}>{item.titulo}</Text>
      </View>
    </View>
  );
};

export default AlertTitle;
