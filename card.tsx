import React from "react";
import { StyleSheet, Text, TouchableOpacity,Clipboard } from "react-native";

interface cardProp{
    data:string
}
export default function Card({data}:cardProp){
return(
    <TouchableOpacity onLongPress={(e)=>{
        //by default a toast message is shown
Clipboard.setString(data);

    }} style={[styles.card,{backgroundColor:data}]}>
<Text>long press to copy the content</Text>  

      <Text  >{data}</Text>
    </TouchableOpacity>
)
}
const styles=StyleSheet.create({
    card:{
        width:300,
        height:120,
        textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"

    },
    
})
