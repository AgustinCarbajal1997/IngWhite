import {View, FlatList, RefreshControl} from 'react-native';
import React, {useState} from 'react';
import Card from '../../components/Card';
import BoxNews from '../../components/Boxes/BoxNews';
import {useMutation, useQuery} from 'react-query';
import {httpGet} from '../../services';
import Loader from '../../components/Loader';
import {queryClient} from '../../App';
import THEME from '../../utils/constants/Theme';
import {useRefreshOnFocus} from '../../hooks/useRefreshOnFocus';
import styles from './styles';
import getDate from '../../utils/helpers/date';
import {Post} from '../../models/models';
const News = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const {data, isLoading, refetch, isRefetching} = useQuery(
    ['posts'],
    () => httpGet<Post[]>('api', `/posts?per_page=10&before=${getDate()}`),
    {
      cacheTime: 5000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  );
  useRefreshOnFocus(refetch);
  const {mutate: addPosts, isLoading: isLoadingMutation} = useMutation(
    async () => {
      if (!data || data?.length === 0) {
        return [];
      }
      const newPosts = await httpGet<Post[]>(
        'api',
        `/posts?per_page=10&before=${data[data.length - 1].date}`,
      );
      return newPosts;
    },
    {
      onSuccess: async posts => {
        queryClient.setQueryData('posts', (old: any) => [...old, ...posts]);
      },
    },
  );

  const handleRefresh = () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };

  return (
    <View style={styles.newsScreenContainer}>
      {isLoadingMutation && <Loader />}
      {isLoading && <Loader />}
      {isRefetching && <Loader />}
      {data?.length && (
        <FlatList
          testID="NewsList"
          data={data}
          keyExtractor={item => item.id.toString()}
          onEndReached={() => addPosts()}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
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
    </View>
  );
};

export default News;
