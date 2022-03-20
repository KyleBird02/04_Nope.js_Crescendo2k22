import React, {useState} from 'react'
import {StyleSheet, Text, View, Pressable,Image, TextInput, Modal} from "react-native";
import firebase from 'firebase';
import { Montserrat_500Medium, Montserrat_900Black } from '@expo-google-fonts/montserrat';
import Rupaw from './Rupaw';
import Redeem from "./Redeem";


export default function UserScreen() {
    const user = firebase.auth().currentUser;
    const [vis,setVis] = useState(false);

  return (
    <View style={styles.container}>
    <Text style={{fontFamily : Montserrat_900Black, fontSize: 22, fontWeight:"900"}}>{user.email}</Text>
    <Rupaw/>
    <Pressable onPress={()=>{
        firebase.auth().signOut().then(() => {
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });}}>
        <Text style={{ backgroundColor : "#3394EB", padding : "10px", paddingHorizontal:"105px", fontFamily: Montserrat_500Medium, fontWeight:"500",borderRadius:"16.7px", fontSize : "15px", marginVertical:"20px"}}>Log out</Text>
    </Pressable>
    <Modal
    animationType='slide'
    visible={vis}>
    <Pressable onPress={()=>setVis(!vis)}>
    <Redeem/>
    </Pressable>
    </Modal>
    <Pressable onPress={()=>setVis(!vis)}>
        <Text style={{ backgroundColor : "#3394EB", padding : "10px", paddingHorizontal:"105px", fontFamily: Montserrat_500Medium, fontWeight:"500",borderRadius:"16.7px", fontSize : "15px", marginVertical:"20px"}}>Redeem Rupaws</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop:"30px",
    },
    textBox : {
      backgroundColor :"#F7F7F8" , padding : "15px", fontFamily: 'Montserrat',borderRadius:"16.7px", width:"75vw", margin:"10px"
    },
  });