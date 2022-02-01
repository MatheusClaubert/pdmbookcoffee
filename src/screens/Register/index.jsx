import { useState, useEffect } from 'react'
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import firebase from '../../config/firebase'
import { styles } from './styles'
import { ScrollView } from 'react-native-gesture-handler'

// const loginImage = 

export const Register = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorLogin, setErrorLogin] = useState('')

    useEffect(() => { }, [])

    const login = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(userResult => {
            const user = userResult.user
            navigation.navigate('Home', { id: user.uid })
        }).catch(error => {
            const errorCode = error.code
            const errorMessage = error.message
        })
    }

    return (
        <SafeAreaView >
            <KeyboardAvoidingView
                style={styles.container}
                behavior='padding '>
                <ScrollView>
                    <Image style={styles.image_logo} source={require('../../../assets/imagem-login.jpg')} />
                    <View style={styles.login_container}>
                        <Text style={styles.login_h1}>Register</Text>
                        <View style={styles.text_input_container}>
                            <MaterialCommunityIcons
                                name='email-outline'
                                size={30}
                                color={'rgba(0, 0, 0, 0.36)'}
                            />
                            <TextInput
                                style={styles.text_input}
                                placeholder="Email"
                                type="text"
                                onChangeText={(text) => setEmail(text)}
                                value={email}
                            />
                        </View>
                        <View style={styles.text_input_container}>
                            <MaterialCommunityIcons
                                name='lock-outline'
                                size={30}
                                color={'rgba(0, 0, 0, 0.36)'}
                            />
                            <TextInput
                                style={styles.text_input}
                                placeholder="Password"
                                secureTextEntry={true}
                                type="text"
                                onChangeText={(text) => setPassword(text)}
                                value={password}
                            />
                        </View>
                        <View style={styles.text_input_container}>
                            <MaterialCommunityIcons
                                name='lock-outline'
                                size={30}
                                color={'rgba(0, 0, 0, 0.36)'}
                            />
                            <TextInput
                                style={styles.text_input}
                                placeholder="Confirm Password"
                                secureTextEntry={true}
                                type="text"
                                onChangeText={(text) => setConfirmPassword(text)}
                                value={confirmPassword}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.button_login}
                            onPress={login}
                        >
                            <Text style={styles.button_text}>Registrar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}