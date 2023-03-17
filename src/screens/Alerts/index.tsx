import React from 'react';
import {useRefreshOnFocus} from '../../hooks/useRefreshOnFocus';
import {Alert} from '../../models/models';
import AlertsTemplate from '../../templates/Alerts';
import useFetch from '../../hooks/useFetch';

const Alerts = () => {
  const {data, refetch, isLoading, isRefetching} = useFetch<Alert[]>(
    'alerts',
    '',
    'alerts',
  );

  useRefreshOnFocus(refetch);
  return (
    <AlertsTemplate
      data={data}
      isLoading={isLoading}
      isRefetching={isRefetching}
      refetch={refetch}
    />
  );
};

export default Alerts;
