import styled from 'styled-components/native';
import React from 'react';

const ButtonCloseOrderParking = styled.Image`
  width: 20px;
  height: 20px;
`;

const Touch = styled.TouchableOpacity`
`;

const Container = styled.View`
    position: absolute;
    top: 5%;
    right: 2%;
`;

export const ButtonCloseOrder = ({onPress}) => {
    return (
        <Container>
            <Touch onPress={onPress}>
                <ButtonCloseOrderParking source={require('../assets/Image/x-mark.png')}/>
            </Touch>
        </Container>
    );
};







