import React from "react";
import { Pressable, Image, Text } from "react-native";

export default function Rupaw() {
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
					200
				</Text>
				<Image
					style={{ margin: "5px", width: "32px", height: "32px" }}
					source={require("../assets/paws.jpg")}></Image>
			</div>
		</Pressable>
	);
}
