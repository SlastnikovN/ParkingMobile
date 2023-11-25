import styled from 'styled-components/native';
import React from 'react';

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
`

<<<<<<< Updated upstream
export const ButtonUser = ({onPress}) => {
    return (
        <Container>
            <Touch onPress={onPress}>
                <ButtonComponentUser source={require('../assets/ButtonUser.png')}/>
            </Touch>
        </Container>
    );
};
=======
export const ButtonUser = () => {
    return <Container>
        <Touch>
            <ButtonComponentUser source={require('../assets/Image/ButtonUser.png')}/>
        </Touch>
    </Container>




}
>>>>>>> Stashed changes
