import styled from 'styled-components/native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ButtonComponentMagnifier = styled.Image`
  width: 70px;
  height: 70px;
`;

const Touch = styled.TouchableOpacity`
`;

const ScreenView = styled.View`
position: absolute;
bottom: 10%;
align-items: center;
  right: 0;
  left: 0
;

//background-color: blueviolet;  
`

export const ButtonMagnifier = () => {
    return <ScreenView>
        <Touch>
            <ButtonComponentMagnifier source={require('../assets/Image/ButtonMagnifier.png')}/>
        </Touch>
    </ScreenView>





}
