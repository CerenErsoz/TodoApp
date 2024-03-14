
import React from 'react';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import store from './Redux/Store';
import TodoApp from './src/TodoApp';
import SearchScreen from './Screens/SearchScreen'; 

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TodoApp">
          <Stack.Screen name="TodoApp" component={TodoApp} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
