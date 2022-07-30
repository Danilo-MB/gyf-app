import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../MainScreen';
import CommentScreen from '../CommentScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShown: false,
          unmountOnBlur: true,
        }}
      >
        <Stack.Screen
          name='MainScreen'
          title=""
          component={MainScreen}
        />
        <Stack.Screen
          name='CommentScreen'
          title=""
          component={CommentScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;