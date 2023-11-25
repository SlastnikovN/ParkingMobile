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



export const UserInformation = ({ user }) => {
    console.log("User data in UINF", user)
    if (!user || !user.cars) {
        return <Text>Данные пользователя не загружены</Text>;
    }

    console.log("User UINF", user);
    user.cars.forEach(car => console.log(car));
    
    return (
        <Profile>
            <Text>Пользователь: {user.username}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Машины:</Text>
            <FlatList
                data={user.cars}
                keyExtractor={(item) => item.car_id?.toString() ?? index.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>Машина: {item.car_number ?? 'Н/Д'}</Text>
                        <Text>Время начала: {item.time?.start_time ?? 'Н/Д'}</Text>
                        <Text>Время окончания: {item.time?.end_time ?? 'Н/Д'}</Text>
                    </View>
                )}
            />
        </Profile>
    );
};