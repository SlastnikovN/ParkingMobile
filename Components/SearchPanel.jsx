import React, { useState } from 'react';
import { View, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import ButtonMagnifier from './ButtonMagnifier'; 

const ScreenView_ = styled.View`
  flex: 1;
  width: 20%;
  height: 20%;
  background-color: red;
  justify-content: center;
  align-items: center;
`;

export const SearchPanel = ({onPress}) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchVisible(!isSearchVisible);
    console.log("isSearchVisible", isSearchVisible);
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
    setIsSearchVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ScreenView_>
        {isSearchVisible && (
            <TextInput
                style={{  height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10 }}
                placeholder="Введите запрос для поиска..."
            />
            )}
      </ScreenView_>
    </TouchableWithoutFeedback>
  );
};