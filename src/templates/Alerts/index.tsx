import {View, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import Loader from '../../components/Loader';
import AlertMessage from '../../components/Boxes/BoxAlerts/AlertMessage';
import Card from '../../components/Card';
import BoxAlert from '../../components/Boxes/BoxAlerts';
import {Alert} from '../../models/models';
import THEME from '../../utils/constants/Theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';

interface Template {
  data: Alert[] | undefined;
  isRefetching: boolean;
  isLoading: boolean;
  refetch: () => void;
}

const AlertsTemplate = ({data, isRefetching, isLoading, refetch}: Template) => {
  return (
    <View style={styles.alertsScreenContainer}>
      {isRefetching && <Loader />}
      {isLoading && <Loader />}
      <View style={styles.updateButtonContainer}>
        <Button onPress={() => refetch()} text="Actualizar" color="orange">
          <Ionicons
            name="refresh-outline"
            size={15}
            color={THEME.colors.orange}
          />
        </Button>
      </View>

      {data && data?.length === 0 && (
        <AlertMessage message="No hay alertas activas para mostrar" />
      )}

      {data && data?.length > 0 && (
        <FlatList
          testID="alerts-list"
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

export default AlertsTemplate;
