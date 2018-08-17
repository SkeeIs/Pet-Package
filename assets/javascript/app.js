var petApiKey = "8daa9fc85d6b47e46552a02497bbdfb8";

var config = {
    apiKey: "AIzaSyAl_UE81tOfcyfc6tEx7vFQd8hlU22JEpo",
    authDomain: "pet-package.firebaseapp.com",
    databaseURL: "https://pet-package.firebaseio.com",
    projectId: "pet-package",
    storageBucket: "pet-package.appspot.com",
    messagingSenderId: "164600393958"
  };
firebase.initializeApp(config);

var database = firebase.database();

$(".card-body").on("click", "#send", function(event){
    event.preventDefault();
    var animalType = $("#animal-input").val();
    var age = $("#age-input").val();
    var size = $("#size-input").val();
    var sex = $("#sex-input").val();
    var zip = $("#location-input").val();
    console.log(animalType);
    //console.log(breedType);

    $(".form-control").val("");

    var userQuery = "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=" + petApiKey + "&animal=" + animalType + "&age=" + age + "&location=" + zip + "&size=" + size + "&sex=" + sex + "&count=5&output=full&format=json";
    
    // Query URL for list of dog breeds
    //"https://cors-anywhere.herokuapp.com/http://api.petfinder.com/breed.list?key=" + petApiKey + "&animal=dog&format=json"

    $.ajax({
        url: userQuery,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        
    database.ref().push({
        Type: animalType,
        age: age,
        size: size,
        sex: sex,
        zip: zip,
    })
    
    })
})
