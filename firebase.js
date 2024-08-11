import { initializeApp } from "firebase/app";
import { initializeAuth,getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAENEu2CRNFDJqigojZHqmd0pagUpiBNlk",
  authDomain: "travel-app-b8868.firebaseapp.com",
  projectId: "travel-app-b8868",
  storageBucket: "travel-app-b8868.appspot.com",
  messagingSenderId: "99906994687",
  appId: "1:99906994687:web:c4eb14292c0f89ce3227ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with React Native Persistence
const auth= initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export default auth;

// Note :most important 
//  "@react-native-async-storage/async-storage": "^1.23.1",
// "@react-native-firebase/auth": "^20.3.0",