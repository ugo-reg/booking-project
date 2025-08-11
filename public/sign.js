import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyChTIS-XZJL_zaWgekSNfDqshtXEHtRSos",
  authDomain: "luxury-booking-hub.firebaseapp.com",
  projectId: "luxury-booking-hub",
  storageBucket: "luxury-booking-hub.firebasestorage.app",
  messagingSenderId: "59562737980",
  appId: "1:59562737980:web:3e209dea3b20ea31955e39"
};


const app = initializeApp(firebaseConfig);
const auth= getAuth(app);

export {auth,app};
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm")
if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("passwordLogin").value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  
                    const user = userCredential.user;
                    console.log("User signed in:", user);
                   
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Error signing in:", errorCode, errorMessage);
                });
        });
    }
})

document.addEventListener("DOMContentLoaded", function(){
    const signupForm = document.getElementById("signupForm");
    if (signupForm){
        signupForm.addEventListener("submit", function(event){
            event.preventDefault();
            const emailS = document.getElementById("emailSign").value;
            const passwordS = document.getElementById("passwordSignup").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
createUserWithEmailAndPassword(auth, emailS, passwordS)
                .then((userCredential) => {
                  
                    const user = userCredential.user;
                    console.log("User signed up:", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Error signing up:", errorCode, errorMessage);
                 
                });
        })
    }
})
