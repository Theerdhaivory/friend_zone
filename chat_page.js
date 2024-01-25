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
  user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', 
function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value="";
}