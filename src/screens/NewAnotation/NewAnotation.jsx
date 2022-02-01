import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import firebase from '../../config/firebase'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import styles from "./styles";

export default function NewAnotation({ navigation, route }, props) {
 
    const [description, setDescription] = useState(null);
   
    function addTask(){
      firebase.firestore().collection(route.params.id).add({
        description: description,
        status: false
      })
      navigation.navigate("Anotations", { id: route.params.id });
    }
    return(
        <View style={styles.container}>
          <Text style={styles.label}>Add Anotation</Text>
          <TextInput
          style={styles.input}
          placeholder="Nova Anotation"
          onChangeText={setDescription}
          value={description}
          />
          <TouchableOpacity 
            style={styles.buttonNewTask}
            onPress={()=>{
              addTask()
            }}
          >
            <MaterialCommunityIcons name="zip-disk" color="#ffffff" size={30} />
          </TouchableOpacity>
        </View>
      )
    }