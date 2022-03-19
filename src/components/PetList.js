import React , {useEffect, useState} from "react";
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
import {strayRef } from "../../firebase";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title.name}</Text>
		<Image source={{uri : title.image}} style={{width:"40vw",height:"40vw",opacity:0.85}}/>
	</View>
);

const PetList = () => {
	const [refresh,setRefresh] = useState(true);

	const renderItem = ({ item }) => <Item title={item} />;

	const [mainList,setMain] = useState([]);
	let items = [];
	const renderStrays = () =>{
		strayRef.get().then((querySnapshot) => {
		  querySnapshot.forEach((doc) => {
			  // doc.data() is never undefined for query doc snapshots
			  console.log(doc.data());
			  items.push({id:doc.id ,...doc.data()})
			  setMain(items);
			  console.log(items);
		  });
		  setRefresh(!refresh);
	  });
	}

	useEffect(() => {
		renderStrays()
	
	  return () => {
		//
	  }
	}, [])

	return (
		<SafeAreaView style={styles.container}>
			<div>
				<Rupaw />
			</div>
			<div>
				<CatBanner />
			</div>
			<Text
				style={{
					fontFamily: "Montserrat_900Black",
					fontSize: 40,
					color: "#03063A",
					margin: "16px",
				}}>
				Adopt Pet
			</Text>
			<View style={styles.flex}>
			<FlatList
				data={mainList}
				renderItem={renderItem}
				keyExtractor={(item) => item.id}
				extraData = {refresh}
				numColumns = {2}
			/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: "#C2EBFF",
		marginHorizontal:"10px",
		borderRadius : "10px",
	},
	title: {
		fontSize: 18,
		padding:"5px", 
		fontFamily : Montserrat_400Regular,
		fontWeight: "700",
	},
	flex:{
		display:"flex",
		alignItems:"center",
	}
});

export default PetList;