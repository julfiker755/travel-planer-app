import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '@/components/reuseable/Input/Input';




interface UserProps {
  name:string;
  email: string;
  password: string;
}


interface ErrorsProps {
  name?:string;
  email?: string;
  password?: string;
}

export default function Register(){
  const navigation = useNavigation();
  const router=useRouter()
  const [credentials,setCredentials]=useState<UserProps>({
    name:'',
    email:'',
    password:'',
  })
 const [errors,setErrors]=useState<ErrorsProps>({})

  useEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])

  // handle data
  const handleChange = (name:keyof UserProps, value:string) => {
    setCredentials((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  };

  const validateForm=():boolean=>{
    let newErrors:ErrorsProps= {};

    if (!credentials.name) newErrors.name = "Name is required";
    if (!credentials.email) newErrors.email = "Email is required";
    if (!credentials.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handlefrom=async()=>{
     if(validateForm()){
       console.log("submit from")
     }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
       <Text style={styles.heading}>Create New Account</Text>
    </View>
    <Input onChangeText={(value=>handleChange('name',value))} error={errors.name} label='User Name' placeholder='Enter Your Name'></Input>
    <Input onChangeText={(value=>handleChange('email',value))} error={errors.email} label='Email' placeholder='Enter Your Email'></Input>
    <Input onChangeText={(value=>handleChange('password',value))} error={errors.password} label='Password' type={true} placeholder='Enter Your Password'></Input>
       <TouchableOpacity
       onPress={()=>handlefrom()}
       >
               <Text style={styles.button}>Register</Text>
       </TouchableOpacity>
       <TouchableOpacity
       onPress={()=>router.push('/auth/login')}
       >
               <Text style={styles.button2}>Already Account,Go Back</Text>
       </TouchableOpacity>
    </SafeAreaView>
  )
}



const styles=StyleSheet.create({
  container:{
    padding:10,
    flex:1,
    justifyContent:'center',
  },
   heading:{
     fontSize:30,
     fontWeight:'bold',
     textAlign:'center',
     paddingBottom:'10%',
   },
   button:{
    backgroundColor:'#00509d',
    padding:13,
    color:'white',
    borderRadius:10,
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    marginTop:'5%',
   },
   button2:{
    padding:13,
    borderRadius:10,
    textAlign:'center',
    fontSize:16,
    marginTop:'5%',
    borderWidth:1
   }
})

