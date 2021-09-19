import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
import trafficLight from "./assets/TrafficLight.jpg";
import trafficLightRed from "./assets/TrafficLightRed.jpg";
import trafficLightYellow from "./assets/TrafficLightYellow.jpg";
import trafficLightGreen from "./assets/TrafficLightGreen.jpg";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [color, setColor] = useState("");

  let imageSource = trafficLight;
  if (color === "red") {
    imageSource = trafficLightRed;
  } else if (color === "yellow") {
    imageSource = trafficLightYellow;
  } else if (color === "green") {
    imageSource = trafficLightGreen;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Image source={imageSource} style={styles.image} />

      <View style={styles.buttonGroup}>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: "#ce0100" }]}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => setColor("red")}
        >
          <Text style={styles.buttonText}>Red</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: "#F7FF06" }]}
          onPress={() => setColor("yellow")}
        >
          <Text style={styles.buttonText}>Yellow</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.button, { backgroundColor: "#46FF06" }]}
          onPress={() => setColor("green")}
        >
          <Text style={styles.buttonText}>Green</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  image: {
    maxWidth: "100%",
    maxHeight: windowHeight - Constants.statusBarHeight - 100,
    resizeMode: "contain",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    width: 60,
    height: 30,
    paddingVertical: 8,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
});
