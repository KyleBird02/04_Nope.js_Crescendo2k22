import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar, Image } from "react-native";
import Rupaw from "./Rupaw";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
];

const PetList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <div>
        <span style={{display: "flex", flexDirection:"row-reverse"}}>
          {/* <Image
            style={{ width: "80px", height: "80px"}}
            source={require("../assets/back.png")}
          /> */}
          <Rupaw/>
        </span>
        <span>
          
        </span>
      </div>
      <Text
        style={{
          fontFamily: "Montserrat_900Black",
          fontSize: 40,
          color: "#03063A",
          margin: "16px",
        }}
      >
        Redeem
      </Text>
      <div
        style={{
          backgroundColor: "#FDD153",
          width: "90vw",
          height: "200px",
          alignSelf: "center",
          borderRadius: "40px",
        }}
      >
        <Text style={styles.textTitle}>Flat 20% off</Text>
        <Text style={styles.textDets}>
          Avail upto 20% off on your next purchase from Pedigree
        </Text>
        <div
          style={{
            backgroundColor: "#FFE9C2",
            width: "60vw",
            height: "45px",
            alignSelf: "center",
            marginTop: "10px",
            marginLeft: "50px",
            borderRadius: "10px",
          }}
        >
          <Text style={styles.couponDiv}>200 Rupaws</Text>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgba(187, 107, 217, 0.5)",
          width: "90vw",
          height: "200px",
          alignSelf: "center",
          borderRadius: "40px",
          marginTop: "20px",
        }}
      >
        <Text style={styles.textTitle}>Flat Rs.300 off</Text>
        <Text style={styles.textDets}>
          Avail upto Rs.300 off on your next purchase from DogStore
        </Text>
        <div
          style={{
            backgroundColor: "#D8CBF5",
            width: "60vw",
            height: "45px",
            alignSelf: "center",
            marginTop: "10px",
            marginLeft: "50px",
            borderRadius: "10px",
          }}
        >
          <Text style={styles.couponDiv}>500 Rupaws</Text>
        </div>
      </div>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  couponBox: {
    backgroundColor: "#FFE9C2",
    width: "95px",
    height: "30px",
    marginRight: "20px",
  },
  textTitle: {
    fontSize: "35px",
    fontWeight: "500",
    fontFamily: "Montserrat",
    textAlign: "auto",
    paddingLeft: "15px",
    display: "flex",
    marginTop: "20px",
  },
  textDets: {
    fontSize: "20px",
    fontWeight: "300",
    fontFamily: "Montserrat",
    textAlign: "auto",
    paddingLeft: "20px",
    display: "flex",
    paddingBottom: "10px",
    //marginTop: "40px",
  },
  couponDiv: {
    fontFamily: "Montserrat",
    fontWeight: "500",
    fontSize: "28px",
    padding: "10px",
  },
});

export default PetList;
