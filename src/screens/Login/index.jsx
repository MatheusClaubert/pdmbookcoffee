  import { useState, useEffect } from 'react'
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import firebase from '../../config/firebase'
import { styles } from './styles'
import { ScrollView } from 'react-native-gesture-handler'

// const loginImage = 

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorLogin, setErrorLogin] = useState('')

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                navigation.navigate('Home', {id: user.uid})
            }
        })
    }, [])

    const login = () => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(userResult => {
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
                        <Text style={styles.login_h1}>BookCoffee</Text>
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
                        <TouchableOpacity
                            style={styles.button_login}
                            onPress={login}
                        >
                            <Text style={styles.button_text}>Login</Text>
                        </TouchableOpacity>
                        <Text style={styles.text_link} onPress={() => navigation.navigate('Register')}>Create Account</Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}