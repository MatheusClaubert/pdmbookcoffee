import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%'
    },
    login_container: {
        marginTop: 29,
        paddingHorizontal: 29
    },
    login_h1: {
        fontSize: 48,
        lineHeight: 56
    },
    image_logo: {
        marginTop: 64
    },
    text_input_container: {
        alignItems: 'center',
        width: '90%',
        flexDirection: 'row'
    },
    text_input: {
        fontSize: 18,
        width: '100%',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
        opacity: 0.36,
        fontWeight: '400'
    },
    button_login: {
        marginTop: 50,
        paddingVertical: 11,
        backgroundColor: '#E99A01',
        alignItems: 'center',
        borderRadius: 8,
    },
    button_text: {
        lineHeight: 20,
        fontSize: 18,
    },
    text_link: {
        marginTop: 10,
        fontSize: 18,
        color: '#1877F2',
        lineHeight: 20,
        textAlign: 'center',
        marginBottom: 10,
    }
})