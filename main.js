
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBQdQnoNHg-A_2X2GUinC0XOLGaNqNZ_gk",
    authDomain: "login-form-682ca.firebaseapp.com",
    projectId: "login-form-682ca",
    storageBucket: "login-form-682ca.appspot.com",
    messagingSenderId: "64701005863",
    appId: "1:64701005863:web:ca8954330c2914dfb9ce02"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  
  const provider = new GoogleAuthProvider();
  
  
  function updateUserProfile(user) {
    const userName = user.displayName || "Anonymous";
    const userEmail = user.email || "No Email";
    const userProfilePic = user.photoURL || "default-profile-pic.jpg";
  
    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePic").src = userProfilePic;
  }
  
  
  const googleLogin = document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in with Google:", user);
        updateUserProfile(user); 
        window.location.href = "../logged.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error during Google sign-in:", errorCode, errorMessage);
      });
  });
  
 
  import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
  onAuthStateChanged(auth, (user) => {
    if (user) {
      updateUserProfile(user); 
      const uid = user.uid;
      console.log("User is logged in with UID:", uid);
    } else {
      alert('Please create an account, then login'); 
    }
  });
  