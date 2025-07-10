// src/navigator/BottomTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MapsScreen from '../screens/MapsScreen/MapsScreen';
import { ROOT_PAGE_URL } from './navigation.types';
import { Colors, Images } from '../theme';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={ROOT_PAGE_URL.Home}
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.images.home}
              style={{
                tintColor: focused ? Colors.primary : Colors.black
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name={ROOT_PAGE_URL.Maps}
        component={MapsScreen}
        options={{
          title: 'Map',
          tabBarIcon: ({focused}) => (
            <Image
              source={Images.images.menu}
              style={{
                tintColor: focused ? Colors.primary : Colors.black
              }}
            />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
