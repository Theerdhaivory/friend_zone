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
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("room name-"+Room_names)
row ="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names +"</div><hr>"
document.getElementById("output").innerHTML+= row;
   //End code
   });});}
getData();


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="welcome" +user_name+"!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
purpose :"adding room name"

  });

  localStorage.setItem("room_name",room_name);
  window.location = "chat_page.html";

}
function logout() {
  LocalStorage.removeItem("user_name");
  LocalStorage.removeItem("room_name");
  window.location = "index.html";
}
function redirect(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "chat_page.html";

}