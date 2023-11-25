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

export const ButtonUser = ({onPress}) => {
    return (
        <Container>
            <Touch onPress={onPress}>
                <ButtonComponentUser source={require('../assets/ButtonUser.png')}/>
            </Touch>
        </Container>
    );
};
