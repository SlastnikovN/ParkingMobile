import {StyleSheet} from 'react-native';
import styled from "styled-components/native";
import {ButtonMagnifier} from "../Components/ButtonMagnifier";
import {UserInformation} from '../Components/UserInformation';
import {ButtonUser} from "../Components/ButtonUser";
import { useEffect, useState } from 'react';
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import {markers} from "../assets/Markers";
import {StatusBar} from "expo-status-bar";

const ScreenView = styled.View`
    flex: 1;
`;

export const Home = ({ route, navigation }) =>{
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const {user} = route.params;

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
        console.log("isProfileOpen", isProfileOpen);
    };

    useEffect(() => {
        console.log("Текущие состояние Profile: ", isProfileOpen);
    }, [isProfileOpen]);

    console.log("User Home", user);

const INITIAL_REGION =  {
    latitude: 53.402602,
    longitude: 58.979481,
    latitudeDelta: 1,
    longitudeDelta: 1,
}
    return (
        <ScreenView>
            <StatusBar></StatusBar>
            <MapView
                style={styles.ScreenMapView}
                initialRegion={INITIAL_REGION}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                showsMyLocationButton
            >
                {markers.map((marker,index) => (
                    <Marker
                        key={index}
                        coordinate={marker}
                    />
                ))}
            </MapView>
            <ButtonMagnifier/>
            <ButtonUser onPress={toggleProfile} title = "Toggle Profile"/> 
            {isProfileOpen && <UserInformation user={user} isProfileOpen = {isProfileOpen} setIsProfileOpen = {setIsProfileOpen}/>}
        </ScreenView>
    );
};

const styles = StyleSheet.create({
    ScreenMapView:{
        width: '100%',
        height: '100%'
    },
});

