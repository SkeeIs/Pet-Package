var petApiKey = "8daa9fc85d6b47e46552a02497bbdfb8";

$(".card-body").on("click", "#send", function(event){
    event.preventDefault();
    var animalType = $("#animal-input").val();
    var age = $("#age-input").val();
    var size = $("#size-input").val();
    var sex = $("#sex-input").val();
    var zip = $("#location-input").val();
    console.log(animalType);
    //console.log(breedType);

    var userQuery = "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=" + petApiKey + "&animal=" + animalType + "&age=" + age + "&location=" + zip + "&size=" + size + "&sex=" + sex + "&count=5&output=full&format=json";
    
    // Query URL for list of dog breeds
    //"https://cors-anywhere.herokuapp.com/http://api.petfinder.com/breed.list?key=" + petApiKey + "&animal=dog&format=json"

    
    $.ajax({
        url: userQuery,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        })
})





// var config = {
//     apiKey: "AIzaSyAl_UE81tOfcyfc6tEx7vFQd8hlU22JEpo",
//     authDomain: "pet-package.firebaseapp.com",
//     databaseURL: "https://pet-package.firebaseio.com",
//     projectId: "pet-package",
//     storageBucket: "pet-package.appspot.com",
//     messagingSenderId: "164600393958"
//   };
//   firebase.initializeApp(config);

// var database = firebase.database();

// $("#send").on("click", function() {
//     event.preventDefault()
    
//     var eventTitle = $("#name-input").val();
//     var date = $("#date-input").val();
//     var startTime = $("#start-input").val();
//     var endTime = $("#end-input").val();
//     var location = $("#location-input").val();
//     var notificationLength = $("#notification-count").val();
//     var description = $("#description-input").val();

//     console.log(eventTitle)
//     console.log(date)
//     console.log(startTime)
//     console.log(endTime)
//     console.log(location)
//     console.log(notificationLength)
//     console.log(description)

//     database.ref().push({
//         title: eventTitle,
//         date: date,
//         eventStart: startTime,
//         eventEnd: endTime,
//         location: location,
//         notification: notificationLength,
//         description: description
//     })

//     $(".form-control").val("");
// })

// database.ref().on("child_added", function(snapshot) {

//     //snapshotting data
//     var name = snapshot.val().name;
//     var destination = snapshot.val().destination;
//     var frequency = snapshot.val().frequency;
//     var nextArrival = snapshot.val().nextArrival;

//     console.log(nextArrival);
    
//     var thisRow = $("<tr>")
    
//     var thisCell = $("<td>")
//     thisCell.text(name);
//     thisRow.append(thisCell);

//     var thisCell = $("<td>")
//     thisCell.text(destination);
//     thisRow.append(thisCell);

//     var thisCell = $("<td>")
//     thisCell.text(frequency);
//     thisRow.append(thisCell);

//     var thisCell = $("<td>")
//     thisCell.text(nextArrival);
//     thisRow.append(thisCell);

//     // var thisCell = $('<td>')
//     // thisCell.text(minAway);
//     // thisRow.append(thisCell);

//     $("#schedule-data").append(thisRow);
// })

 