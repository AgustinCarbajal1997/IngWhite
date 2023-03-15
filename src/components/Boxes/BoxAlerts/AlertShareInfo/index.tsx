import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {Alert} from '../../../../models/models';
import ShareData from '../../../Share ';

const AlertShareInfo = ({item}: {item: Alert}) => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionDate}>
        Activa desde: {item.fecha_publicacion}
      </Text>
      <Text style={styles.description}>{item.contenido}</Text>
      <View style={styles.buttonsContainer}>
        <ShareData message={`ALERTA: ${item.titulo}. ${item.contenido}`} />
      </View>
    </View>
  );
};

export default AlertShareInfo;
