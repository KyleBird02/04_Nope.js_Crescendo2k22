import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	Image,
} from "react-native";
import CatBanner from "./CatBanner";
import Rupaw from "./Rupaw";
import { strayRef } from "../../firebase";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title.name}</Text>
		{/* <Image
			source={{ uri: title.image }}
			style={{ width: "40vw", height: "40vw", opacity: 0.85 }}
		/> */}
		<Text style={{ width: "80vw", height: "40vw", opacity: 0.85 }}>
			Location
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
			desc: "Cute orange kitty",
			name: "Roger",
		},
		{
			id: "0SUM2P3PE1UA7tzEN4Fc",
			species: "Dog",
			desc: "a cute dog",
			name: "Pet",
		},
		{
			id: "7xCAh2pc5qGNvfEAljSb",
			desc: "Happy Rabbit",
			species: "Rabbit",
			name: "Biryani",
		},
		{
			id: "qnkvjrpH2qYv8YzJqJqd",
			name: "Thomas",
			desc: "Thomas is a mischievous but cute cat ",
			species: "Cat",
		},
		{
			id: "rPqTQZM9HLNK3425hwQ9",
			desc: "Thomas is a mischievous but cute cat ",
			name: "Thomas",
			species: "Cat",
		},
		{
			id: "zVvLA6yvAH0Orp0rv7WB",
			species: "Dog",
			name: "Sheru",
			desc: "Sheru is a very shy dog,loves his treats",
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
});

export default Institutes;
