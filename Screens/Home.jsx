import {StyleSheet, Text} from 'react-native';
import styled from "styled-components/native";
import {ButtonMagnifier} from "../Components/ButtonMagnifier";
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
    }
});

