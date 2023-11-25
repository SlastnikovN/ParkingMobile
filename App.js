import { useEffect, useState } from "react";
import {Home} from "./Screens/Home";
import styled from "styled-components/native";
import { Text } from "react-native";

const ScreenView = styled.View`
  flex: 1;
`;

export default function App() {
  const [user, setUser] = useState(null);
  
  const url = new URL('http://79.174.82.190:8888/api/v1/profile?mail=aaaa');


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
  {user ? <Home user={user}/> : <Text>Загрузка...</Text>}
</ScreenView>
  );
}


