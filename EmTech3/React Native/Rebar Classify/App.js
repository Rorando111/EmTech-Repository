import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Home from './components/home';  // Added Home component
import Batch from './components/batch';
import Results from './components/results';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerTitle: 'Login' }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerTitle: 'Home' }} 
        />
        <Stack.Screen 
          name="Batch" 
          component={Batch} 
          options={{ headerTitle: 'Batch Selection' }} 
        />
        <Stack.Screen 
          name="Results"  // Updated name to "Results"
          component={Results} 
          options={{ headerTitle: 'Rebar Information' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
