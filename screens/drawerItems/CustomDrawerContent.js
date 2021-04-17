import React, { useContext, useEffect, useState }from 'react';
import { AppContext} from '../../App';
import { logout } from '../../appContextActions';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { Title,Caption,Drawer } from 'react-native-paper';
import { Avatar} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';


export const CustomDrawerContent=({navigation,props})=>{

    const [user, setUser] = useState({})
    const {state,dispatch} = useContext(AppContext)

    useEffect(() => {
        axios.get('', {headers:{
            'Authorization':`Bearer ${state.token}`
        }})
        .then(res=> {
            if(res.data.success){
                setUser(res.data.user)
        }
        })
    }, [])

    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar
                            rounded
                            source={{
                            uri:
                                'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg'
                            }}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>{state.username}</Title>
                                <Caption style={styles.caption}>{user.email}</Caption>
                            </View>
                        </View>
                    </View>
                </View>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={() => <Ionicons name="ios-person-circle-outline" size={24} color="black" /> }
                    label="Profile"
                    onPress={()=> navigation.navigate('PersonalPofileScreen',{user:state.user})}
                />
                <DrawerItem 
                icon={() =>  <Ionicons name="chatbubbles-outline" size={24} color="black" />}
                label="Bees in my Hive"
                onPress={()=> navigation.navigate('BeesInMyHive')}
                />  
                <DrawerItem 
                    icon={() => <Ionicons name="ios-bookmark-outline" size={24} color="black" />}
                    label="Saved items"
                    onPress={()=> navigation.navigate('SavedItems')}
                    />
                <DrawerItem 
                    icon={() => <Ionicons name="home-outline" size={24} color="black" /> }
                    label="Home"
                    onPress={()=> navigation.navigate('HiveHome')}
                />                      
            </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={() => <Ionicons name="ios-exit-outline" size={24} color="black" /> }
                    label="Sign out"
                    onPress= { ()=> {
                        dispatch(logout())
                        navigation.navigate('SignIn')
                    }}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        marginBottom:20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    }
});
