import React, { useState } from "react";
import { StyleSheet, Text, View, Pressable,Image, TextInput } from 'react-native';
import { useFonts, Montserrat_900Black } from '@expo-google-fonts/montserrat';
import { auth } from '../../firebase';



export default function Login() {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

  let [fontsLoaded] = useFonts({
    Montserrat_900Black,
  });

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.email,user);
    })
    .catch(error => console.log(error));
  }

  const handleLogin = () => {
    auth
    .signInWithEmailAndPassword(email,password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch(error => console.log(error));
  }
  
  return (
    <View style={styles.container}>
      <Image style={{width: "90vw", height:"78vw"}} source={require('../assets/Login.png')}/>
      <Text style={{ fontFamily: 'Montserrat_900Black', fontSize: 40 , color:"#03063A"}}>Pet<Text style={{ color: "#64ADEF"}}>Smart</Text></Text>
      <TextInput
          style={styles.textBox}
          placeholder="Email"
          onChangeText={newText => setEmail(newText)}
      />
      <TextInput
          style={styles.textBox}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={newText => setPassword(newText)}
      />
      <Pressable onPress={handleSignUp}>
      <Text style={{ backgroundColor : "#3394EB", padding : "10px", fontFamily: 'Montserrat', fontWeight:"500",borderRadius:"16.7px"}}>Sign Up</Text>
      </Pressable>
      <Pressable onPress={handleLogin}>
      <Text>Click</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  textBox : {
    backgroundColor :"#F7F7F8" , padding : "15px", fontFamily: 'Montserrat',borderRadius:"16.7px", width:"75vw", margin:"10px"
  },
});
