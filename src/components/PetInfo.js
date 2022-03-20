import { Montserrat_400Regular, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import React from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";
import { Button, ImageBackground, ScrollView } from "react-native-web";
import Rupaw from "./Rupaw";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


const PetInfo = ({ pet }) => {
  return (
    <View>
      <ScrollView style={styles.container}>
        <Rupaw />
        <ImageBackground
          style={{
            margin: "5px",
            height: 250,
            resizeMode: "contain",
          }}
          source={{ uri: pet.image }}
        ></ImageBackground>
        <View
          style={{
            height: "100vh",
            backgroundColor: "#fff",
            marginTop: 5,
            borderRadius: "20px",
            flex: "1",
          }}
        >
          <div>
            <div style={{ float: "left", paddingTop:"20px" }}>
              <Text
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "600",
                  fontSize: 30,
                  color: "#03063A",
                  marginLeft: "20px",
                }}
              >
                {pet.name}, 4
              </Text>
            </div>
            <div style={{ float: "left" }}>
						<Image
                style={{
                  width: "120px",
                  height: "55px",
                  marginLeft: "70px",
                  paddingTop: "25px",
									marginTop: "10px"
                }}
                source={require("../assets/Donate.png")}
              />
            </div>
          </div>
          <Text
            style={{
              fontFamily: "Montserrat",
              fontSize: 15,
              fontWeight: "400",
              color: "#70717B",
              margin: "8px",
              paddingLeft: "15px",
            }}
          >
            Location: Versova
          </Text>
          <div>
            <div style={{ float: "left" }}>
              <Image
                style={{
                  margin: "5px",
                  width: "90px",
                  height: "75px",
                  marginLeft: "20px",
                  paddingTop: "20px",
                }}
                source={require("../assets/Sex.png")}
              />
            </div>
            <div style={{ float: "left" }}>
              <Image
                style={{
                  margin: "5px",
                  width: "90px",
                  height: "75px",
                  marginLeft: "15px",
                  paddingTop: "20px",
                }}
                source={require("../assets/weight.png")}
              />
            </div>
            <div style={{ float: "left" }}>
              <Image
                style={{
                  margin: "5px",
                  width: "90px",
                  height: "75px",
                  marginLeft: "15px",
                  paddingTop: "20px",
                }}
                source={require("../assets/dist.png")}
              />
            </div>
          </div>
          <Text style={styles.desc}>
            Sheru is a super-friendly white labrador, that instantly warms up to
            new people. He doesn't mind pets or being around new people and is
            an absolute gem of a dog.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#C2EBFF",
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
  desc: {
    fontFamily: "Montserrat",
    fontWeight: "400",
    fontSize: "20px",
    margin: "20px",
  },
});

export default PetInfo;
