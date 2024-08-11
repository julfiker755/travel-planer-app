import { View, Text, TextInput} from 'react-native'
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
    <View style={{marginBottom:18}}>
    <Text style={{ fontSize:20,marginBottom:4,fontWeight:'500'}}>{label}</Text>
    <TextInput 
     style={{borderWidth:1,padding:5,borderRadius:3,fontSize:16,borderColor:'#2E363F"',borderCurve:'continuous'}}
     secureTextEntry={type}
     placeholder={placeholder}
     onChangeText={onChangeText}
    />
    {error &&  <Text style={{textAlign:'right',paddingTop:2,color:'red'}}>{error}</Text>}
 </View>
  )
}


