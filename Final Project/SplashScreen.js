import { StatusBar } from "expo-status-bar";
import * as React from "react";

import { StyleSheet, Text, View, Button } from "react-native";
export default function SplashScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#d3d3d3",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 13,
      borderRadius: 45,
      borderColor: "red",
    },
    setFontSize: {
      fontSize: 30,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.setFontSize}>DRINKING GAME APP</Text>

      <img
        alt="logo"
        src={require("../assets/Logo.png")}
        style={{
          width: 300,
          height: 450,
          margin: 25,
          padding: 5,
          borderRadius: 20,
        }}
      />

      <View style={[{ width: 300 }]}>
        <Button
          color="red"
          title="START GAME"
          onPress={() => navigation.navigate("Home")}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
