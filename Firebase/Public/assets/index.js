  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCxAPllmMn1a0Xc1V7GCSVW6V_TroVw4Xk",
    authDomain: "bootcamp-cc0b8.firebaseapp.com",
    databaseURL: "https://bootcamp-cc0b8.firebaseio.com",
    projectId: "bootcamp-cc0b8",
    storageBucket: "bootcamp-cc0b8.appspot.com",
    messagingSenderId: "319783617182"
  };
  firebase.initializeApp(config);
  console.log("working!")
  $(function() {
    let database = firebase.database();
    $("form").on("submit", function (e) {
      e.preventDefault();
      let val = $(".title-input").val();
      database.ref("value").set(val);
    })
    database.ref("message");
  })
