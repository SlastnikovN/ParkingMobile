import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';
import styled from "styled-components/native";


const CarImage = styled.Image`
  flex: 1;
  width: 430px; 
  height: 430px;
`;


const RegistrationScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = () => {
        // Здесь можно добавить логику для отправки данных на сервер
        console.log('Email:', email);
        console.log('Password:', password);
        // Здесь можно  добавить проверки и обработку ошибок

        // После успешной регистрации можно перенаправить пользователя на другой экран
    };

    return (
        <View style={styles.container}>
            <CarImage source={require('../assets/Image/CarPhotoReg.jpg')}></CarImage>

            <View style={styles.container1}>
                <Text style={styles.title}>Регистрация</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <Button title="Зарегистрироваться" onPress={handleRegistration} />
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",

    },
    title: {
        fontSize: 38,
        marginBottom: 16,
        bottom: '10%',
        alignItems: "center",
        fontWeight: "normal",
    },
    input: {
        width: 350,
        height: 40,
        borderColor: 'gray',
        borderRadius: 10,
        borderWidth: 1,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
});

export default RegistrationScreen;
