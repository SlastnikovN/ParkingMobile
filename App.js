import {Home} from "./Screens/Home";
import styled from "styled-components/native";
import {View} from "react-native";

const ScreenView = styled.View`
  flex: 1;
  //background-color: brown;
`

export default function App() {
  return (
<ScreenView>
<Home></Home>
</ScreenView>
  );
}


