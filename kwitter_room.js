
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
