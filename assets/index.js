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
    var trainStart = moment($("#start").val().trim(), "HH:mm").format("X");
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

//firebase event to add train data to database
database.ref().on("child_added", function(childSnapshot, prevChildKey){
  console.log(childSnapshot.val());

//store snapshot data into variables
var trainName = childSnapshot.val().name;
var trainDestination = childSnapshot.val().destination;
var trainStart = childSnapshot.val().start;
var trainFreq = childSnapshot.val().frequency;

//check to see if childSnapshot data is retrieved
console.log(trainName);
console.log(trainDestination);

console.log("frequency=" + trainFreq);

//declare unix time for moment.js
var momentStart = moment.unix(trainStart).format("HH:mm");
console.log("start time=" + momentStart);
//find the minutes lapsed since the last train
var minutes = moment().diff(moment.unix(trainStart, "X"), "minutes");
console.log("minutes lapsed=" + minutes);

// calculate minutes away
var minAway = trainFreq - minutes % trainFreq;
console.log("Minutes Away=" + minAway);

//calculate next arrival
var time = minutes + minAway
var nextArrival = moment(momentStart, 'HH:mm').add(time, 'minutes').format("HH:mm");

//var time = moment().add(moment.unix(minAway, "X"), "minutes");
//var nextArrival = moment.unix(time).format("HH:mm");
console.log("Next Arrival=" + nextArrival);
//add data to table
$("#table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFreq + "</td><td>" + nextArrival + "</td><td>" + minAway + "</td></tr>");


//end of firebase event
})