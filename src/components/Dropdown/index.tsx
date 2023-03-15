import {View, Text, TouchableWithoutFeedback, Linking} from 'react-native';
import React, {useState} from 'react';
import THEME from '../../utils/constants/Theme';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import dropdownicons from '../../utils/constants/dropdown';
const Dropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleLink = async (url: string) => {
    await Linking.openURL(url);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => setOpen(!open)}
      testID="dropdown-container">
      <View style={styles.dropdownButton}>
        <Text style={styles.dropdownText}>Seguinos</Text>
        <Ionicon name="share-social" size={20} color={THEME.colors.white} />
        {open && (
          <View style={styles.dropdownFloatContainer} testID="dropdown-detail">
            {dropdownicons.map((item, idx) => (
              <TouchableWithoutFeedback
                onPress={() => handleLink(item.url)}
                key={idx}>
                <View style={styles.dropdownFloatIconsContainer}>
                  <Ionicon
                    name={item.icon}
                    size={20}
                    color={THEME.colors.white}
                  />
                  <Text style={styles.dropdownFloatIconsText}>
                    {item.title}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Dropdown;
