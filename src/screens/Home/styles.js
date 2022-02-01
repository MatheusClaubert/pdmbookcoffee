import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        backgroundColor: '#ffffff',
        paddingHorizontal: 29,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: 40,
        width: '100%',
        paddingBottom: 150
    },
    menu: {
        height: 48,
        backgroundColor: '#ffffff',
        borderRadius: 100,
        marginHorizontal: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    padding: {
        paddingTop: 80,
        height: '100%'
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 48,
        marginBottom: 10
    }
})