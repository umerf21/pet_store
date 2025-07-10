/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/navigator/RootStack';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // ✅ use this
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

function App() {

  // return (
  //   <HomeScreen/>
  // )
  return (
    
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
