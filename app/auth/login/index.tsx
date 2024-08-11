import { View, Text,TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '@/components/reuseable/Input/Input';
import { useAuthState, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '@/firebase';
import { Colors } from '@/constants/Colors';




interface UserProps {
  email: string;
  password: string;
}


interface ErrorsProps {
  email?: string;
  password?: string;
}

const Login = () => {
  const navigation = useNavigation();
  const router = useRouter()
  const [credentials, setCredentials] = useState<UserProps>({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState<ErrorsProps>({})
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])


  const handleChange = (name: keyof UserProps, value: string) => {
    setCredentials((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    let newErrors: ErrorsProps = {};

    if (!credentials.email) newErrors.email = "Email is required";
    if (!credentials.password) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handlefrom = async () => {
    if (validateForm()) {
      await signInWithEmailAndPassword(credentials.email, credentials.password)
    }
  }
  return (
    <SafeAreaView>
      <View style={{width:'100%',height:'23%',backgroundColor:'#0085ff'}}>
        <Text style={{fontSize:50,fontWeight:'600',color:'white',marginTop:'10%',textAlign:'center'}}>Login</Text>
      </View>
      <View style={{backgroundColor:'white',padding:10,height:'100%',marginTop:'-25%',borderTopLeftRadius:99}}>
        <View style={{paddingBottom:15,paddingTop:20}}>
           <Text style={{fontSize:35,fontWeight:'700',textAlign:'center'}}>Wellcome Back</Text>
           <Text style={{fontSize:18,textAlign:'center',color:Colors.gary,fontWeight:'500'}}>Login to your account</Text>
        </View>
      <Input onChangeText={(value => handleChange('email', value))} error={errors.email} label='Email' placeholder='Enter Your Email'></Input>
      <Input onChangeText={(value => handleChange('password', value))} error={errors.password} label='Password' type={true} placeholder='Enter Your Password'></Input>
      <TouchableOpacity
        onPress={handlefrom}
      >
      <Text style={{ backgroundColor: '#00509d', padding: 13, color: 'white', borderRadius: 10, textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginTop: '5%' }}>Submit</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 18, paddingTop: '5%', paddingBottom: '5%', textAlign: 'center' }}>or continue with</Text>
      <TouchableOpacity
      >
       <Text style={{ padding: 10, borderRadius: 10, textAlign: 'center', fontSize: 19,fontWeight:'600',borderWidth: 1 }}><Image source={require('../../../assets/images/icon/google.png')} />{" "}Google</Text>
      </TouchableOpacity>

      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '5%' }}>
        <Text style={{ fontSize: 18 }}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => router.push('/auth/register')}
        >
          <Text style={{ color: Colors.linkcolor, fontSize: 18, fontWeight: 'bold' }}> Register</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}


export default Login

