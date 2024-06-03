import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './card';

export default function App() {
  //this variable is used to store rgb value
const [value,setValue]=useState<string>("red");
//this function will generate 3 random number a return a string
  const randomNumber=():string=>{
const  number1:number=Math.floor(Math.random()*256);
const  number2:number=Math.floor(Math.random()*256);
const  number3:number=Math.floor(Math.random()*256);
    return `rgb(${number1},${number2},${number3})`

  }
  return (
    <View style={{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
<TouchableOpacity onPress={(e)=>{
  setValue(randomNumber());
}
}><Card data={value}/></TouchableOpacity>
    </View>
  );
}

