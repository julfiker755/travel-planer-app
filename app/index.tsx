import { useRouter } from "expo-router";
import {Image,Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router=useRouter()
  return (
    <SafeAreaView>
      <View>
      <Image style={{width:'100%',height:500}} source={require('../assets/images/home.png')} />
        <View style={{backgroundColor: 'white',width: '100%',height: '100%',marginTop: '-10%',padding:5,paddingTop:20,borderTopLeftRadius: 30,borderTopRightRadius: 30}}>
          <Text style={{fontSize: 30,textAlign: 'center',fontWeight: 'bold',marginBottom: 10}}>Al Travel Planner</Text>
          <Text style={{textAlign: 'center',fontSize:17}}>Discover your next adventure effortlessly.ersonalized itineraries at your fingertips. Travel
            smarter with Al-driven insights</Text>
           <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center',width: '100%',}}
             onPress={()=>router.push("/auth/login")}
           >
               <Text style={{backgroundColor:'#00509d',padding:13,color:'white',borderRadius:99,textAlign:'center',fontSize:20,fontWeight:'bold',width:'80%',marginTop:'16%'}}>Get Started</Text>
           </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  );
}
