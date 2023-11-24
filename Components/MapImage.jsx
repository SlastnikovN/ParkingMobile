import styled from 'styled-components/native';

const MapImageComponents = styled.Image`
   flex: 1; /*под вопросом*/
  width: 100%;
  height: 100%;
`;

export const MapImage = () => {
    return <MapImageComponents source={require('../assets/MapImage.jpg')}/>
}