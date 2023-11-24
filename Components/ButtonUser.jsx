import styled from 'styled-components/native';


const ButtonComponentUser = styled.Image`
  width: 50px;
  height: 50px;
`;

const Touch = styled.TouchableOpacity`
`;

const Container = styled.View`
position: absolute;
top: 5%;
right: 2%;
//background-color: blue;  
`

export const ButtonUser = () => {
    return <Container>
        <Touch>
            <ButtonComponentUser source={require('../assets/ButtonUser.png')}/>
        </Touch>
    </Container>




}
