import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBQdQnoNHg-A_2X2GUinC0XOLGaNqNZ_gk",
  authDomain: "login-form-682ca.firebaseapp.com",
  projectId: "login-form-682ca",
  storageBucket: "login-form-682ca.appspot.com",
  messagingSenderId: "64701005863",
  appId: "1:64701005863:web:ca8954330c2914dfb9ce02"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();
const user = auth.currentUser


function updateUserProfile(user){
    const userName = user.displayName;
    const userEmail = user.userEmail;
    const userProfilePic = user.photoUrl;


    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePic").src = userProfilePic;
}

onAuthStateChanged(auth, (user) =>{
    if (user){
        updateUserProfile(user)
        const uid = user.uid
        return uid
    }
    else{
        alert('Pleaase create an account , then login')
    }
})

