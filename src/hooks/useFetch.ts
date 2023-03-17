import {useQuery} from 'react-query';
import {Config, httpGet} from '../services';

const useFetch = <T>(url: keyof Config, endpoint: string, keyCache: string) => {
  const {data, isLoading, refetch, isRefetching} = useQuery(
    [keyCache],
    () => httpGet<T>(url, endpoint),
    {
      cacheTime: 5000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
    },
  );

  return {
    data,
    isLoading,
    refetch,
    isRefetching,
  };
};

export default useFetch;
