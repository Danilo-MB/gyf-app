import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import MainScreen from '../MainScreen';
import CommentScreen from '../CommentScreen';
import { colors } from '../../styles';

const Stack = createStackNavigator();

const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen
          name='MainScreen'
          title=""
          component={MainScreen}
          options={{
            headerShown: true,
            headerTitle: 'Posts',
            headerTitleAlign: 'center',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}    
        />
        <Stack.Screen
          name='CommentScreen'
          title=""
          component={CommentScreen}
          options={{
            headerShown: true,
            headerTitle: 'Comments',
            headerTitleAlign: 'center',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}   
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;