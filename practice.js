
// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyBwMO7FM_5k_7GRJhMgSjpYHIM27Rg_7Oo",
  authDomain: "c94project.firebaseapp.com",
  databaseURL: "https://c94project-default-rtdb.firebaseio.com",
  projectId: "c94project",
  storageBucket: "c94project.appspot.com",
  messagingSenderId: "1015463742353",
  appId: "1:1015463742353:web:a26df68c926ff047e52830"
};
function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}


