import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Card from '../../components/Card';
import BoxAlert from '../../components/Boxes/BoxAlerts';
import {useQuery} from 'react-query';
import {httpGet} from '../../services';
import Loader from '../../components/Loader';
import THEME from '../../utils/constants/Theme';
import {useRefreshOnFocus} from '../../hooks/useRefreshOnFocus';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AlertMessage from '../../components/Boxes/BoxAlerts/AlertMessage';
import {Alert} from '../../models/models';

const Alerts = () => {
  const {data, isLoading, refetch, isRefetching} = useQuery(['alerts'], () =>
    httpGet<Alert[]>('alerts', ''),
  );
  useRefreshOnFocus(refetch);
  return (
    <View style={styles.alertsScreenContainer}>
      {isRefetching && <Loader />}
      {isLoading && <Loader />}
      <TouchableOpacity onPress={() => refetch()}>
        <View style={styles.updateButtonContainer}>
          <Ionicons
            name="refresh-outline"
            size={15}
            color={THEME.colors.orange}
          />
          <Text style={styles.updateButton}>Actualizar</Text>
        </View>
      </TouchableOpacity>
      {data?.length === 0 && (
        <AlertMessage message="No hay alertas activas para mostrar" />
      )}

      {data && data?.length > 0 && (
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Card>
              <BoxAlert item={item} />
            </Card>
          )}
        />
      )}
    </View>
  );
};

export default Alerts;
