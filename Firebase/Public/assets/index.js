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
  var database = firebase.database();
    
    //function for submit button
    $("#add-train-btn").on("click", function (event) {
      event.preventDefault();
    
    //set variables for user input
    var trainName = $("#name").val().trim();
    var trainDestination = $("#destination").val().trim();
    var trainStart = moment($("#start").val().trim(,) "HH:mm").forma("X");
    var trainFreq = $("#frequency").val().trim();
    
    //create temporary object to story input of train data
    var newTrain = {
        name: trainName,
        destination: trainDestination,
        start: trainStart,
        frequency: trainFreq,
    //End of newTrain object 
    }
   
    //push train object to database
    database.ref().push(newTrain);

    //Check object in console.log
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.start);
    console.log(newTrain.frequency);

    //Clear out form text boxes after submit button is clicked
    $("#name").val("");
    $("#destination").val("");
    $("#start").val("");
    $("#frequency").val("");
//End of submit button function
})


//end of initialize firebase function
}
