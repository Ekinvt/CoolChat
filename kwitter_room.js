
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAAw4LgMjkuydgPR2VXM6hM4SxLJW5agbs",
      authDomain: "cool-12859.firebaseapp.com",
      databaseURL: "https://cool-12859-default-rtdb.firebaseio.com",
      projectId: "cool-12859",
      storageBucket: "cool-12859.appspot.com",
      messagingSenderId: "316429373553",
      appId: "1:316429373553:web:d79923fe7f663ed54dcbd0"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
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
