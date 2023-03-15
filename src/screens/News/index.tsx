import React, {useState} from 'react';
import {useMutation, useQuery} from 'react-query';
import {httpGet} from '../../services';
import {queryClient} from '../../App';
import getDate from '../../utils/helpers/date';
import {Post} from '../../models/models';
import NewsTemplate from '../../templates/News';
const News = () => {
  const [isRefreshing, setRefreshing] = useState<boolean>(false);
  const {data, isLoading, refetch} = useQuery(
    ['posts'],
    () => httpGet<Post[]>('api', `/posts?per_page=10&before=${getDate()}`),
    {
      cacheTime: 5000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  );
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
    <NewsTemplate
      data={data}
      isLoading={isLoading}
      isLoadingMutation={isLoadingMutation}
      isRefreshing={isRefreshing}
      handleRefresh={handleRefresh}
      addPosts={addPosts}
    />
  );
};

export default News;
