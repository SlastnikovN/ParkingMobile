import React, {Touch} from 'react';
import {View, Text, Button, FlatList, Image} from 'react-native';
import styled from 'styled-components/native';

const ProfileContainer = styled.View`
    flex: 1;
    top: 23%;
    left: 11%;
    width: 80%;
    height: 50%; 
    position: absolute;
    background-color: white;
    border-radius: 30px;
`;

const View_Avatar = styled.View`
    flex: 1;
    top: 15%;
    left: 13%;
    width: 75%;
    height: 45%; 
    position: absolute;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
`;

const Image_Avatar = styled.View`
    top: -20%;
    left: 0%;
    width: 58%;
    height: 70%;
    border-radius: 10px;    
    background-color: green;
`;

const Text_Regcars = styled.Text`
    bottom: -20%;
    font-size: 18px;
    text-align: center;
    font-weight:bold
`;

const View_Cars = styled.View`
    flex: 1;
    top: 55%;
    left: 8%;
    width: 85%;
    height: 45%;
    position: absolute;
    align-items: center;
`;

const Text_username = styled.Text`
    font-size: 24px;
    top: -10%;
    font-weight:bold;
`;

const Text_email = styled.Text`
    font-size: 10px;
    top: -10%;
`;

const View_ButtonClouse = styled.View`
    top: 4%;
    left: 85%;
    width: 10%;
    height: 7%;
    border-radius: 10px;    
    background-color: red;
`;

const View_CarsNum = styled.View`
    top: 24%;
    left: 23%;
    width: 40%;
    height: 20%;
    background-color: blue;
`;

const View_CarsNums = styled.View`
    top: -2%;
    left: -17%;
    width: 85%;
    height: 67%;
    border-radius: 10px;    
    flex-direction: row;
    justify-content: space-between;

`;

export const UserInformation = ({ user, onPress }) => {
    console.log("User data in UINF", user)
    if (!user || !user.cars) {
        return <Text>Данные пользователя не загружены</Text>;
    }

    console.log("User UINF", user);
    user.cars.forEach(car => console.log(car));

    return (
        <ProfileContainer>
            <View_ButtonClouse>
                {/* <Button source = {require('../assets/Image/ButtonUser.png')}/> */}
            </View_ButtonClouse>
            <View_Avatar>
                <Image_Avatar></Image_Avatar>
                <Text_username>{user.username}</Text_username>
                <Text_email>Email: {user.email}</Text_email>
            </View_Avatar>
            <View_Cars>
                <Text_Regcars>Зарегистрированые автомобили</Text_Regcars>
                <View_CarsNums>
                    <View_CarsNum>

                    </View_CarsNum>

                    <View_CarsNum>

                    </View_CarsNum>

                </View_CarsNums>
                
            </View_Cars>
            
        </ProfileContainer>
    );
};
