import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import THEME from '../../utils/constants/Theme';
import styles from './styles';

interface Button {
  children?: React.ReactNode;
  text: string;
  color: string;
  onPress: () => void;
}

const Button = ({children, text, color, onPress}: Button) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      testID="onpress-button">
      <View style={styles.buttons}>
        <Text style={{color: THEME.colors[color]}}>{text}</Text>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
