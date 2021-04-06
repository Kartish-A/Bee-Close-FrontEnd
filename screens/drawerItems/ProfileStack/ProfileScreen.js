import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View,  SafeAreaView, TouchableOpacity,ScrollView} from 'react-native';
import { Title,Caption,TouchableRipple } from 'react-native-paper';
import { Avatar, Header} from 'react-native-elements'

// import { Header } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';


export const ProfileScreen = ({navigation})=> {
    return (
    <ScrollView>
        <SafeAreaView style={styles.container}>
            <Header 
                    backgroundColor='#37cab8'
                    leftComponent={
                        <TouchableOpacity onPress={()=>navigation.openDrawer()} >
                            <Ionicons name="menu" size={30} color='#fff' />
                        </TouchableOpacity>
                    }
                    centerComponent={{ text: 'BEE CLOSE', style: { color: '#fff', fontSize:20 } }}
                    rightComponent={
                        <View style={{margin:10}}>
                        <MaterialCommunityIcons
                            name="account-edit-outline"
                            size={30}
                            backgroundColor='black'
                            color='white'
                            onPress={() => navigation.navigate('EditProfileScreen')}
                        />
                    </View> }
            />
            <View style={styles.userInfoSection}>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Avatar 
                        source={{ uri: 'https://picsum.photos/200/300' }} size={80} rounded={true}
                    />
                    <View style={{marginLeft: 20}}>
                        <Title style={[styles.title, {
                        marginTop:15,
                        marginBottom: 5,
                        }]}>John Doe</Title>
                        <Caption style={styles.caption}>@j_doe</Caption>
                    </View>
                </View>
            </View>

            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Ionicons name="location-outline" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>Berlin, Germany</Text>
                </View>
                <View style={styles.row}>
                    <Ionicons name="ios-phone-portrait-outline" size={20} color="black" />
                    <Text style={{color:"#777777", marginLeft: 20}}>+94-900000009</Text>
                </View>
                <View style={styles.row}>
                    <Ionicons name="mail-outline" color="#777777" size={20}/>
                    <Text style={{color:"#777777", marginLeft: 20}}>john_doe@email.com</Text>
                </View>
                <View style={styles.row}>
                    <View>
                        <FontAwesome name="map-signs" color="#777777" size={15}/>
                        <Text style={{color:"#777777", marginLeft: 20}}>Street name</Text>
                    </View>
                    <View style={{marginLeft:70}}>
                        <FontAwesome name="building-o" color="#777777" size={15}/>
                        <Text style={{color:"#777777", marginLeft: 20}}>building No.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
                borderRightColor: '#37cab8',
                borderRightWidth: 1
            }]}>
                <Title>140</Title>
                <Caption>given info.</Caption>
            </View>
            <View style={styles.infoBox}>
                <Title>12</Title>
                <Caption>Posts</Caption>
            </View>
        </View>

        <View style={styles.menuWrapper}>
            <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
                <Ionicons name="document-text-outline" color="#37cab8" size={25}/>
                <Text style={styles.menuItemText}>Your Posts</Text>
            </View>
            </TouchableRipple>
            <TouchableRipple onPress={(user) => {}} >
            <View style={styles.menuItem}>
                <Ionicons name="share-social" color="#37cab8" size={25}/>
                <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
                <Ionicons name="help-outline" color="#37cab8" size={25}/>
                <Text style={styles.menuItemText}>Support</Text>
            </View>
            </TouchableRipple>
            <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
                <Ionicons name="settings-outline" color="#37cab8" size={25}/>
                <Text style={styles.menuItemText}>Settings</Text>
            </View>
            </TouchableRipple>
        </View>
        </SafeAreaView>
    </ScrollView>
    )
};
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
    },
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#37cab8',
        borderBottomWidth: 1,
        borderTopColor: '#37cab8',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
});