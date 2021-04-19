import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../../App';
import { useIsFocused } from '@react-navigation/native'
import { View, Text, TouchableOpacity, ImageBackground, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated';
import axios from 'axios'
import { UserImg } from '../../../styles/ContactPersonStyle';


export const EditPersonalProfileScreen = ({ navigation }) => {

    const { state } = useContext(AppContext)

    const { colors } = useTheme();

    // creating multi useState for, one for each value of user profile info
    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [userPhoto, setUserPhoto] = useState('')


    const [user, setUser] = useState({})

    const isFocused = useIsFocused()
    // making a get req to get the user's data
    useEffect(() => {
        axios.get(`https://bee-close.herokuapp.com/api/users/singleBee`, {
            headers: { 'Authorization': `Bearer ${state.token}` }
        })
            //using the res.data to set the value of the user's info or data, so when he/she change one filde the rest of the data dont become an empty, influnced by the empty inisial state (line 21 to 25) 
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.user);
                    setUser(res.data.user)
                    setUserFirstName(res.data.user.firstName)
                    setUserLastName(res.data.user.lastName)
                    // setPhone(res.data.user.phoneNumber)
                    setEmail(res.data.user.email)
                    // setUserPhoto(res.data.user.photo)
                }
            })
    }, [isFocused]);


    const handleUpdating = () => {
        axios.put(`https://bee-close.herokuapp.com/api/users/updateprofile`,
            {
                userFirstName: userFirstName,
                userLastName: userLastName,
                phone: phone,
                email: email,
                userPhoto: userPhoto
            },
            {
                headers: {
                    Authorization: `Bearer ${state.token}`,
                }
            })
    };


    let bs = React.createRef();
    let fall = new Animated.Value(1);


    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}>

                </View>
            </View>
        </View>
    );

    const renderInner = () => (
        <View style={styles.panel}>

            <View style={{ alignItems: 'center' }}>
                <Text style={styles.panelTitle}>Upload photo</Text>
                <Text style={styles.panelSubtitle}>Chose Your Profile Picture</Text>
            </View>

            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}> Take Photo </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton}>
                <Text style={styles.panelButtonTitle}> Choose From Library </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={() => bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}> Cancel </Text>
            </TouchableOpacity>

        </View>
    );


    return (

        <ScrollView style={styles.container}>
            <BottomSheet
                ref={bs}
                snapPoints={[330, 0]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
            {/* adding animation to this View, changing the  View opacity to 0.1 when the user is clicking on "change the picture icon" */}
            <Animated.View style={{ margin: 20, opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)) }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                        <View
                            style={{
                                height: 100,
                                width: 100,
                                borderRadius: 15,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <ImageBackground
                                source={{
                                    uri: 'https://picsum.photos/200/300'
                                }}
                                style={{ height: 100, width: 100 }}
                                imageStyle={{ borderRadius: 15 }}>
                                <View
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Ionicons
                                        name="camera"
                                        size={35}
                                        color="#fff"
                                        style={{
                                            opacity: 0.8,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            borderRadius: 10,
                                        }}
                                    />
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
                        {state.username}
                    </Text>
                </View>

                <View style={styles.action}>
                    <FontAwesome name="user-o" color={colors.text} size={20} />
                    <TextInput
                        defaultValue={user.firstName}
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        onChangeText={(userFirstName) => setUserFirstName(userFirstName)}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-o" color={colors.text} size={20} />
                    <TextInput
                        defaultValue={user.lastName}
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        onChangeText={(userLastName) => setUserLastName(userLastName)}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="phone" color={colors.text} size={20} />
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor="#666666"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        // onChangeText={(phone) => setPhone(phone)}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="envelope-o" color={colors.text} size={20} />
                    <TextInput
                        defaultValue={user.email}
                        placeholderTextColor="#666666"
                        keyboardType="email-address"
                        autoCorrect={false}
                        onChangeText={(email) => setEmail(email)}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>
                <View style={styles.action}>
                    <FontAwesome name="envelope-o" color={colors.text} size={20} />
                    <TextInput
                        defaultValue='image uri'
                        placeholderTextColor="#666666"
                        keyboardType="email-address"
                        autoCorrect={false}
                        // onChangeText={(userPhoto) => setUserPhoto(userPhoto)}
                        style={[
                            styles.textInput,
                            {
                                color: colors.text,
                            },
                        ]}
                    />
                </View>


                <TouchableOpacity style={styles.commandButton} onPress={() => handleUpdating()}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.commandButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                </TouchableOpacity>
            </Animated.View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#37cab8',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,

    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    panelHeader: {
        alignItems: 'center',
    },

    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },

    panelTitle: {
        fontSize: 27,
        height: 35,
    },

    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },

    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#37cab8',
        alignItems: 'center',
        marginVertical: 7,
    },

    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },

    action: {
        flexDirection: 'row',
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },

    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },

    textInput: {
        flex: 1,
        paddingLeft: 10,
        marginLeft: 2,
        color: '#05375a',
    },
});
