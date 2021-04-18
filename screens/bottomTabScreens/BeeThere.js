import React, {useState, useEffect, useContext} from 'react'
import { View, Text, TouchableOpacity, StyleSheet,Image, FlatList, ScrollView, SafeAreaView} from 'react-native'
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import {EventCard} from '../../components/EventCard';
import {AppContext} from '../../App';
import {useIsFocused} from '@react-navigation/native';
import axios from 'axios'


export const BeeThere = ({navigation}) => {

    const [posts, setPosts] = useState([])
    const {state} = useContext(AppContext)
    const isFocused = useIsFocused()
    useEffect(() => {
        axios.get(`https://bee-close.herokuapp.com/api/posts/giveaway`,{headers:{
            'Authorization':`Bearer ${state.token}`
        }})
        .then(res=> {
            console.log(res);
            if(res.data.success){
                setPosts(res.data.allPosts)

            }
        })
    }, [isFocused])

    return (
        <SafeAreaView style={{flex:1,width:'100%'}}>
            <ScrollView>
                <Header 
                    backgroundColor='#37cab8'
                    leftComponent={
                        <TouchableOpacity onPress={()=>navigation.openDrawer()} >
                            <Ionicons name="menu" size={30} color='#fff' />
                        </TouchableOpacity>
                    }
                    centerComponent={{ text: 'BEE CLOSE', style: { color: '#fff', fontSize:20 } }}
                    rightComponent={<Image source={require('../../assets/logo(1).png')} style={{width:40, height:40}}/> 
                    }
                />
                
                {(posts.length)?
                    <FlatList
                        data={posts}
                        renderItem={({item})=> (<EventCard postObj={{
                            username: item.user.firstName+ ' '+item.user.lastName,
                            postText: item.text,
                            postImg:  item.image,
                            postTime: item.timestamp
                    }}/>)}
                    keyExtractor={post => post._id}
                    />
                    : 
                <View style={styles.container}>
                    <Text style={{fontSize:24}}>sorry no items to be shown</Text>
                </View>
                }
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#f7f7f7',
    }
})

