import React, { useState } from 'react';
import {StyleSheet, TextInput, TouchableOpacity,Text} from 'react-native';
import styled from "styled-components/native";

const ScreenView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ScreenView_ = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ScreenButtonView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const RegistrationText = styled.Text`
  font-size: 34px;
  margin-bottom: 3%;
  bottom: 8%;
  align-items: center;
  font-weight: normal;
`

const CarImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const RegistrationScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegistration = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        //Сервер
        const apiUrl = 'http://79.174.82.190:8888/api/v1/registration';
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mail: email,
                password: password,
            }),
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json() &&  navigation.navigate("Home");;
                }else if (response.status === 409) {
                    alert('Пользователь с данным email уже существует');
                    console.error('Пользователь с данным email уже существует:', response.status)
                } else if (response.status === 500) {
                    alert('Ошибка сервера');
                    console.error('Ошибка сервера:', response.status)
                }
            })
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const ClickReg = () => {
        navigation.navigate("Login");
    }
    return (
        <ScreenView>
            <CarImage source={require('../assets/Image/CarPhotoReg.jpg')}></CarImage>
            <ScreenView_>
                <RegistrationText>Регистрация пользователя</RegistrationText>
                <TextInput style={styles.TextInp}
                           placeholder=" Введите Email"
                           onChangeText={(text) => setEmail(text)}
                           value={email}
                />
                <TextInput style={styles.TextInp}
                           placeholder="Введите Password"
                           secureTextEntry
                           onChangeText={(text) => setPassword(text)}
                           value={password}
                />
                <ScreenButtonView>
                    <TouchableOpacity onPress={handleRegistration}>
                        <Text style={styles.Btn}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ClickReg}>
                        <Text style={styles.Btn}>Назад</Text>
                    </TouchableOpacity>
                </ScreenButtonView>
            </ScreenView_>
        </ScreenView>
    );
};
export default RegistrationScreen;
const styles = StyleSheet.create({
    TextInp: {
        width: 320,
        height: 40,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    Btn:{
        color:'blue',
        fontSize: 18,
        marginLeft: 20,
        marginRight: 20,
    }
});
