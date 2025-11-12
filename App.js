import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [number, setNumber]=useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Number : {number} </Text>
      <View style={styles.btnGroup}>
        <Button title="increase" onPress={()=>setNumber(number+1)}/>
        <Button title="decrease" onPress={()=>setNumber(number-1)}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //borderWidth: 5,
    //borderColor : "blue",
  },

  text:{
    fontSize:50,
    color: "black",
    fontWeight:"bold",
  },

  btnGroup: {
    flexDirection: "row",
    gap:10,
    borderWidth:1,
    borderColor:"blue",
    width:200,
    justifyContent: "center",
  }
});
