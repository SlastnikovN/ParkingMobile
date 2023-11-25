import { useEffect, useState } from "react";
import {Home} from "./Screens/Home";
import styled from "styled-components/native";
<<<<<<< Updated upstream
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

=======
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import Registration from "./Screens/Registration";
const ScreenView = styled.View`
  flex: 1;
`

export default function App() {
  /*const data = {
    mail: "a"
  }
  const getDataUsingGet = () => {
    //GET request
    const url = 'http://79.174.82.190:8888/api/v1/profile?mail=aaa';
    fetch(url, {
      method: 'GET',
      data: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },


    })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else if (response.status === 422) {
            // Обработка ошибки 422
            alert('Ошибка валидации данных');
            console.error('Ошибка при валидации данных:', response.status);
          } else {
            // Обработка других ошибок
            alert('Ошибка при запросе данных');
            console.error('Ошибка при запросе данных:', response.status);
          }
        })
        .then((responseJson) => {
          if (responseJson) {
            alert(JSON.stringify(responseJson));
            console.log(responseJson);
          }
        })
        .catch((error) => {
          alert(JSON.stringify(error));
          console.error(error);
        });
  }*/
>>>>>>> Stashed changes
  return (
<ScreenView>
  {user ? <Home user={user}/> : <Text>Загрузка...</Text>}
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

