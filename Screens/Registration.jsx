import React, { useState } from 'react';
import {Button, StyleSheet, TextInput} from 'react-native';
import styled from "styled-components/native";
import {StatusBar} from "expo-status-bar";

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

const RegistrationText = styled.Text`
  font-size: 38px;
  margin-bottom: 16px;
  bottom: 10%;
  align-items: center;
  font-weight: normal;
`

const TextInp = styled.TextInput`
  width: 350px;
  height: 40px;
  border-color: gray;
  border-radius: 10px;
  border-width: 1px;
  margin-bottom: 16px;
`

const CarImage = styled.Image`
  flex: 1;
  width: 430px;
  height: 430px;
`;

const RegistrationScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = () => {
        // Здесь можно добавить логику для отправки данных на сервер
        console.log('Email:', email);
        console.log('Password:', password);
        navigation.navigate("Home");
    };

    return (
        <ScreenView>
            <StatusBar></StatusBar>
            <CarImage source={require('../assets/Image/CarPhotoReg.jpg')}></CarImage>
            <ScreenView_>
                <RegistrationText>Регистрация</RegistrationText>
                <TextInput style={styles.t}
                           placeholder="Email"
                           onChangeText={(text) => setEmail(text)}
                           value={email}
                />
                <TextInput style={styles.t}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <Button title="Зарегистрироваться" onPress={handleRegistration} />
            </ScreenView_>
        </ScreenView>
    );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
    t: {
        width: 350,
        height: 40,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 16,
    }
});
