var firebaseConfig = {
      apiKey: "AIzaSyCfYD7hRhyprYEdBlQfGSGS9ESGGBaoruA",
      authDomain: "kwitter-1744a.firebaseapp.com",
      databaseURL: "https://kwitter-1744a-default-rtdb.firebaseio.com",
      projectId: "kwitter-1744a",
      storageBucket: "kwitter-1744a.appspot.com",
      messagingSenderId: "928825144655",
      appId: "1:928825144655:web:9b4c1306801d730ef5c13a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}