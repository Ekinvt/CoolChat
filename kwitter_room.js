
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDwi0UwNWDWk44vhpzIiODlaqUXgRYQKC0",
  authDomain: "kwitter-bee0a.firebaseapp.com",
  databaseURL: "https://kwitter-bee0a-default-rtdb.firebaseio.com",
  projectId: "kwitter-bee0a",
  storageBucket: "kwitter-bee0a.appspot.com",
  messagingSenderId: "653934654762",
  appId: "1:653934654762:web:ccb3d4c26b26dc5fd19a53"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "kwitter.html";
}
