import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable,Image, TextInput } from 'react-native';
import { useFonts, Montserrat_900Black } from '@expo-google-fonts/montserrat';


export default function Login() {

  return (
    <View style={styles.container}>
      <Text style={{fontFamily:"Montserrat", fontWeight: "700", fontSize: "26px", width: "140px", textAlign: "left", paddingLeft:"30px"}}>Get Rupaws</Text>
      <Image style={{width: "97vw", height:"140px"}} source={require('../assets/StrayBanner.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:"30px",
  },
  textBox : {
    backgroundColor :"#F7F7F8" , padding : "15px", fontFamily: 'Montserrat',borderRadius:"16.7px", width:"75vw", margin:"10px"
  },
});
