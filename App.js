import { useEffect, useState } from "react";
import {Home} from "./Screens/Home";
import styled from "styled-components/native";
import {StyleSheet} from "react-native";
import {StatusBar} from 'expo-status-bar';
import Registration from "./Screens/Registration";

const ScreenView = styled.View`
  flex: 1;
`;

export default function App() {
  const [user, setUser] = useState(null);
  const url = new URL('http://79.174.82.190:8888/api/v1/profile?mail=example@example.com');

const getDataUsingGet = () => {
    fetch(url, {
        method: 'GET',
  })
    .then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            alert('Ошибка при запросе данных');
            console.error('Ошибка при запросе данных:', response.status.body)
        }
    })
    .then((responseJson) => {
        if (responseJson) {
            alert(JSON.stringify(responseJson));
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
<ScreenView>
  <StatusBar style = "auto"></StatusBar>
    <Home></Home>
</ScreenView>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: 'white',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#f4511e',
    padding: 10,
    marginVertical: 10,
  },
});

