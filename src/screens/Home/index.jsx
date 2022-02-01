import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { Book } from "./components/Book"
import { ScrollView } from "react-native-gesture-handler"
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'

import firebase from '../../config/firebase'

export const Home = ({ navigation, route }) => {
    const signout = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate('Login')
        })
    }

    return (
        <SafeAreaView style={{
            backgroundColor: '#E99A01'
        }}>
            <View style={styles.padding}>
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => navigation.navigate('Favorites')} activeOpacity={0.9}>
                        <View style={styles.menuItem}>
                            <Text style={{ marginRight: 5 }}>Favoritos</Text>
                            <MaterialCommunityIcons size={20} name="heart" color='#E99A01' />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Anotations', { id: route.params.id })} activeOpacity={0.9}>
                        <View style={styles.menuItem}>
                            <Text style={{ marginRight: 5 }}>Anotações</Text>
                            <FontAwesome size={20} name="pencil-square-o" color='#E99A01' />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#ffffff', height: '100%', borderTopLeftRadius: 70, borderTopRightRadius: 70 }}>
                    <ScrollView contentContainerStyle={styles.container} >
                        <Text style={styles.title}>Livros</Text>
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                        <Book image="https://www.abrasco.org.br/site/wp-content/uploads/2014/05/Livros.jpg" cardTitle="Livro 1" />
                    </ScrollView>
                </View>

            </View>
            <TouchableOpacity onPress={() => signout()} style={{ backgroundColor: '#E99A01', padding: 10, borderRadius: 100, position: 'absolute', bottom: 50, right: 20 }}>
                <MaterialCommunityIcons name="exit-to-app" size={30} color='#ffffff' />
            </TouchableOpacity>
        </SafeAreaView >
    )
}