import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword , getAuth, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBn4K3Q9XG_mO3qeES0Quq3SzD0xI2eZzU",
  authDomain: "netflix-clone-f7d09.firebaseapp.com",
  projectId: "netflix-clone-f7d09",
  storageBucket: "netflix-clone-f7d09.firebasestorage.app",
  messagingSenderId: "369301970490",
  appId: "1:369301970490:web:026a99577f27bc717e9f03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)


// Sign up 
const SignUp = async(name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid : user.uid,
            name,
            authProvider: "local",
            email
        })
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join())
    }
}

// Sign In
const LoginAuth = async(email, password)=>{
    try {
       await signInWithEmailAndPassword(auth, email, password)
        
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join())
    }
}
const LogOut = ()=>{
    signOut(auth)
}

export  {db, auth, SignUp, LoginAuth, LogOut}