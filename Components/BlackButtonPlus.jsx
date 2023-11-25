import styled from 'styled-components/native';

const ButtonComponentBlackPlus = styled.Image`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 760px;
  left: 280px;
`;

const Touch = styled.TouchableOpacity`
  position: absolute;
`;
export const BlackButtonPlus = () => {
    return <Touch>
        <ButtonComponentBlackPlus source={require('../assets/Image/BlackButtonPlus.png')}/>
    </Touch>



}
