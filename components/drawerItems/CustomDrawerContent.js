import React, {useContext}from 'react';
import {AppContext} from '../../App';
import { logout } from '../../appContextActions';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { Title,Caption,Drawer } from 'react-native-paper';
import { Avatar} from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';



export const CustomDrawerContent=({navigation,props})=>{

    const {dispatch} = useContext(AppContext)

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
                                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                            }}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>
                    </View>
                </View>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={() => <Ionicons name="ios-person-circle-outline" size={24} color="black" /> }
                    label="Profile"
                    onPress={()=> navigation.navigate('Pofile')}
                    />
                <DrawerItem 
                    icon={() => <Ionicons name="ios-bookmark-outline" size={24} color="black" />}
                    label="Saved items"
                    onPress={()=> navigation.navigate('SavedItems')}
                    />
                <DrawerItem 
                    icon={() =>  <Ionicons name="chatbubbles-outline" size={24} color="black" />}
                    label="Direct messages"
                    onPress={()=> navigation.navigate('DirectMessages')}
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
                        navigation.navigate('AuthStackScreens', { screen: 'SignIn'})
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
