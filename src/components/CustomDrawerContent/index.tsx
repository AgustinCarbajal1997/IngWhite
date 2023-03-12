import React, {Fragment} from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import ListenToUs from '../ListenToUs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import * as Linking from 'expo-linking';
import Notifications from '../Notifications';
import drawerItems from '../../utils/constants/drawerItems';

const CustomDrawerContent = props => {
  const insets = useSafeAreaInsets();
  const handleLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.contentContainerStyle}>
      <View style={[styles.container, {paddingTop: insets.top}]}>
        <View>
          <View style={styles.containerLogo}>
            <Image
              source={require('../../assets/logo-menu.png')}
              style={styles.img}
            />
          </View>
          <DrawerItemList {...props} />
          {drawerItems.map(item => (
            <Fragment key={item.url}>
              <DrawerItem
                labelStyle={styles.labelStyle}
                label={item.title}
                onPress={() => handleLink(item.url)}
              />
            </Fragment>
          ))}
          <ListenToUs />
        </View>
        <Notifications />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
