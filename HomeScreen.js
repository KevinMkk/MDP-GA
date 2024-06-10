// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Tabs from './Tab';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.label}>ridesmile</Text>
        <Text style={styles.slogan}>
          Welcome to the transportation spot, you ride with a smile!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Passenger Login")}
        >
          <Text style={styles.buttonText}>Passenger</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Driver Login")}
        >
          <Text style={styles.buttonText}>Driver</Text>
        </TouchableOpacity>

        <Tabs />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    marginTop: 0,
    height: "100%",
    width: "80%",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "rgb(34, 145, 12)",
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textTransform: "uppercase",
    letterSpacing: 2,
    fontFamily: "Tahoma",
  },
  label: {
    fontFamily: "Tahoma",
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 5,
    textAlign: "center",
    marginBottom: 15,
    marginTop: 50,
  },
  slogan: {
    fontStyle: "italic",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default HomeScreen;
