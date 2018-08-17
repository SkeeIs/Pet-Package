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

var animalType;

$(document).on("click", ".animal-pick", function(event){
    animalType = $(this).attr("data-type");
    console.log(animalType);
})

$(document).on("click", "#send", function(event){
    event.preventDefault();

    var age = $("#age-input").val();
    var size = $("#size-input").val();
    var sex = $("#sex-input").val();
    var zip = $("#location-input").val();
    console.log(animalType);
    console.log(age);
    console.log(size);
    console.log(sex);
    console.log(zip);

    $(".form-control").val("");

    var userQuery = "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=" + petApiKey + "&animal=" + animalType + "&age=" + age + "&location=" + zip + "&size=" + size + "&sex=" + sex + "&count=5&output=full&format=json";
    console.log(userQuery);
    
    // Query URL for list of dog breeds
    //"https://cors-anywhere.herokuapp.com/http://api.petfinder.com/breed.list?key=" + petApiKey + "&animal=dog&format=json"

    $.ajax({
        url: userQuery,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        
        var shortenedObj = response.petfinder.pets.pet;

        function petObject (){
            var breed = [];
            for (var i = 0; i < shortenedObj.length; i++) {
                if (Array.isArray(shortenedObj[i].breeds.breed === "object")) {
                    for (var h = 0; h < shortenedObj[i].breeds.breed.length; h++) {
                        breed.push(shortenedObj[i].breeds.breed[h]);
                    }   
                }
                else{
                    breed.push(shortenedObj[i].breeds.breed.$t);
                } 
            }
            return breed;
        }    

        database.ref().push({
            Type: animalType,
            age: age,
            size: size,
            sex: sex,
            zip: zip,
        })
        
        console.log(petObject());
    
    })
})



// var userAccounts = []
// database.ref().on("child-added", function(snapshot){
//     var user = snapshot.val().ref_.path_.pieces_[0];
// });
