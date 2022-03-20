import React, { useState } from 'react';
import { StyleSheet, Pressable, Image, View,TextInput, Picker, Text} from 'react-native';
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import * as ImagePicker from 'expo-image-picker';
import { addStrays } from '../../firebase';

export default function GetStrayData() {
  const [image, setImage] = useState(null);
  const [name, setName]  = useState("");
  const [species, setSpecies]  = useState("Cat");
  const [desc, setDesc] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      console.log(result.uri.length);
    }
  };

  const sendData = async () => {
      addStrays({
          name : name,
          species : species,
          desc: desc,
          image: image
      })
  }

  return (
    <View style={{alignItems: 'center', fontFamily : Montserrat_400Regular , paddingTop : 10}}>
      <TextInput
				style={styles.textBox}
				placeholder="Name"
				onChangeText={(newText) => setName(newText)}
	  />
      <Picker
        selectedValue={species}
        style={{ height: 50, width: '75vw', margin: 10 }}
        onValueChange={(itemValue, itemIndex) => setSpecies(itemValue)}
      >
        <Picker.Item label="Cat" value="Cat"/>
        <Picker.Item label="Dog" value="Dog" />
        <Picker.Item label="Bird" value="Bird" />
        <Picker.Item label="Rabbit" value="Rabbit" />
      </Picker>
      <TextInput
				style={styles.textBoxLarge}
				placeholder="Description"
                multiline={true}
                numberOfLines={5}
				onChangeText={(newText) => setDesc(newText)}
	  />
      <Pressable onPress={pickImage}>
				<Text
					style={{
						backgroundColor: "#3394EB",
						padding: "15px",
						paddingHorizontal: "105px",
						fontFamily: "Montserrat",
						fontWeight: "500",
						borderRadius: "16.7px",
						fontSize: "18px",
					}}>
					Select Image
				</Text>
		</Pressable>
        <Pressable onPress={sendData}>
				<Text
					style={{
						backgroundColor: "#4445EB",
						padding: "15px",
                        marginTop: "10px",
						paddingHorizontal: "70px",
						fontFamily: "Montserrat",
						fontWeight: "500",
						borderRadius: "16.7px",
						fontSize: "18px",
					}}>
					Submit for Adoption
				</Text>
		</Pressable>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

const styles = StyleSheet.create({
	textBox: {
		backgroundColor: "white",
		padding: "15px",
		fontFamily: "Montserrat",
		borderRadius: "16.7px",
		width: "75vw",
		margin: "10px",
	},
    textBoxLarge: {
		backgroundColor: "white",
		padding: "15px",
		fontFamily: "Montserrat",
		borderRadius: "16.7px", 
		width: "75vw",
		margin: "10px",
	},
});
