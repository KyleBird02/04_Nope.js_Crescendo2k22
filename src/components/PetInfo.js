import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import React from "react";
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	Image,
	LabelScroller,
} from "react-native";
import { ImageBackground } from "react-native-web";
import CatBanner from "./CatBanner";
import Rupaw from "./Rupaw";

const DATA = [
	{
		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
		title: "First Item",
	},
	{
		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
		title: "Second Item",
	},
];

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title}</Text>
	</View>
);

const PetInfo = () => {
	const renderItem = ({ item }) => <Item title={item.title} />;

	return (
		<SafeAreaView style={styles.container}>
			<Rupaw />

			<ImageBackground
				style={{
					margin: "5px",
					height: 350,
					resizeMode: "contain",
				}}
				source={require("../assets/catImage.jpg")}></ImageBackground>
			<Text
				style={{
					fontFamily: "Montserrat_600Black",
					fontSize: 30,
					color: "#03063A",
					margin: "5px",
					marginLeft: "20px",
				}}>
				Thomas
			</Text>
			<View
				style={{
					height: "100vh",
					backgroundColor: "#C2EBFF",
					marginTop: 50,
				}}>
				<Text
					style={{
						fontFamily: "Montserrat_400Black",
						fontSize: 20,
						color: "#03063A",
						margin: "20px",
						display: "flex",
						justifyContent: "center",
					}}>
					Thomas has always been a mischeavous cat but his cuteness
					always comes handy when caught.
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
