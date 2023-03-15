import React from 'react';
import {useQuery} from 'react-query';
import {httpGet} from '../../services';
import {useRefreshOnFocus} from '../../hooks/useRefreshOnFocus';
import {Alert} from '../../models/models';
import AlertsTemplate from '../../templates/Alerts';

const Alerts = () => {
  const {data, isLoading, refetch, isRefetching} = useQuery(['alerts'], () =>
    httpGet<Alert[]>('alerts', ''),
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
