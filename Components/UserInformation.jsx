import React, {useState} from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import styled from 'styled-components/native';

const Profile = styled.View`
    flex: 1;
    margin-top: 35%;
    margin-left: 10%;
    width: 80%;
    height: 40%; 
    position: absolute;
    background-color: #333;
    border-radius: 10px;
    padding: 20px;
`;

const UserInfoContainer = styled.View`
    border: 1px solid #fff;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
`;

const CarListContainer = styled.ScrollView`
    border: 1px solid #fff;
    padding: 10px;
    border-radius: 5px;
`;

const TextTitle = styled.Text`
    color: white;
    font-size: 20px;
    margin-bottom: 10px;
`;

const TextInfo = styled.Text`
    color: white;
    font-size: 23px;
    margin-bottom: 5px;
`;

const CarItem = styled.View`
    padding: 10px;
    margin-bottom: 5px;
    border-bottom-width: 1px;
    border-color: #ddd;
`;

export const UserInformation = ({ user }) => {
    const [expandedCarIds, setExpandedCarIds] = useState([]);

    const toggleExpandCar = (carId) => {
        setExpandedCarIds(prevIds =>
            prevIds.includes(carId) ? prevIds.filter(id => id !== carId) : [...prevIds, carId]
        );
    };

    if (!user || !user.cars) {
        return <TextInfo>Данные пользователя не загружены</TextInfo>;
    }

    return (
        <Profile>
            <ScrollView>
                <TextTitle>Пользователь:</TextTitle>
                <UserInfoContainer>
                    <TextTitle>{user.username}</TextTitle>
                </UserInfoContainer>
                <TextInfo>Email:</TextInfo>
                <UserInfoContainer>
                    <TextTitle>{user.email}</TextTitle>
                </UserInfoContainer>
                <TextTitle>Зарегистрированные автомобили:</TextTitle>
                {user.cars.map((car, index) => (
                    <TouchableOpacity key={index} onPress={() => toggleExpandCar(car.car_id)}>
                        <CarItem>
                            <TextInfo>Номер авто: {car.car_number}</TextInfo>
                            {/* Дополнительная информация о машине (если нужно) */}
                            {expandedCarIds.includes(car.car_id) && (
                                <View>
                                    {/* Сюда можно добавить дополнительные данные о машине */}
                                </View>
                            )}
                        </CarItem>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </Profile>
    );
};