import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../Firebase'

const HomeScreen = () => {

    const navigation = useNavigation();

    const handleSignOut = () => {
        auth.signOut()
        .then(() => {
            navigation.replace('Login')
            console.log('Signed Out')
        })
        .catch(error => {
            alert(error.message)
        })
    }
    return (
        <View style={styles.container}>
            <Text>Email: {auth.currentUser?.email}</Text>
            <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                <Text style={styles.buttonOutlineText} >Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        backgroundColor: '#0782F9',
        padding: 15,
        width: '50%',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 30,
    },
    buttonOutlineText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    }
})
