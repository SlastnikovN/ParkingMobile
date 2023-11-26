import styled from 'styled-components/native';

const ButtonComponentMagnifier = styled.Image`
  width: 90px;
  height: 90px;
`;

const Touch = styled.TouchableOpacity`
`;

const ScreenView = styled.View`
position: absolute;
bottom: 10%;
align-items: center;
  right: 0;
  left: 0;
`

export const ButtonMagnifier = ({onPress}) => {
    return <ScreenView>
        <Touch onPress={onPress}>
            <ButtonComponentMagnifier source={require('../assets/Image/magnifier_Button.png')}/>
        </Touch>
    </ScreenView>





}
