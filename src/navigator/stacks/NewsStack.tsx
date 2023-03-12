import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import News from '../../screens/News';
import HeaderDefault from '../../components/Header/HeaderDefault';
import {getHeaderTitle} from '@react-navigation/elements';
import type {StackNavigationOptions} from '@react-navigation/stack';

type NewsStackParamList = {
  Noticias: undefined;
};

const stackOptions: StackNavigationOptions = {
  title: 'Noticias',
  header: ({navigation, route, options}) => {
    const title = getHeaderTitle(options, route.name);
    return <HeaderDefault title={title} navigation={navigation} />;
  },
};

const Stack = createStackNavigator<NewsStackParamList>();

const NewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Noticias" component={News} options={stackOptions} />
    </Stack.Navigator>
  );
};

export default NewsStack;
