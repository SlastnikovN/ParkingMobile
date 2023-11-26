import styled from 'styled-components/native';
import React from 'react';

const ButtonLogoutUser = styled.Image`
  width: 23px;
  height: 23px;
`;

const Touch = styled.TouchableOpacity`
`;

const Container = styled.View`
    position: absolute;
    top: 5%;
    right: 2%;
`;

export const ButtonLogout = ({onPress}) => {
    return (
        <Container>
            <Touch onPress={onPress}>
                <ButtonLogoutUser source={require('../assets/Image/logout.png')}/>
            </Touch>
        </Container>
    );
};







