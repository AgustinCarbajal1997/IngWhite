import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';

const Loader = () => {
  return (
    <View style={[styles.container, styles.horizontal]} testID="loader">
      <ActivityIndicator size="large" color="#e53f2b" />
    </View>
  );
};

export default Loader;
