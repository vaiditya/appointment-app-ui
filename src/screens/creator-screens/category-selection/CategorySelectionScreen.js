import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {If, Then, Else} from 'react-if';
import {GridItemWrapper} from './CategorySelectionScreen.style';
import {CREATOR_PERSONAL_DETAILS} from '../../../constants';

const CategorySelectionScreen = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getAllCategories = () => {
      Promise.resolve(['ABC', 'ABC', 'ABC', 'ABC', 'ABC', 'ABC'])
        .then(res => setCategories(res))
        .catch(err => console.log('Fetching categories error', err));
    };
    getAllCategories();
  }, []);
  return (
    <>
      <If condition={categories?.length > 0}>
        <Then>
          {categories.map((category, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate(CREATOR_PERSONAL_DETAILS)}>
              <GridItemWrapper key={index}>
                <Text>{category}</Text>
              </GridItemWrapper>
            </TouchableOpacity>
          ))}
        </Then>
      </If>
    </>
  );
};

export default CategorySelectionScreen;
