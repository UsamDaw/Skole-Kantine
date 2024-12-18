import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"; 
import { signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA9qKrgjuKDmh5_VOqqT870_Lz8haWdXNU",
  authDomain: "thecanteenlogin.firebaseapp.com",
  projectId: "thecanteenlogin",
  storageBucket: "thecanteenlogin.appspot.com", 
  messagingSenderId: "699730458810",
  appId: "1:699730458810:web:162822e6cad5467f3e6a83"
};

const app = initializeApp(firebaseConfig);

function showMessage(message, divId) {
  const messageDiv = document.getElementById(divId);
  if (messageDiv) {
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(() => {
      messageDiv.style.opacity = 0;
    }, 5000);
  }
}

const signUp = document.getElementById('submitSignUp');
if (signUp) {
  signUp.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          email: email,
          firstName: firstName,
          lastName: lastName,
        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef = doc(db, "users", user.uid);
        return setDoc(docRef, userData);
      })
      .then(() => {
        window.location.href = 'homepage.html';
      })
  });
}

const signIn = document.getElementById('submitSignIn');
if (signIn) {
  signIn.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href = 'homepage.html';
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === 'auth/wrong-password') {
        } else if (errorCode === 'auth/user-not-found') {
          showMessage('Account does not Exist', 'signInMessage');
        } else {
          showMessage('Email or password is incorrect', 'signInMessage');
        }
      });
  });
}

const logoutButton = document.getElementById('logoutButton');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            localStorage.removeItem('loggedInUserId');
            window.location.href = 'registerAndLogin.html';
        }).catch((error) => {
            console.error("Error during logout:", error);
        });
    });
}
