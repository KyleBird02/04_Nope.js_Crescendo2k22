import React , {useEffect, useState} from "react";
import {
	SafeAreaView,
	View,
	FlatList,
	StyleSheet,
	Text,
	StatusBar,
	Image,
	Pressable,
} from "react-native";
import CatBanner from "./CatBanner";
import Rupaw from "./Rupaw";
import {strayRef} from "../../firebase";
import { Montserrat_400Regular } from "@expo-google-fonts/montserrat";

const Item = ({ title }) => (
	<View style={styles.item}>
		<Text style={styles.title}>{title.name}</Text>
		<Image source={{uri : title.image}} style={{width:"40vw",height:"40vw",opacity:0.85}}/>
	</View>
);

const PetList = () => {
	const [refresh,setRefresh] = useState(true);
	const [species,setSpecies] = useState("Cat");

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

	const renderFilteredStrays = (species) =>{
		// console.log(items);
		// items = mainList;
		// setMain(items);
		// const filtered = mainList.filter(val=>val.species === species);
		// setMain(filtered);
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
					margin: "5px",
				}}>
				Adopt Pet
			</Text>
			<View style={styles.flexCol}>
				<Pressable onPress={()=>{renderFilteredStrays("Cat")}}>
				<Text style={styles.filterbtn}>Cats</Text>
				</Pressable>
				<Pressable onPress={()=>{renderFilteredStrays("Dog")}}>
				<Text style={styles.filterbtn}>Dogs</Text>
				</Pressable>
				<Pressable onPress={()=>{renderFilteredStrays("Bird")}}>
				<Text style={styles.filterbtn}>Rabbits</Text>	
				</Pressable>
				<Pressable onPress={()=>{renderFilteredStrays("Rabbit")}}>
				<Text style={styles.filterbtn}>Birds</Text>	
				</Pressable>
			</View>
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
		marginTop: StatusBar.currentHeight || 0,
	},
	item: {
		backgroundColor: "#C2EBFF",
		marginHorizontal:"10px",
		borderRadius : "10px",
		marginBottom : "5px",
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
	},
	flexCol:{
		display:"flex",
		flexDirection :"row",
		justifyContent : "space-evenly", 
	},
	filterbtn : {
		color : "white",
		padding : "10px",
		backgroundColor : "#3394EB",
		marginHorizontal : "5px",
		borderRadius : "10px",
		marginBottom : "15px",
		fontSize : 16,
	},
});

export default PetList;