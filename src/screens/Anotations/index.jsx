import { useState, useEffect } from "react"
import { Text, View, TouchableOpacity, FlatList } from "react-native"
import firebase from "../../config/firebase"
import { FontAwesome } from '@expo/vector-icons'
import styles from "./styles"

export const Anotations = ({ navigation, route }) => {
    const[task,setTask] = useState([])

    function deleteTask(id) {
        firebase.firestore().collection(route.params.id).doc(id).delete()
    }

    useEffect(()=>{
        firebase.firestore().collection(route.params.id).onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(),id: doc.id})
            })
            setTask(list)
        })

    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.Tasks}>
                            <TouchableOpacity
                                style={styles.deleteTask}

                                onPress={() => {
                                    deleteTask(item.id)
                                }}
                            >
                                <FontAwesome
                                    name="trash"
                                    size={23}
                                    color="#ff0000"
                                >
                                </FontAwesome>
                            </TouchableOpacity>
                            <Text
                                style={styles.DescriptionTask}
                                onPress={() =>
                                    navigation.navigate("DescriptionAnotation", {
                                        idTask: item.id,
                                        description: item.description,
                                        id: route.params.id
                                    })
                                }
                            >
                                {item.description}
                            </Text>

                        </View>
                    )
                }}
            />
            <TouchableOpacity style
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("NewAnotation", { id: route.params.id })}
            >
                <FontAwesome name="pencil-square-o" size={30} color='#ffffff' />

            </TouchableOpacity>

        </View>
    )
}