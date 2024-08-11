import { View, Text,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '@/components/reuseable/Input/Input';
import auth from '@/firebase'
import {useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Colors } from '@/constants/Colors';


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
 const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);
 const [updateProfile] = useUpdateProfile(auth);
 

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
        await createUserWithEmailAndPassword(credentials.email,credentials.password)
        await updateProfile({displayName:credentials.name, photoURL:''})
     }
  }
  return (
    <SafeAreaView>
    <View style={{width:'100%',height:'23%',backgroundColor:'#0085ff'}}>
      <Text style={{fontSize:50,fontWeight:'600',color:'white',marginTop:'10%',textAlign:'center'}}>Register</Text>
    </View>
    <View style={{backgroundColor:'white',padding:10,height:'100%',marginTop:'-25%',borderTopLeftRadius:99}}>
      <View style={{paddingBottom:15,paddingTop:20}}>
         <Text style={{fontSize:35,fontWeight:'700',textAlign:'center'}}>Wellcome</Text>
         <Text style={{fontSize:18,textAlign:'center',color:Colors.gary,fontWeight:'500'}}>Create to new account</Text>
      </View>
    <Input onChangeText={(value => handleChange('name', value))} error={errors.email} label='Name' placeholder='Enter Your Email'></Input>
    <Input onChangeText={(value => handleChange('email', value))} error={errors.email} label='Email' placeholder='Enter Your Email'></Input>
    <Input onChangeText={(value => handleChange('password', value))} error={errors.password} label='Password' type={true} placeholder='Enter Your Password'></Input>
    <TouchableOpacity
      onPress={handlefrom}
    >
    <Text style={{ backgroundColor: '#00509d', padding: 13, color: 'white', borderRadius: 10, textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: '5%' }}>Submit</Text>
    </TouchableOpacity>
    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '5%' }}>
      <Text style={{ fontSize: 18 }}>Already have an account? </Text>
      <TouchableOpacity
        onPress={() => router.push('/auth/login')}
      >
        <Text style={{ color: Colors.linkcolor, fontSize: 18, fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>
    </View>
    </View>
  </SafeAreaView>
  )
}