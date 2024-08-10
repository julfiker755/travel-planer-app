import { useRouter } from "expo-router";
import {Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router=useRouter()
  return (
    <SafeAreaView>
      <View>
      <Image style={{width:'100%',height:500}} source={require('../assets/images/home.png')} />
        <View style={styles.container}>
          <Text style={styles.heading}>Al Travel Planner</Text>
          <Text style={styles.content}>Discover your next adventure effortlessly.ersonalized itineraries at your fingertips. Travel
            smarter with Al-driven insights</Text>
           <TouchableOpacity style={styles.buttoncontainer}
             onPress={()=>router.push("/auth/login")}
           >
               <Text style={styles.button}>Get Started</Text>
           </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    marginTop: '-10%',
    padding:5,
    paddingTop:20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  heading: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10
  },
  content: {
    textAlign: 'center',
    fontSize:16
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  button:{
    backgroundColor:'#00509d',
    padding:13,
    color:'white',
    borderRadius:99,
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    width:'80%',
    marginTop:'20%',
  }
})
