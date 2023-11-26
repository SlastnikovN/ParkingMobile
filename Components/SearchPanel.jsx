import React, { useState } from 'react';
import {StyleSheet, TextInput, TouchableOpacity,Text} from 'react-native';
import styled from 'styled-components/native';

const ScreenView_ = styled.View`
  flex: 1;
  top: 55%;
  left: 17%;
  width: 70%;
  height: 5%;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const SearchPanel = ({ }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchVisible(isSearchVisible => {
        console.log("Панель поиска теперь:", !isSearchVisible);
        return !isSearchVisible;
    });
  };

  return (
      <ScreenView_>
            <TextInput 
                style={styles.TextInp}
                placeholder="Поиск"
            />
      </ScreenView_>
  );
};

const styles = StyleSheet.create({
  TextInp: {
      width: 320,
      height: 60,
      borderColor: 'gray',
      borderRadius: 10,
      borderTopColor: '#007AFF',
      borderBottomColor: '#007AFF',
      borderRightColor: '#007AFF',
      borderLeftColor: '#007AFF',
      borderWidth: 5,
      marginBottom: 16,
      paddingHorizontal: 16,
      fontSize: 24,
      backgroundColor: 'white',
  },
});