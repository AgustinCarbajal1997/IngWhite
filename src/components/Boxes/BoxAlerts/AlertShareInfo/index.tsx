import React from 'react';
import {Alert, Share, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import THEME from '../../../../utils/constants/Theme';
const AlertShareInfo = ({item}) => {
  const onShareAlert = () => {
    Share.share({
      message: `ALERTA: ${item.titulo}. ${item.contenido}`,
    })
      .then()
      .catch(_ =>
        Alert.alert('Ocurrió un error', 'No se pudo compartir', [{text: 'OK'}]),
      );
  };
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionDate}>
        Activa desde: {item.fecha_publicacion}
      </Text>
      <Text style={styles.description}>{item.contenido}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableWithoutFeedback onPress={onShareAlert}>
          <View style={styles.buttons}>
            <Text style={styles.buttonShare}>Compartir</Text>
            <Ionicons
              name="share-social"
              color={THEME.colors.lightgreen}
              size={15}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AlertShareInfo;
