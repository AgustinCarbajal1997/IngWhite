import {FlatList, RefreshControl, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Loader from '../../components/Loader';
import Card from '../../components/Card';
import BoxNews from '../../components/Boxes/BoxNews';
import THEME from '../../utils/constants/Theme';
import {Post} from '../../models/models';

interface Template {
  data: Post[] | undefined;
  isLoadingMutation: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  addPosts: () => void;
  handleRefresh: () => void;
}

const NewsTemplate = ({
  data,
  isLoadingMutation,
  isLoading,
  isRefreshing,
  addPosts,
  handleRefresh,
}: Template) => {
  return (
    <View style={styles.newsScreenContainer}>
      {data?.length && (
        <FlatList
          testID="news-list"
          data={data}
          keyExtractor={item => item.id.toString()}
          onEndReached={() => addPosts()}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              colors={[THEME.colors.orange]}
              tintColor={THEME.colors.orange}
            />
          }
          renderItem={({item}: {item: any}) => (
            <Card>
              <BoxNews item={item} />
            </Card>
          )}
        />
      )}
      {isLoadingMutation && <Loader />}
      {isLoading && <Loader />}
      {isRefreshing && <Loader />}
    </View>
  );
};

export default NewsTemplate;
