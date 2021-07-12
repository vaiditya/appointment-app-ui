import React, {useEffect, useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {If, Then, Else} from 'react-if';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Picker} from '@react-native-picker/picker';
import {ScreenContainer} from './PersonalDetailsScreen.style';

const PersonalDetailsScreen = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [enableGoogleLocationInput, setEnableGoogleLocationInput] =
    useState(true);
  useEffect(() => {
    const getAllLocations = () => {
      Promise.resolve(['Virar', 'Kandivali'])
        .then(res => setLocations(res))
        .catch(err => console.log('Fetching categories error', err));
    };
    getAllLocations();
  }, []);

  return (
    <ScreenContainer>
      <If condition={locations?.length > 0}>
        <Then>
          <Picker
            selectedValue={selectedLocation}
            onValueChange={(location, itemIndex) =>
              setSelectedLocation(location)
            }>
            {locations.map((location, index) => (
              <Picker.Item label={location} value={location} key={index} />
            ))}
          </Picker>
        </Then>
      </If>
      <BouncyCheckbox
        size={25}
        fillColor="#007aff"
        unfillColor="#FFFFFF"
        text="Location not listed"
        iconStyle={{borderColor: '#007aff'}}
        textStyle={{
          fontFamily: 'SFUIText-Medium',
          textDecorationLine: 'none',
        }}
        onPress={isChecked => {
          setEnableGoogleLocationInput(isChecked);
        }}
      />
      <If condition={enableGoogleLocationInput}>
        <Then>
          <TextInput placeholder="Search it on google" />
        </Then>
      </If>
    </ScreenContainer>
  );
};

export default PersonalDetailsScreen;
