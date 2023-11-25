import {StyleSheet, Text} from 'react-native';
import styled from "styled-components/native";
import {ButtonMagnifier} from "../Components/ButtonMagnifier";
import { UserInformation, user } from '../Components/UserInformation';
import {ButtonUser} from "../Components/ButtonUser";
import { useEffect, useState } from 'react';
import MapView, {Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import {markers} from "../assets/Markers";

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

const INITIAL_REGION =  {
    latitude: 53.402602,
    longitude: 58.979481,
    latitudeDelta: 1,
    longitudeDelta: 1,
}
    return (
        <ScreenView>
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
                        //image={require('../assets/Image/mark_Button.png')}
                    />
                ))}
            </MapView>
            <ButtonMagnifier/>
            <ButtonUser onPress={toggleProfile} title = "Toggle Profile"/> 
            {isProfileOpen && <UserInformation user={user}/>}
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

