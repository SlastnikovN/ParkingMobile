import React, {useState, useEffect} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import styled from 'styled-components/native';

const Profile = styled.View`
    flex: 1;
    top: 17%;
    left: 11%;
    width: 80%;
    height: 50%; 
    position: absolute;
    background-color: black;
    border-radius: 10px;
`;
const UserName = styled.View`
    flex: 1;
    top: 2%;
    left: 4%;
    width: 95%;
    height: %; 
    position: absolute;
`;
const UserCars = styled.View`
    flex: 2;
    top: 50%;
    left: 4%;
    width: 90%;
    height: %; 
    position: absolute;
`;

const Text_UserName = styled.Text`
    color: white;
    fontSize: 30px;
`;

const Text_UserEmail = styled.Text`
    color: white;
    fontSize: 30px;
`;

const NumCar = styled.Text`
    color: white;
    fontSize: 20px;
`;

export const UserInformation = ({ user }) => {
    console.log("User data in UINF", user)
    if (!user || !user.cars) {
        return <Text>Данные пользователя не загружены</Text>;
    }

    console.log("User UINF", user);
    user.cars.forEach(car => console.log(car));

    return (
        <Profile>
            <UserName>
                <Text_UserName >Пользователь: {user.username}</Text_UserName>
                <Text_UserEmail >Email: {user.email}</Text_UserEmail>
            </UserName>
            <UserCars>
                <Text_UserName >Зарегистрированые автомобили:</Text_UserName>
                <FlatList
                data={user.cars}
                // keyExtractor={({item}) => item.car_id?.toString() ?? index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <NumCar>Номер Авто: {item.car_number ?? 'Н/Д'}</NumCar>
                        {/* <Text>Время начала: {item.time?.start_time ?? 'Н/Д'}</Text>
                        <Text>Время окончания: {item.time?.end_time ?? 'Н/Д'}</Text> */}
                    </View>
                )}
            />
            </UserCars>
        </Profile>
    );
};
