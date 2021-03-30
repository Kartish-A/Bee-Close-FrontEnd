import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ScreenContainer } from 'react-native-screens';
import { Header } from '../authStack/Header';

export const Profile = ({navigation}) => {
    return (
        <ScreenContainer style={{ flex:1, width:'100%', justifyContent: 'center' }}>
            <Header/>
                <View style={styles.container}>
                    <Text>This is your Profile page</Text>
                    <Button title='Next' onPress={()=> navigation.navigate('')}/>
                </View>
            </ScreenContainer>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor:'#f7f7f7',
    }
    }
)