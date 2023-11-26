import React, {useEffect} from 'react';
import {Text,} from 'react-native';
import styled from 'styled-components/native';
import { ButtonCloseProfile } from './ButtonCloseProfile';
import { CarNumbers } from './CarNumbers';
import { ButtonLogout } from './ButtonLogout';
import { useNavigation } from '@react-navigation/native';

const ProfileContainer = styled.View`
    flex: 1;
    top: 23%;
    left: 11%;
    width: 80%;
    height: 50%; 
    position: absolute;
    background-color: white;
    border-radius: 30px;
    box-shadow: 5px 5px 5px black;
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

const Image_Avatar = styled.Image`
    top: -20%;
    left: 0;
    width: 58%;
    height: 70%;
    border-radius: 10px;
`;

const Text_Regcars = styled.Text`
    bottom: -20%;
    font-size: 18px;
    text-align: center;
    font-weight:bold
`;

const View_Сars = styled.View`
    flex: 1;
    top: 55%;
    left: 8%;
    width: 85%;
    height: 45%;
    position: absolute;
    align-items: center;
`;

const View_СarsPanel = styled.View`
    flex: 1;
    top: 40%;
    left: 6%;
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
    top: -3%;
    left: 85%;
    width: 10%;
    height: 7%;
`;

const View_ButtonLogout = styled.View`
    top: 4%;
    left: 4%;
    width: 10%;
    height: 7%;
`;

export const UserInformation = ({ user, isProfileOpen, setIsProfileOpen, onAddCarPress}) => {
    const navigation = useNavigation();
    console.log("User data in UINF", user)
    if (!user || !user.cars) {
        return <Text>Данные пользователя не загружены</Text>;
    }

    console.log("User UINF", user);
    user.cars.forEach(car => console.log(car));

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
    };
    const clickLogin = () =>{
        navigation.navigate("Login");
    }

    return (
        
        <ProfileContainer>
                <View_ButtonLogout>
                    <ButtonLogout onPress={clickLogin} title = "ClickLogin"/>
                 </View_ButtonLogout>                
                <View_ButtonClouse>
                    <ButtonCloseProfile onPress={toggleProfile} title = "Toggle Profile"/>
                 </View_ButtonClouse>
                 <View_Avatar>
                     <Image_Avatar source={require("../assets/Image/ProfilePhoto.jpg")}></Image_Avatar>
                     <Text_username>{user.username}</Text_username>
                     <Text_email>Email: {user.email}</Text_email>
                 </View_Avatar>
                 <View_Сars>
                    <Text_Regcars>Зарегистрированые автомобили</Text_Regcars>
                    <View_СarsPanel>
                        <CarNumbers cars={user.cars} onAddCarPress={onAddCarPress}/>
                    </View_СarsPanel>
                 </View_Сars>  
        </ProfileContainer>
    );
};
