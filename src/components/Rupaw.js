import React, {useEffect, useState} from "react";
import { Pressable, Image, Text } from "react-native";
import { db } from "../../firebase";
import firebase from "firebase";

export default function Rupaw() {
	const user = firebase.auth().currentUser;
	const [rp, setRp] = useState(0);

	useEffect(() => {
		db.collection("users").doc(user.uid)
    .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
		setRp(doc.data().rupaws);
    });
	
	  return () => {
		
	  }
	}, [])
	

	return (
		<Pressable>
			<div
				style={{
					width: "100px",
					border: "1px solid black",
					fontFamily: "Montserrat_900Black",
					borderRadius: "5px",
					display: "flex",
					backgroundColor: "white",
					margin: "20px 10px 5px auto",
					// marginRight: "5px",
				}}>
				<Text
					style={{
						fontFamily: "Montserrat_900Black",
						fontSize: 20,
						color: "#03063A",
						margin: "auto",
					}}>
					{rp}
				</Text>
				<Image
					style={{ margin: "5px", width: "32px", height: "32px" }}
					source={require("../assets/paws.jpg")}></Image>
			</div>
		</Pressable>
	);
}