import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts, Montserrat_900Black } from "@expo-google-fonts/montserrat";
import Login from "./src/components/Login";

export default function App() {
	let [fontsLoaded] = useFonts({
		Montserrat_900Black,
	});

	return (
		<View style={styles.container}>
			<Login />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},
});
