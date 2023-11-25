import {StyleSheet, Text} from 'react-native';
import styled from "styled-components/native";
import {ButtonMagnifier} from "../Components/ButtonMagnifier";
<<<<<<< Updated upstream
import MapView from 'react-native-maps';
import { UserInformation, user } from '../Components/UserInformation';
import {ButtonUser} from "../Components/ButtonUser";
import { useEffect, useState } from 'react';


const ScreenView = styled.View`
    flex: 1;
`;

export const Home = ({ user }) =>{
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const toggleProfile = () => {
        setIsProfileOpen(!isProfileOpen);
        console.log("isProfileOpen", isProfileOpen);
    };

    useEffect(() => {
        console.log("Текущие состояние Profile: ", isProfileOpen);
    }, [isProfileOpen]);

    console.log("User Home", user);
=======
import {ButtonUser} from "../Components/ButtonUser";
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import {markers} from "../assets/Markers";

import {
    SafeAreaView,
    View,
    TouchableOpacity,
    Text,
} from 'react-native';

const ScreenView = styled.View`
    flex: 1;
`

const url = 'http://79.174.82.190:8888/api/v1/docs'
export const Home = () =>{

const INITIAL_REGION =  {
    latitude: 53.402602,
    longitude: 58.979481,
    latitudeDelta: 1,
    longitudeDelta: 1,
}


>>>>>>> Stashed changes

    return (
        <ScreenView>
            <MapView
                style={styles.ScreenMapView}
<<<<<<< Updated upstream
                region={{
                    latitude: 53.407163,
                    longitude: 58.980291,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            ></MapView>
            <ButtonMagnifier/>
            <ButtonUser onPress={toggleProfile} title = "Toggle Profile"/> 
            {isProfileOpen && <UserInformation user={user}/>}
=======
                initialRegion={INITIAL_REGION}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                showsMyLocationButton
            >
                {markers.map((marker,index) => (
                    <Marker key={index} coordinate={marker} />
                ))}
            </MapView>
            {/*Running GET Request*/}
            <ButtonMagnifier></ButtonMagnifier>
            <ButtonUser></ButtonUser>
>>>>>>> Stashed changes
        </ScreenView>
    );
};

const styles = StyleSheet.create({
    ScreenMapView:{
        width: '100%',

        height: '100%'
    },
    textStyle: {
        fontSize: 18,
        color: 'white',
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#f4511e',
        padding: 10,
        marginVertical: 10,
    },
});

