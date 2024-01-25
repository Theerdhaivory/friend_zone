// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyAOnd70gQRJ2SNyPvwIJ68NOCmLQ-OQMJ0",
  authDomain: "kwitter-48e64.firebaseapp.com",
  databaseURL: "https://kwitter-48e64-default-rtdb.firebaseio.com",
  projectId: "kwitter-48e64",
  storageBucket: "kwitter-48e64.appspot.com",
  messagingSenderId: "141079116179",
  appId: "1:141079116179:web:b0335e57d9fdfd2b7b1066"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase



function addUser(){
    user_name =document.getElementById("user_name").value;

      localStorage.setItem("user_name", user_name);
      window.location = "chat_room.html";
}


