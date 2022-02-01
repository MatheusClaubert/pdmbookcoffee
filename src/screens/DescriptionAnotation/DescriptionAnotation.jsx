import React, { useState } from "react"
import {View, Text, TextInput, TouchableOpacity}  from "react-native"

import {MaterialCommunityIcons} from '@expo/vector-icons'
 
import firebase from "../../config/firebase"
import styles from "./styles"


export default function DescripitionAnotation({navigation, route}){
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
  const idTask = route.params.idTask
 
  function editTask(description, id){
    firebase.firestore().collection(route.params.id).doc(id).update({
      description: description,
    })
    navigation.navigate("Anotations", {id:route.params.id})
  }
  return(
    <View style={styles.container}>
      <Text style={styles.label}>Anotation</Text>
      <TextInput
      style={styles.input}
      placeholder="Ex: estudar javascript"
      onChangeText={setDescriptionEdit}
      value={descriptionEdit}
      />
      <TouchableOpacity 
        style={styles.buttonNewTask}
        onPress={()=>{
          editTask(descriptionEdit, idTask)
        }}
      >
        <MaterialCommunityIcons name="zip-disk" color="#ffffff" size={30} />
      </TouchableOpacity>
    </View>
  )
}