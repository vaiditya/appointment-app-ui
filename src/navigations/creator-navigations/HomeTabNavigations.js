import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import GenerationStackComponent from './GenerationStack';

const CreatorTabs = createBottomTabNavigator();
const HomeTabNavigations = () => {
  return (
    <NavigationContainer>
      <CreatorTabs.Navigator initialRouteName="Category">
        <CreatorTabs.Screen
          name="Category"
          component={GenerationStackComponent}
        />
        <CreatorTabs.Screen
          name="Upcoming"
          component={GenerationStackComponent}
        />
      </CreatorTabs.Navigator>
    </NavigationContainer>
  );
};

export default HomeTabNavigations;
