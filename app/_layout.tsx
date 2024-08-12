import auth from "@/firebase";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";



export default function RootLayout() {
  const [user]=useAuthState(auth)
  const router=useRouter()
    // useEffect(()=>{
    //   router.replace("/trip");
    // },[user])

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)"/>
    </Stack>
  );
}
