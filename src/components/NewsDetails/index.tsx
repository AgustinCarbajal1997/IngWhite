import React from 'react';
import {View} from 'react-native';
import {Post} from '../../models/models';
import Link from '../Link';
import NewsDescription from '../NewsDescription';
import NewsHeaders from '../NewsHeaders';
import ShareData from '../Share ';
import styles from './styles';

interface Details {
  item: Post;
  handleTouch: () => void;
}

const NewsDetail = ({item, handleTouch}: Details) => {
  return (
    <View style={styles.boxContainer} testID="DetailNews">
      <View style={styles.headerContainer}>
        <NewsHeaders item={item} handleTouch={handleTouch} />
      </View>
      <View style={styles.descriptionContainer}>
        <NewsDescription item={item} />
        <View style={styles.buttonsContainer}>
          <Link message="Seguir leyendo" url={item.link} />
          <ShareData
            message={`NOTICIA: ${item.title.rendered}. Podés encontrar la noticia completa en: ${item.link}`}
          />
        </View>
      </View>
    </View>
  );
};

export default NewsDetail;
