import React, {Fragment} from 'react';
import {View, Image, Linking} from 'react-native';
import styles from './styles';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

import ListenToUs from '../ListenToUs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Notifications from '../Notifications';
import drawerItems from '../../utils/constants/drawerItems';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const insets = useSafeAreaInsets();
  const handleLink = async (url: string) => {
    await Linking.openURL(url);
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
