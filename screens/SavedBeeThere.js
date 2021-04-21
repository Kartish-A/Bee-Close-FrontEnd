import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import { SavedCard } from '../components/SavedCard'


export const SavedBeeThere = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <Header
                    containerStyle={styles.header}
                    backgroundColor='#37cab8'
                    leftComponent={
                        <TouchableOpacity onPress={() => navigation.openDrawer()} >
                            <Ionicons name="menu" size={30} color='#ffffff' />
                        </TouchableOpacity>
                    }
                />
                <View style={{ alignItems: 'center' }}>
                    <Text>this is the SavedHiveHelp screen</Text>
                </View>
                <SavedCard />
            </ScrollView>
        </SafeAreaView>
    )
};
const styles = new StyleSheet.create({
    header: {
        alignItems: 'flex-end',
        height: 50,
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 1,
        shadowRadius: 4.65,
        elevation: 15

    }
})

