import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	Image,
	Linking,
	Pressable,
} from "react-native";
import CatBanner from "./CatBanner";
import Rupaw from "./Rupaw";
import { strayRef } from "../../firebase";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { Button } from "react-native-web";
import Ionicons from "@expo/vector-icons/Ionicons";

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title.name}</Text>
		{/* <Image
			source={{ uri: title.image }}
			style={{ width: "40vw", height: "40vw", opacity: 0.85 }}
		/> */}
		<Text
			style={{
				width: "80vw",
				height: "40vw",
				opacity: 0.85,
			}}>
			<Pressable
				onPress={() =>
					Linking.openURL("https://goo.gl/maps/RX6zfpLhEAUKN2cNA")
				}>
				<Ionicons
					name={"location-outline"}
					style={styles.compassIcon}
					onPress={() =>
						Linking.openURL("https://goo.gl/maps/RX6zfpLhEAUKN2cNA")
					}></Ionicons>
			</Pressable>

			{/* <Text style={{ color: "blue" }}>Open in Maps</Text> */}

			<Text
				style={{
					fontFamily: "Montserrat_400Black",
					fontSize: 20,
					color: "#03063A",
					margin: "20px",
					display: "flex",
					justifyContent: "center",
				}}>
				{title.desc}
			</Text>
		</Text>
	</View>
);

const Institutes = () => {
	const [refresh, setRefresh] = useState(true);

	const renderItem = ({ item }) => <Item title={item} />;

	const [mainList, setMain] = useState([]);
	let items = [
		{
			id: "0MdJBpllCkokMFoN1OPp",
			species: "Cat",
			desc: "Shop No 10, ADCB Rehman Manzil, 75, Veer Nariman Road, Churchgate, Mumbai, Maharashtra 400020",
			name: "Abby's Magic Pet store",
		},
		{
			id: "0SUM2P3PE1UA7tzEN4Fc",
			species: "Dog",
			desc: "shop no.6, Zohra Manzil, 213, next to Hayat medical, next to hayat medical, Dongri, mum-9, Mumbai, Maharashtra 400009",
			name: "Cat King Pet shop",
		},
		{
			id: "7xCAh2pc5qGNvfEAljSb",
			desc: "XRMG+PQ9, Adarsh Nagar, Lower Parel, Mumbai, Maharashtra 400013",
			species: "Rabbit",
			name: "The Welfare Of Stray Dogs",
		},
		{
			id: "qnkvjrpH2qYv8YzJqJqd",
			name: "Animals Matter To Me (AMTM)",
			desc: "Bungalow 13, 14, 15 Chikoowadi Lane, Marve Rd, Malad, Malad West, Mumbai, Maharashtra 400095",
			species: "Cat",
		},
		{
			id: "rPqTQZM9HLNK3425hwQ9",
			desc: "Siddhi Karavale, Maharashtra 410208",
			name: "Apna Home Animal Shelter",
			species: "Cat",
		},
	];
	// const renderStrays = () => {
	// 	strayRef.get().then((querySnapshot) => {
	// 		querySnapshot.forEach((doc) => {
	// 			// doc.data() is never undefined for query doc snapshots
	// 			console.log(doc.data());
	// 			items.push({ id: doc.id, ...doc.data() });
	// 			setMain(items);
	// 			console.log(items);
	// 		});
	// 		setRefresh(!refresh);
	// 	});
	// };

	// useEffect(() => {
	// 	renderStrays();

	// 	return () => {
	// 		//
	// 	};
	// }, []);

	return (
		<SafeAreaView style={styles.container}>
			<div>
				<Rupaw />
				<CatBanner />
			</div>
			<Text
				style={{
					fontFamily: "Montserrat_900Black",
					fontSize: 40,
					color: "#03063A",
					margin: "16px",
				}}>
				Donate
			</Text>
			<View style={styles.flex}>
				<FlatList
					data={items}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
					extraData={refresh}
					numColumns={1}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
		overflow: "scroll",
	},
	item: {
		backgroundColor: "#C2EBFF",
		marginHorizontal: "10px",
		borderRadius: "10px",
		margin: "10px",
		padding: "5px",
	},
	title: {
		fontSize: 18,
		padding: "5px",
		fontFamily: Montserrat_400Regular,
		fontWeight: "700",
	},
	flex: {
		display: "flex",
		alignItems: "center",
	},
	compassIcon: {
		fontSize: "32px",
		margin: "auto",
	},
	button: {},
});

export default Institutes;
