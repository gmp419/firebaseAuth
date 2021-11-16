import { useNavigation } from '@react-navigation/core';
import React, {useState, useEffect} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { auth } from '../Firebase';

const LoginScreen = () => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigation = useNavigation();
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                console.log(user);
                navigation.replace('Home');
            }
        })
        return unsubscribe;
    }, [])

    const handleSignup = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log('Registered as: ',user.email);
        })
        .catch((error) => alert(error.message))
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            const user = userCredentials.user;
            console.log('Logged in as: ',user.email);
        })
        .catch((error) => alert(error.message))
    }


    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    value={email}
                    onChangeText={text=> setEmail(text)}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    value={password}
                    onChangeText={text=> setPassword(text)}
                    secureTextEntry
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleLogin}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonOutline]}
                        onPress={handleSignup}
                    >
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 7,
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40,
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#0782f9',
        width: '45%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',

    },
    buttonOutline: {
        backgroundColor: '#fff',
        marginTop: 5,
        borderColor: '#0782f9',
        borderWidth: 1,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    buttonOutlineText: {
        color: '#0782f9',
        fontSize: 16,
        fontWeight: '700', 
    },
})
