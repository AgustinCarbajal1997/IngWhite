import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import THEME from '../../utils/constants/Theme';

const Loader = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="large" color="#e53f2b" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: '40%',
    left: '45%',
    zIndex: 3,
    backgroundColor: THEME.colors.white,
    borderRadius: 10,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
export default Loader;
