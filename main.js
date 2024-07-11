
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

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
 

  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function(){
  

signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    window.location.href = "../logged.html",
    console.log(user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message; 
  });
  })