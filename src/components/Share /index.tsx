import {View, Share, Alert} from 'react-native';
import React from 'react';
import Button from '../Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import THEME from '../../utils/constants/Theme';

interface ShareData {
  message: string;
}

const ShareData = ({message}: ShareData) => {
  const onShare = () => {
    Share.share({
      message,
    })
      .then()
      .catch(_ =>
        Alert.alert('Ocurrió un error', 'No se pudo compartir', [{text: 'OK'}]),
      );
  };

  return (
    <View testID="share-data">
      <Button onPress={onShare} text="Compartir" color="lightgreen">
        <Ionicons
          name="share-social"
          color={THEME.colors.lightgreen}
          size={20}
        />
      </Button>
    </View>
  );
};

export default ShareData;
