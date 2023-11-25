import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
});

export default RegistrationScreen;
