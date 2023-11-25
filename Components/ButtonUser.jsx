import styled from 'styled-components/native';
import React from 'react';

const ButtonComponentUser = styled.Image`
  width: 70px;
  height: 70px;
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
                <ButtonComponentUser source={require('../assets/Image/Profile_Button.png')}/>
            </Touch>
        </Container>
    );
};







