//App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import PassengerLogin from './PassengerLogin';
import PassengerSignUp from './PassengerSignUp';
import PassengerMenu from './PassengerMenu';
import DriverLogin from './DriverLogin';
import DriverSignUp from './DriverSignUp';
import DriverMenu from './DriverMenu';
import DriverProfile from './DriverProfile';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Driver Login" component={DriverLogin} />
        <Stack.Screen name="Driver Signup" component={DriverSignUp} />
        <Stack.Screen name="Driver Menu" component={DriverMenu} />

        <Stack.Screen name="Passenger Login" component={PassengerLogin} />
        <Stack.Screen name="Passenger Signup" component={PassengerSignUp} />
        <Stack.Screen name="Passenger Menu" component={PassengerMenu} />

        <Stack.Screen name="My Profile" component={DriverProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
