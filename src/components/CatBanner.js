import React from "react";
import { Pressable, Image } from "react-native";

export default function CatBanner() {
	return (
		<Pressable>
			<Image
				style={{
					width: "90vw",
					height: "35vw",
					margin: "20px",
					borderRadius: "32px",
				}}
				source={require("../assets/StrayBanner.png")}></Image>
		</Pressable>
	);
}
