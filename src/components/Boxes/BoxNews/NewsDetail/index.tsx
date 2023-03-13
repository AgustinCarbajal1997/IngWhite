import React from 'react';
import {
  Alert,
  ImageBackground,
  Share,
  Text,
  TouchableWithoutFeedback,
  useWindowDimensions,
  View,
  Linking,
} from 'react-native';
import THEME from '../../../../utils/constants/Theme';
import styles from './styles';
import RenderHtml from 'react-native-render-html';
import {decode} from 'html-entities';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Post} from '../../../../models/models';
const NewsDetail = ({
  item,
  handleTouch,
}: {
  item: Post;
  handleTouch: () => void;
}) => {
  const {width} = useWindowDimensions();
  const source = {
    html: item?.excerpt?.rendered,
  };
  const tagsStyles = {
    p: {
      color: THEME.colors.gray,
      margin: 0,
      padding: 0,
    },
  };
  const handleLink = async (url: string) => {
    await Linking.openURL(url);
  };
  const onShareNews = () => {
    Share.share({
      message: `NOTICIA: ${item.title.rendered}. Podés encontrar la noticia completa en: ${item.link}`,
    })
      .then()
      .catch(_ =>
        Alert.alert('Ocurrió un error', 'No se pudo compartir', [{text: 'OK'}]),
      );
  };
  return (
    <View style={styles.boxContainer} testID="DetailNews">
      <View style={styles.headerContainer}>
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
      </View>
      <View style={styles.descriptionContainer}>
        <RenderHtml
          contentWidth={width}
          source={source}
          tagsStyles={tagsStyles}
        />
        <View style={styles.buttonsContainer}>
          <TouchableWithoutFeedback onPress={() => handleLink(item.link)}>
            <View style={styles.buttons}>
              <Text style={styles.buttonMoreRead}>Seguir leyendo</Text>
              <Ionicons
                name="arrow-redo"
                color={THEME.colors.orange}
                size={20}
              />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={onShareNews}>
            <View style={styles.buttons}>
              <Text style={styles.buttonShare}>Compartir</Text>
              <Ionicons
                name="share-social"
                color={THEME.colors.lightgreen}
                size={20}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default NewsDetail;
