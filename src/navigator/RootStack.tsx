import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROOT_PAGE_URL } from './navigation.types';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
// import { screenoptions } from './navigation.config';
import PaymentScreen from '../screens/PaymentScreen/PaymentScreen';
import PetDetailsScreen from '../screens/PetDetailsScreen/PetDetailsScreen';
import MapsScreen from '../screens/MapsScreen/MapsScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { screenoptions } from './navigation.config';
import TabsNavigator from './TabsNavigator';

const RootStack = () => {

    const Stack = createNativeStackNavigator();
    const inititalRoute = ROOT_PAGE_URL.Home;    
    
    return (
    <SafeAreaProvider>
    <SafeAreaView style={{flex:1}}>
    <Stack.Navigator screenOptions={screenoptions}>
      <Stack.Screen name={ROOT_PAGE_URL.Home} component={TabsNavigator} />
      <Stack.Screen name={ROOT_PAGE_URL.Payment} component={PaymentScreen} />
      <Stack.Screen name={ROOT_PAGE_URL.PetDetails} component={PetDetailsScreen} />
      <Stack.Screen name={ROOT_PAGE_URL.Maps} component={MapsScreen} />
    </Stack.Navigator>
    </SafeAreaView>
    </SafeAreaProvider>
   
  )
}

export default RootStack