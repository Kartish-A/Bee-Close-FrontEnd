import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import ActionButton from 'react-native-action-button';
// the following imported function is for picking an image (it didn't work, not sure why?)
import { PhotoPicker } from '../../components/PhotoPicker'


export const CreatePost = ({navigation}) => {

    return (
        <View style={{flex:1}}>
            <Header 
                    backgroundColor='#37cab8'
                    leftComponent={
                        <TouchableOpacity onPress={()=>navigation.openDrawer()} >
                            <Ionicons name="menu" size={30} color='#fff' />
                        </TouchableOpacity>
                    }
                    centerComponent={{ text: 'BEE CLOSE', style: { color: '#fff', fontSize:20 } }}
                    rightComponent={<Image source={require('../../assets/AppLogo.png')} style={{width:40, height:40}}/> }
            />
            <View style={{flex:1,margin:20,alignItems:'baseline'}}>  
                <View style={styles.btnPosition}>
                    <TouchableOpacity style={styles.Btn}>
                        <Text style={{color:'#ffffff'}}>Post</Text>
                    </TouchableOpacity>
                </View>        
                <View style={styles.card}>
                    <TextInput 
                        placeholder="what's in your mind?"
                        multiline
                        numberOfLines={5}
                    />
                </View>
                <View style={styles.btnPosition}>
                    <TouchableOpacity style={styles.cancelBtn} onPress={()=> navigation.goBack()}>
                        <Text style={{color:'#000'}}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View> 
        
            <ActionButton buttonColor="#37cab8">
                <ActionButton.Item buttonColor='#9b59b6' title="Take Photo" onPress={() => {} } >
                    <Ionicons name="camera" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="Choose Photo" onPress={() => {PhotoPicker}}>
                    <Ionicons name="folder-open" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    );
};
const styles = StyleSheet.create({
    card:{
        backgroundColor: '#f8f8f8',
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#37cab8',
        padding:10
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: "white",
    },
    btnPosition:{
        margin:10,
        alignItems:'baseline'
    },
    cancelBtn:{
        width:80,
        backgroundColor: '#ccc',
        borderRadius: 5,
        padding:5,
        alignItems:'center',
        marginHorizontal: 5,
    },
    Btn:{
        width:80,
        backgroundColor: '#37cab8',
        borderRadius: 5,
        padding:5,
        alignItems:'center',
        marginHorizontal: 5,
    }
});