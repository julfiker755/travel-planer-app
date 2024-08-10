import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

interface InputProps {
    label: string;
    type?: boolean;
    placeholder: string;
    onChangeText?:(text:string)=>void,
    error?:string,
  }

export default function Input({label,type=false,placeholder,error,onChangeText}:InputProps) {
  return (
    <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput 
     style={styles.input}
     secureTextEntry={type}
     placeholder={placeholder}
     onChangeText={onChangeText}
    />
    {error &&  <Text style={styles.error}>{error}</Text>}
 </View>
  )
}


const  styles=StyleSheet.create({
  container:{
   marginBottom:18
  },
  label:{
     fontSize:20,
     marginBottom:4,
     fontWeight:'500'
  },
  input:{
   borderWidth:1,
   padding:5,
   borderRadius:3,
   fontSize:16,
   borderColor:'#2E363F'
  },
  error:{
    textAlign:'right',
    paddingTop:2,
    color:'red'
  }
})

