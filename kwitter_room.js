var firebaseConfig = {
  apiKey: "AIzaSyCBoB96zRRrl4iCdg5YxffsbLNyRga7QhU",
  authDomain: "kwitter1-16693.firebaseapp.com",
  databaseURL: "https://kwitter1-16693-default-rtdb.firebaseio.com",
  projectId: "kwitter1-16693",
  storageBucket: "kwitter1-16693.appspot.com",
  messagingSenderId: "780354350505",
  appId: "1:780354350505:web:3efa005353a5b5177e28b8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom(){
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({purpose: "adding room name"});
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room_name"+Room_names);
     row = "<div class = 'room_name' id = "+Room_names+" onclick = 'RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
    });});}
getData();


function RedirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logoutbutton(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
