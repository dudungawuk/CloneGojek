import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,createSwitchNavigator } from '@react-navigation/stack';
import App from '../../../App';
import { HomeScreen,GetVoucherScreen,Orders,Help,Inbox,Account,scanQRcode } from '../../containers/pages';

function Router() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName='Home' 
        screenOptions={{
        headerShown: false,
        animationEnabled: false}}>
        <Stack.Screen name="Home" component={HomeScreen} headermode= 'none' />
        <Stack.Screen name="scanQRcode" component={scanQRcode} headermode= 'none' />
        <Stack.Screen name="GetVoucherScreen" component={GetVoucherScreen} headermode= 'none' />
        <Stack.Screen name="Help" component={Help} headermode= 'none' />
        <Stack.Screen name="Account" component={Account} headermode= 'none' />
        <Stack.Screen name="Orders" component={Orders} headermode= 'none' />
        <Stack.Screen name="Inbox" component={Inbox} headermode= 'none' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

 

export default Router;
