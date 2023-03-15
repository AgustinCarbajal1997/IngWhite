import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {decode} from 'html-entities';
import THEME from '../../utils/constants/Theme';
import {Post} from '../../models/models';
import styles from './styles';

interface Details {
  item: Post;
  handleTouch: () => void;
}

const NewsHeaders = ({item, handleTouch}: Details) => {
  return (
    <>
      <ImageBackground
        source={{uri: item.jetpack_featured_media_url}}
        style={styles.headerImage}>
        <View style={styles.darkness} />
      </ImageBackground>
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View style={styles.buttonClose}>
          <Ionicons name="close" size={20} color={THEME.colors.white} />
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.headerText}>
        {decode(item?.title?.rendered, {level: 'html5'})}
      </Text>
    </>
  );
};

export default NewsHeaders;
