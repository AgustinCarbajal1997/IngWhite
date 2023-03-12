import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

interface MessageAlert {
  message: string;
}

const AlertMessage: FC<MessageAlert> = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

export default AlertMessage;
