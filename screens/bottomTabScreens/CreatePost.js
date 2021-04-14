import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Header,CheckBox } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { PhotoPicker } from '../../components/PhotoPicker'
import { AppContext } from '../../App'
import ActionButton from 'react-native-action-button';
import axios from 'axios';
import { PostText } from '../../styles/PostCardStyle';


export const CreatePost = ({navigation}) => {

    const [checked, setChecked] = useState({
        regular: true, //navigatin.navigate('HiveHome')
        event: false, // navigation.navigate('Events')
        giveaway: false //navigation.navigate('Free your Stuff')
    })
    const [text, setText] = useState('')
    const {state}= useContext(AppContext)

    const handleSubmitPost=()=>{
        const chosen = Object.keys(checked).find(key=>checked[key]===true)
        //request to create a new post
        axios.post(`https://bee-close.herokuapp.com/api/posts/newpost`,{
            text:text,
            category: chosen
        
        },{headers:{'Authorization':`Bearer ${state.token}`}})
        //how to handle the response from the backend
        .then(res=> {
            if(res.data.success){
                switch (chosen){
                    case 'regular': 
                    default:
                    navigation.navigate('HiveHome',{post:PostText});
                    break;
                    case 'event':
                    navigation.navigate('Events',{post:PostText});
                    break;
                    case 'giveaway':
                    navigation.navigate('FreeYourStuff',{post:PostText});
                    
                }
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }

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
                    rightComponent={<Image source={require('../../assets/logo(1).png')} style={{width:40, height:40}}/> }
            />
            <View style={{flex:1,margin:20,alignItems:'baseline'}}> 
                <View style={{marginLeft:10}}>
                    <Text style={{fontSize:14}}>please choose category</Text>
                </View>
                <View style={{flexDirection:'row',width:250,justifyContent:'space-between'}}>
                    <CheckBox center
                        title='regular'
                        textStyle={{color:'#37cab8' }}
                        containerStyle={{backgroundColor:'transparent',borderWidth:0}}
                        checkedColor='#37cab8'
                        size={10}
                        checked={checked.regular}
                        onPress={()=> setChecked({regular:true,event:false,giveaway:false})}
                    />
                    <CheckBox center
                        title='event'
                        textStyle={{color:'#37cab8' }}
                        containerStyle={{backgroundColor:'transparent',borderWidth:0}}
                        checkedColor='#37cab8'
                        size={10}
                        checked={checked.event}
                        onPress={()=> setChecked({regular:false,event:true,giveaway:false})}
                    />
                    <CheckBox center
                        title='giveaway'
                        textStyle={{color:'#37cab8' }}
                        containerStyle={{backgroundColor:'transparent',borderWidth:0}}
                        checkedColor='#37cab8'
                        size={10}
                        checked={checked.giveaway}
                        onPress={()=> setChecked({regular:false,event:false,giveaway:true})}
                    />
                </View>        
                <View style={styles.card}>
                    <TextInput 
                        placeholder="what's in your mind?"
                        multiline
                        numberOfLines={5}
                        onChangeText={(text)=> setText(text)}
                    />
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={styles.btnPosition}>
                        <TouchableOpacity style={styles.cancelBtn} onPress={()=> navigation.goBack()}>
                            <Text style={{color:'#000'}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnPosition}>
                        <TouchableOpacity style={styles.Btn} onPress={handleSubmitPost}>
                            <Text style={{color:'#ffffff'}}>Post</Text>
                        </TouchableOpacity>
                    </View>
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