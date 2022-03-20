import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts, Montserrat_900Black } from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/components/Login";
import SignUp from "./src/components/SignUp";
import PetList from "./src/components/PetList";
import PetInfo from "./src/components/PetInfo";

const Stack = createNativeStackNavigator();

export default function App() {
	let [fontsLoaded] = useFonts({
		Montserrat_900Black,
	});

	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Login"
				screenOptions={{
					headerShown: false,
				}}>
				<Stack.Screen name="PetList" component={PetList} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="SignUp" component={SignUp} />
				<Stack.Screen name="PetInfo" component={PetInfo} />
			</Stack.Navigator>
			<StatusBar style="auto" />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
	},
});
