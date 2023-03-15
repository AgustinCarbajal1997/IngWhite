import {View, Linking} from 'react-native';
import React from 'react';
import Button from '../Button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import THEME from '../../utils/constants/Theme';
interface LinkData {
  url: string;
  message: string;
}

const Link = ({url, message}: LinkData) => {
  const onHandleLink = async () => {
    await Linking.openURL(url);
  };
  return (
    <View testID="external-link">
      <Button onPress={onHandleLink} text={message} color="orange">
        <Ionicons name="arrow-redo" color={THEME.colors.orange} size={20} />
      </Button>
    </View>
  );
};

export default Link;
