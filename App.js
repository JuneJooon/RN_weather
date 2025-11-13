import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.cityCon}>
        <Text style={styles.city}>Suwon</Text>
      </View>

      <View style={styles.weatherCon}>
        <View style={styles.day}>
          <Text style={styles.regDate}>2025/11/13</Text>
          <Text style={styles.weather}>sunny</Text>
        </View>

        <View style={styles.tempCon}>
          <Text style={styles.temp}>14</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe01a",
  },
  
  cityCon: {
    flex:1,
  },
  city:{
    flex:1,
    paddingTop:50,
    //marginTop:50,
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold"
  },

  //weather container
  weatherCon: {
    flex:3,
    fontSize:30,
  },
  day: {
    flex:0.3,
    alignItems:"center",
    justifyContent:"center",
  },
  regDate: {
    paddingTop:10,
    paddingLeft:20,
    paddingRight:20,
    paddingBottom:15,
    backgroundColor:"black",
    fontWeight:"bold",
    borderRadius:20,
    color:"white",
    //error 처리
    overflow:"hidden",
  },
  weather: {
    flex:1.5,
    marginTop:20,
    fontSize:30,
    fontWeight:"bold",
  },

  tempCon: {
    flex: 0.3,
    alignItems:"center",
    justifyContent:"center",
  },
  temp: {
    fontSize:120,
  }

});

export default App;