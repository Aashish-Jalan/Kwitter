
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA_c1kIvS3o1wJKTzX44WAci84po31hLro",
      authDomain: "kwitter-app-8c24d.firebaseapp.com",
      databaseURL: "https://kwitter-app-8c24d-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-8c24d",
      storageBucket: "kwitter-app-8c24d.appspot.com",
      messagingSenderId: "749333997649",
      appId: "1:749333997649:web:695f712b148613948a3070"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class = 'room_names' id=" + Room_names +" onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div> <hr>";
     document.getElementById("output").innerHTML += row;
       //End code
      });});}
getData();


function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
        window.location= "index.html" ;
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
           Bot : "Welcome"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html" ;
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
        window.location = "kwitter_page.html" ; 
}