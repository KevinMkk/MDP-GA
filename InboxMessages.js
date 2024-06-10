//InboxMessages.js
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  FontAwesome,
  Fontisto,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";

const Stack = createStackNavigator();

function DriverProfile({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Driver Profile</Text>
      <View style={styles.iconRow}>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("Location")}
        >
          <Entypo name="location-pin" size={32} color="black" />
          <Text style={styles.iconText}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("AboutMe")}
        >
          <FontAwesome name="user" size={32} color="black" />
          <Text style={styles.iconText}>About Me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("Notifications")}
        >
          <MaterialIcons name="notifications" size={32} color="black" />
          <Text style={styles.iconText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("Inbox")}
        >
          <Fontisto name="email" size={32} color="black" />
          <Text style={styles.iconText}>Inbox</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function Location() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Location</Text>
    </View>
  );
}

function AboutMe() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>About Me</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Notifications</Text>
    </View>
  );
}

function Inbox() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Inbox</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DriverProfile">
        <Stack.Screen name="DriverProfile" component={DriverProfile} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="AboutMe" component={AboutMe} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Inbox" component={Inbox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 0,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "100%",
  },
  iconContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  iconText: {
    marginTop: 1,
    fontSize: 14,
  },
  screenContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  screenText: {
    fontSize: 24,
  },
});
