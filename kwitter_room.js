var firebaseConfig = {
      apiKey: "AIzaSyDtkcdOcQ3Xv5ZoyhHtgMTxpJ_WJJfuEOg",
      authDomain: "coooooooooooooolchat.firebaseapp.com",
      databaseURL: "https://coooooooooooooolchat-default-rtdb.firebaseio.com",
      projectId: "coooooooooooooolchat",
      storageBucket: "coooooooooooooolchat.appspot.com",
      messagingSenderId: "476261673565",
      appId: "1:476261673565:web:13b075d09819ad88753bb4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  
            });
      });
}
getData();

function logout() {
      window.location = "index.html";
}