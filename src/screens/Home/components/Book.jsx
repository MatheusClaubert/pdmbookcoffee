import { View, Image, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"

import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"

export const Book = (props) => {
    const navigation = useNavigation()

    const favoriteBook = () => {}

    return (
        <View style={{ marginTop: 10 }}>
            <Image style={styles.cardImage} source={{ uri: props.image }} />
            <View style={styles.bottomCard}>
                <Text style={styles.cardTitle}>{props.cardTitle}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Favorites')}>
                    <MaterialCommunityIcons size={31} name="heart" color='#E99A01' />
                </TouchableOpacity>
            </View>
        </View>
    )
}