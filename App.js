import { useEffect, useState } from "react";
import {Home} from "./Screens/Home";
import styled from "styled-components/native";
import Registration from "./Screens/Registration";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from "./Screens/Login";
import {UserInformation} from "./Components/UserInformation";

const Stack = createNativeStackNavigator();
const ScreenView = styled.View`
  flex: 1;
`;

export default function App() {
    const [user, setUser] = useState(null);
    const url = new URL('http://79.174.82.190:8888/api/v1/profile?user_id=123');
    const getDataUsingGet = () => {
        fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    alert('Ошибка при запросе данных');
                    console.error('Ошибка при запросе данных:', response.status)
                }
                if (response.status === 500) {
                    alert('Ошибка сервера');
                    console.error('Ошибка сервера:', response.status)
                }
            })
            .then((responseJson) => {
                if (responseJson) {
                    setUser(responseJson);
                    console.log(responseJson);
                }
            })
            .then((responseJson) => {
                console.log("User data from API", responseJson);
            })
            .catch((error) => {
                alert(JSON.stringify(error));
                console.error(error);
            });
    };

    useEffect(() => {
        getDataUsingGet();
    }, []);

    console.log("User App", user);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName= "Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} initialParams={{user: user}}/>
                <Stack.Screen name="Registration" component={Registration}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="UserInformation" component={UserInformation}/>
            </Stack.Navigator></NavigationContainer>
    );
}

