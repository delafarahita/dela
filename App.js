import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native'
import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import TennisApp1 from './src/TennisApp1';
import TennisApp2 from './src/TennisApp2';

const Stack = createStackNavigator();

function App() {
  return (
    // <Text>Test</Text>
    // <TennisApp1></TennisApp1>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="satu" component={TennisApp1}/>
        <Stack.Screen name="dua" component={TennisApp2}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
