import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
import THEME from '../../utils/constants/Theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {httpGet} from '../../services';
import {useQuery} from 'react-query';
import Dropdown from '../Dropdown';
import {useRefreshOnFocus} from '../../hooks/useRefreshOnFocus';
import {Climate} from '../../models/models';
import ClimateBadge from '../Climate';

const HeaderDefault = ({
  title,
  navigation,
}: {
  title: string;
  navigation: any;
}) => {
  const {data, refetch} = useQuery(['wheather'], () =>
    httpGet<Climate>('climate', ''),
  );
  const insets = useSafeAreaInsets();
  useRefreshOnFocus(refetch);
  return (
    <View
      style={{
        backgroundColor: THEME.colors.mategreen,
        paddingTop: insets.top,
      }}>
      <View style={styles.containerAppHeader}>
        <View style={styles.containerAppHeaderLogo}>
          <View style={styles.containerWelcomeHeader}>
            <Ionicon
              name="menu"
              size={32}
              color={THEME.colors.white}
              onPress={() => navigation.openDrawer()}
            />
            <Image
              source={require('../../assets/logo-header.png')}
              style={styles.logoImg}
            />
          </View>
          <View style={styles.climateContainer}>
            {data && <ClimateBadge data={data} />}
          </View>
        </View>
      </View>
      <View style={styles.footerMenuContainer}>
        <View style={styles.footerMenu}>
          <TouchableOpacity
            onPress={() => navigation.jumpTo('News')}
            activeOpacity={0.8}>
            <View
              style={
                title === 'Noticias'
                  ? styles.borderBottomTextActive
                  : styles.borderBottomText
              }>
              <Text style={[styles.textWelcomeHeader]}>Noticias</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.jumpTo('Alerts')}
            activeOpacity={0.8}>
            <View
              style={
                title === 'Alertas'
                  ? styles.borderBottomTextActive
                  : styles.borderBottomText
              }>
              <Text style={[styles.textWelcomeHeader]}>Alertas</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Dropdown />
      </View>
    </View>
  );
};

export default HeaderDefault;
