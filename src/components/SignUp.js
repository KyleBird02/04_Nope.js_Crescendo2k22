import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Pressable,
	Image,
	TextInput,
} from "react-native";
import { useFonts, Montserrat_900Black } from "@expo-google-fonts/montserrat";
import { auth, createUserDocument } from "../../firebase";

export default function SignUp({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	let [fontsLoaded] = useFonts({
		Montserrat_900Black,
	});

	const handleSignUp = () => {
		auth.createUserWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
				console.log(user.email, user);
				createUserDocument(user, {
					email: user.email,
					rupaws: 0,
					uid: user.uid,
				});
			})
			.catch((error) => {
				if (error.code === "auth/email-already-in-use") {
					handleLogin();
				} else {
					alert(error.message);
					console.log(error);
				}
			});
	};

	const handleLogin = () => {
		auth.signInWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
				console.log(user.email);
			})
			.catch((error) => alert(error.message));
	};

	return (
		<View style={styles.container}>
			<Image
				style={{ width: "90vw", height: "78vw" }}
				source={require("../assets/Login.png")}
			/>
			<Text
				style={{
					fontFamily: "Montserrat_900Black",
					fontSize: 40,
					color: "#03063A",
				}}>
				Pet<Text style={{ color: "#64ADEF" }}>Smart</Text>
			</Text>
			<TextInput
				style={styles.textBox}
				placeholder="Email"
				onChangeText={(newText) => setEmail(newText)}
			/>
			<TextInput
				style={styles.textBox}
				secureTextEntry={true}
				placeholder="Password"
				onChangeText={(newText) => setPassword(newText)}
			/>
			<Pressable onPress={handleSignUp}>
				<Text
					style={{
						backgroundColor: "#3394EB",
						padding: "10px",
						paddingHorizontal: "105px",
						fontFamily: "Montserrat",
						fontWeight: "500",
						borderRadius: "16.7px",
						fontSize: "15px",
					}}>
					Sign Up
				</Text>
			</Pressable>
			<Pressable onPress={() => navigation.navigate("PetList")}>
				<Text
					style={{
						fontFamily: "Montserrat",
						fontWeight: "300",
						paddingTop: "10px",
					}}>
					Already have an account ?
					<Text style={{ color: "#03063A", fontWeight: "500" }}>
						{" "}
						Login
					</Text>
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		paddingTop: "30px",
	},
	textBox: {
		backgroundColor: "#F7F7F8",
		padding: "15px",
		fontFamily: "Montserrat",
		borderRadius: "16.7px",
		width: "75vw",
		margin: "10px",
	},
});
