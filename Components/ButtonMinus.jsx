import styled from 'styled-components/native';


const ButtonComponentMinus = styled.Image`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 570px;
  left: 350px;
`;

const Touch = styled.TouchableOpacity`
  position: absolute;
`;
export const ButtonMinus = () => {
    return <Touch>
        <ButtonComponentMinus source={require('../assets/ButtonMinus.png')}/>
    </Touch>



}
