import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NewsStack, AlertsStack} from '../stacks';
import CustomDrawerContent from '../../components/CustomDrawerContent';
import THEME from '../../utils/constants/Theme';
import {Dimensions} from 'react-native';

type DrawerParamList = {
  Alerts: undefined;
  News: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: THEME.colors.orange,
        drawerActiveTintColor: THEME.colors.orange,
        drawerInactiveTintColor: THEME.colors.black,
        drawerInactiveBackgroundColor: THEME.colors.orange,
        drawerStyle: {
          width: Dimensions.get('window').width * 0.78,
          backgroundColor: '#ffffff',
        },
        drawerLabelStyle: {
          fontSize: 13,
          color: THEME.colors.white,
        },
      }}
      drawerContent={CustomDrawerContent}>
      <Drawer.Screen
        name="News"
        component={NewsStack}
        options={{title: 'Noticias'}}
      />
      <Drawer.Screen
        name="Alerts"
        component={AlertsStack}
        options={{title: 'Alertas'}}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
