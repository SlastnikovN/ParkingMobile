import styled from 'styled-components/native';


const ButtonComponentPlus = styled.Image`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 500px;
  left: 350px;
`;

const Touch = styled.TouchableOpacity`
  position: absolute;
`;
export const ButtonPlus = () => {
    return <Touch>
        <ButtonComponentPlus source={require('../assets/ButtonPlus.png')}/>
    </Touch>



}
