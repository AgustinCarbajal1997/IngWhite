import React, {useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import THEME from '../../utils/constants/Theme';
import SocialMedia from '../SocialMedia';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OneSignal from 'react-native-onesignal';
import {DrawerContentComponentProps} from '@react-navigation/drawer';
const Notifications = (props: DrawerContentComponentProps) => {
  const {navigation} = props;
  const [news, setNews] = useState<boolean>(true);
  const [alerts, setAlerts] = useState<boolean>(true);

  const onSelectNews = async () => {
    try {
      if (news) {
        setNews(false);
        await AsyncStorage.setItem('@news', 'true');
        OneSignal.deleteTag('noticias');
        return;
      }
      setNews(true);
      await AsyncStorage.removeItem('@news');
      OneSignal.sendTag('noticias', 'true');
    } catch (error) {
      Alert.alert('Ocurrió un error', 'No se pudo suscribir', [{text: 'OK'}]);
    }
  };
  const onSelectAlerts = async () => {
    try {
      if (alerts) {
        setAlerts(false);
        await AsyncStorage.setItem('@alerts', 'true');
        OneSignal.deleteTag('alertas');
        return;
      }
      setAlerts(true);
      await AsyncStorage.removeItem('@alerts');
      OneSignal.sendTag('alertas', 'true');
    } catch (error) {
      Alert.alert('Ocurrió un error', 'No se pudo suscribir', [{text: 'OK'}]);
    }
  };

  useEffect(() => {
    (async () => {
      const valueNews = await AsyncStorage.getItem('@news');
      const valueAlerts = await AsyncStorage.getItem('@alerts');
      if (!valueNews) {
        OneSignal.sendTag('noticias', 'true');
      }
      if (!valueAlerts) {
        OneSignal.sendTag('alertas', 'true');
      }
      if (valueNews !== null) {
        OneSignal.deleteTag('noticias');
        setNews(false);
      }
      console.log('valueAlerts', valueAlerts);
      if (valueAlerts !== null) {
        OneSignal.deleteTag('alertas');
        setAlerts(false);
      }
    })();
  }, []);

  OneSignal.setNotificationOpenedHandler(() => {
    navigation.navigate('Alerts');
  });

  return (
    <View style={styles.notificationContainer}>
      <View style={styles.notificationsContainer}>
        <Text style={styles.followText}>Recibir notificaciones</Text>
        <View style={styles.notificationsButtonsContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={onSelectNews}>
            <View style={styles.notificationBox}>
              <View
                style={[
                  styles.notificationCheck,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    backgroundColor: news ? 'white' : THEME.colors.orange,
                  },
                ]}>
                <Ionicons
                  name="checkmark"
                  color={THEME.colors.orange}
                  size={15}
                />
              </View>
              <Text style={styles.followText}>Noticias</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={onSelectAlerts}>
            <View style={styles.notificationBox}>
              <View
                style={[
                  styles.notificationCheck,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    backgroundColor: news ? 'white' : THEME.colors.orange,
                  },
                ]}>
                <Ionicons
                  name="checkmark"
                  color={THEME.colors.orange}
                  size={15}
                />
              </View>
              <Text style={styles.followText}>Alertas</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <SocialMedia />
    </View>
  );
};

export default Notifications;
