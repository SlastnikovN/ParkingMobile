import {StyleSheet} from 'react-native';
import styled from "styled-components/native";
import {ButtonMagnifier} from "../Components/ButtonMagnifier";
import {ButtonUser} from "../Components/ButtonUser";
import MapView from 'react-native-maps';

const ScreenView = styled.View`
    flex: 1;
`
export const Home = () =>{
    return (
        <ScreenView>
            <MapView
                style={styles.ScreenMapView}
                region={{
                    latitude: 53.407163,
                    longitude: 58.980291,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            ></MapView>
            <ButtonMagnifier></ButtonMagnifier>
            <ButtonUser></ButtonUser>
        </ScreenView>

    );
}

const styles = StyleSheet.create({
    ScreenMapView:{
        width: '100%',
        height: '100%'
    }
});

