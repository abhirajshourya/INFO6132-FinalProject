import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getReactNativePersistence, initializeAuth } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
    apiKey: 'AIzaSyCzduablzPPbKkQiv-H71jLeOf9JZT7WeM',
    authDomain: 'info6132-finalproject-1d51c.firebaseapp.com',
    projectId: 'info6132-finalproject-1d51c',
    storageBucket: 'info6132-finalproject-1d51c.appspot.com',
    messagingSenderId: '276619363556',
    appId: '1:276619363556:web:8982d687dd1b08b35618f1',
}

const app = initializeApp(firebaseConfig)
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
})
export const firebaseDB = getFirestore(app)
