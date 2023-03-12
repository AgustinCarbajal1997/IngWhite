import React from 'react';
import {Image, Text, TouchableWithoutFeedback, View} from 'react-native';
import styles from './styles';
import {decode} from 'html-entities';
const NewsPreview = ({item, handleTouch}) => {
  return (
    <TouchableWithoutFeedback onPress={handleTouch}>
      <View style={styles.boxContainerClose}>
        <View style={styles.imgContainerClose}>
          <Image
            source={{uri: item.jetpack_featured_media_url}}
            style={styles.imgClose}
          />
        </View>
        <View style={styles.textTitleContainerClose}>
          <Text style={styles.textTitleClose}>
            {item?.title?.rendered.length < 100
              ? decode(item?.title?.rendered, {level: 'html5'})
              : decode(item?.title?.rendered.slice(0, 100).concat('...'), {
                  level: 'html5',
                })}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewsPreview;
