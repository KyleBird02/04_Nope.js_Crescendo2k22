import { Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import React from "react";
import {
	SafeAreaView,
	View,
	StyleSheet,
	Text,
	StatusBar,
} from "react-native";
import { ImageBackground } from "react-native-web";
import Rupaw from "./Rupaw";

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

const PetInfo = ({pet}) => {
	return (
		<SafeAreaView style={styles.container}>
			<Rupaw />

			<ImageBackground
				style={{
					margin: "5px",
					height: 350,
					resizeMode: "contain",
				}}
				source={{uri : pet.image}}></ImageBackground>
			<Text
				style={{
					fontFamily: Montserrat_600SemiBold,
					fontSize: 30,
					color: "#03063A",
					margin: "5px",
					marginLeft: "20px",
				}}>
				{pet.name}
			</Text>
			<View
				style={{
					height: "100vh",
					backgroundColor: "#C2EBFF",
					marginTop: 50,
				}}>
				<Text
					style={{
						fontFamily: Montserrat_400Regular,
						fontSize: 20,
						color: "#03063A",
						margin: "20px",
						display: "flex",
						justifyContent: "center",
					}}>
					{pet.desc}
				</Text>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
		backgroundColor: "#F7F6F6",
		display: "relative",
	},
	item: {
		backgroundColor: "#fff",
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});

export default PetInfo;
