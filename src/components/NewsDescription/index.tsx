import {useWindowDimensions} from 'react-native';
import React from 'react';
import RenderHTML from 'react-native-render-html';
import THEME from '../../utils/constants/Theme';
import {Post} from '../../models/models';

interface Details {
  item: Post;
}

const NewsDescription = ({item}: Details) => {
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
  return (
    <RenderHTML contentWidth={width} source={source} tagsStyles={tagsStyles} />
  );
};

export default NewsDescription;
