import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, SafeAreaView, Button, View } from "react-native";

export default function RulesScreen({ navigation }) {

    const styles = StyleSheet.create
    ({
        container: {
          flex: 1,
          backgroundColor: '#d3d3d3',
         // flexDirection: "row",
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 13,
          borderRadius: 45,
          borderColor: "red"
        },
      
        // most
        header:{
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 0
      
        },
        //whos
        title:{
          color: "red",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 0,
        marginTop: 0
      
        },
        // rules 
        header1:{
          
          color: "red",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop:5
      
        },
        text1:{
          color: "black",
          fontSize: 16,
          fontWeight: "600",
          marginBottom: 1,
          marginTop: 15
        
        },
        text2:{
          color: "black",
          fontSize: 16,
          fontWeight: "600",
          marginBottom: 1,
          marginTop: 15
        },
      text3: {
        color: "black",
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 1,
        marginTop: 0,
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

        button1: {
            textAlign: "center",
            color: "black",
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
    //safe thing so evething fits
    // first text everthing should be on top
    <SafeAreaView style={styles.container}>
      <Text style ={styles.title}> Who's</Text>
      <Text style ={styles.header}>Most Likely To...</Text>
      <Text style = {styles.header1}>Rule Page!</Text>
  


      <Text style ={styles.text3}>The game starts by drawing a card 
        each round and the group decides 
        who in the group would be most 
        likely to do what the card says.</Text>

        <Text style ={styles.text1}>Laugh out loud as you play and decide 
        who is most likely to wake up with
         half a burrito in bed or who is most 
         likely to have a 20 minute 
         conversation with siri!.</Text>

         <Text style ={styles.text1}>The first player declares themselves 
        the judge and reads a card aloud.
         Each person then votes who in the 
         group should be tagged with this 
         card and why</Text>

         <Text style ={styles.text2}>The first person with 7 cards loses.
         Remeber there are no winners in
          this game ... only participents,
           judges, and losers! It is a game best
            played with a good sense of humor 
            and minimal rules.</Text>

            <img
        alt="logo"
        src={require("../assets/rulePage.png")}
        style={{
          width: 245,
          height: 200,
          margin: 30,
          padding: 5,
          borderRadius: 20,}}/>
            
            <View style={styles.button}>
      <Button 
      // should go down right 
        color="red"
       title="Play"
       onPress={() => navigation.navigate("Cards")}/>
        </View>

          <br />

          <View style={styles.button1}>
        <Button
        // should go down left 
        color="black"
        title="Back"
        onPress={() => navigation.navigate("Home")} />
        </View>

      <StatusBar style="auto" />
    </SafeAreaView> 
  );
}

