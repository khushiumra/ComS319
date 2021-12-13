import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#d3d3d3",
      // flexDirection: "row",
      alignItems: "center",
      borderWidth: 13,
      borderRadius: 45,
      borderColor: "red",
      justifyContent: "center",
    },
    setFontSize: {
      fontSize: 30,
      fontWeight: "bold",
    },

    button: {
      textAlign: "center",
      color: "red",
      marginBottom: 10,
      padding: 10,
      borderRadius: 20,
      shadowColor: "#000000",
      shadowOffset: {
        width: 2,
        height: 5,
      },

      shadowRadius: 12,
      shadowOpacity: 0.5,
    },
  });
  return (
    <View style={styles.container}>
      <Text style={styles.setFontSize}>ARE YOU READY TO PARTY?</Text>

      <img
        alt="logo"
        src={require("../assets/Logo.png")}
        style={{
          width: 200,
          height: 250,
          margin: 30,
          padding: 5,
          borderRadius: 20,
        }}
      />

      <View style={styles.button}>
        <Button
          color="red"
          title="How to Play"
          onPress={() => navigation.navigate("Rules")}
        />
      </View>

      <br />

      <View style={styles.button}>
        <Button
          color="black"
          title="START GAME"
          onPress={() => navigation.navigate("Cards")}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
