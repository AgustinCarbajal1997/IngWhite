import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import THEME from '../../utils/constants/Theme';
import * as Linking from 'expo-linking';
const ListenToUs = () => {
  const handleLink = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => handleLink('https://ingenierowhite.com/radio/radio.html')}>
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <Ionicons name="volume-high" size={30} color={THEME.colors.white} />
          <View style={styles.listenToUsContainer}>
            <Text style={styles.listenToUsTitle}>Escuchanos en Vivo</Text>
            <Text style={styles.listenToUsDesc}>
              Lun. a Vie. de 14:30 hs. a 15:00 hs.{' '}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListenToUs;
