import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

const CarNumbersContainer = styled.View`
  flex-direction: row; 
  flex-wrap: wrap; 
  justify-content: flex-start; 
  align-items: center; 
  padding: 10px;
`;

const CarNumber = styled.View`
  background-color: #007AFF; 
  border-radius: 10px; 
  padding: 8px 16px; 
  margin: 5px; 
  box-shadow: 4px 4px 5px gray;
`;

const CarNumberText1 = styled.Text`
  color: white; 
  font-size: 20px; 
`;
const CarNumberText2 = styled.Text`
  color: #007AFF; 
  font-size: 20px; 
`;

const AddCarButton = styled(TouchableOpacity)`
  border: dashed 2px #007AFF;
  border-radius: 10px; 
  padding: 8px 16px; 
  margin: 5px; 
`;

// Компонент для отображения номеров машин и кнопки добавления
export const CarNumbers = ({ cars, onAddCarPress }) => {
  return (
    <CarNumbersContainer>
      {cars.map((car, index) => (
        <CarNumber key={index}>
          <CarNumberText1>{car.car_number}</CarNumberText1>
        </CarNumber>
      ))}
      <AddCarButton onPress={onAddCarPress}>
        <CarNumberText2>+</CarNumberText2>
      </AddCarButton>
    </CarNumbersContainer>
  );
};