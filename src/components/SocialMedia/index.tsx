import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import dropdownicons from '../../utils/constants/dropdown';
import * as Linking from 'expo-linking';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import THEME from '../../utils/constants/Theme';
const SocialMedia = () => {
  const handleLink = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.footerItemContainer}>
      <View style={styles.followContainer}>
        <Text style={styles.followText}>Seguinos</Text>
      </View>
      <View style={styles.iconsContainer}>
        {dropdownicons.map((item, idx) => (
          <TouchableWithoutFeedback
            onPress={() => handleLink(item.url)}
            key={idx}>
            <Ionicons name={item.icon} size={20} color={THEME.colors.white} />
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

export default SocialMedia;
