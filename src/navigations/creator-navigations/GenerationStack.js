import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import CategorySelectionScreen from '../../screens/creator-screens/category-selection';
import PersonalDetailsScreen from '../../screens/creator-screens/personal-details/PersonalDetailsScreen';
import {CREATOR_PERSONAL_DETAILS, CREATOR_CATEGORIES} from '../../constants';

const GenerationStack = createStackNavigator();
const GenerationStackComponent = () => {
  return (
    <GenerationStack.Navigator initialRouteName={CREATOR_CATEGORIES}>
      <GenerationStack.Screen
        name={CREATOR_CATEGORIES}
        component={CategorySelectionScreen}
      />
      <GenerationStack.Screen
        name={CREATOR_PERSONAL_DETAILS}
        component={PersonalDetailsScreen}
      />
    </GenerationStack.Navigator>
  );
};

export default GenerationStackComponent;
