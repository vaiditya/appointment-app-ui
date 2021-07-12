import React from 'react';
import {Text} from 'react-native';
import {If, Then, Else} from 'react-if';
import {CREATOR} from './src/constants';
import HomeTabNavigations from './src/navigations/creator-navigations/HomeTabNavigations';

const userType = CREATOR;

const App = () => {
  return (
    <If condition={userType === CREATOR}>
      <Then>
        <HomeTabNavigations />
      </Then>
      <Else>
        <></>
      </Else>
    </If>
  );
};

export default App;
