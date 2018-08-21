var petApiKey = "8daa9fc85d6b47e46552a02497bbdfb8";
var mapApiKey = "AIzaSyATvFSKs1YEJMLy6w9qAIXKWgzoteNXrmg";

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
var address;

$(document).on("click", ".send", function(event){
    event.preventDefault();
    
    animalType = $(this).attr("data-type");
    console.log(animalType);
    
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
    
    var userQuery = "https://cors-anywhere.herokuapp.com/http://api.petfinder.com/pet.find?key=" + petApiKey + "&animal=" + animalType + "&age=" + age + "&location=" + zip + "&size=" + size + "&sex=" + sex + "&count=25&output=full&format=json";
    console.log(userQuery);
    
    $.ajax({
        url: userQuery,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        
        var shortenedObj = response.petfinder.pets.pet;
        var nameArr = [];
        var zipArr = [];
        var imgArr = [];
        var breedArr = [];
        var phoneArr = [];
        var streetAddr = [];

        for (var i = 0; i < shortenedObj.length; i++) {
            if (shortenedObj[i].contact.address1.$t) {

                nameArr.push(shortenedObj[i].name.$t);
                zipArr.push(shortenedObj[i].contact.zip.$t);
                imgArr.push(shortenedObj[i].media.photos.photo[2].$t);
                streetAddr.push(shortenedObj[i].contact.address1.$t);
                
                if(shortenedObj[i].breeds.breed.$t) {
                    breedArr.push(shortenedObj[i].breeds.breed.$t);
                }
                else {
                    breedArr.push(shortenedObj[i].breeds.breed[0].$t);
                }
                
                if (shortenedObj[i].contact.phone.$t) {
                    phoneArr.push(shortenedObj[i].contact.phone.$t)
                }
                else {
                    phoneArr.push("Information Not Given");
                }
        
            }
        }    

        for (var i = 0; i < 5; i++){
            var thumbnail = $("<div>");
            thumbnail.addClass("thumbnail");
            thumbnail.attr("id", i);
            var petName = $("<h4>").text(nameArr[i]);
            var breedType = $("<h4>").text(breedArr[i]);
            thumbnail.attr("data-location", streetAddr[i]);
            var image = $("<img>").attr("src", imgArr[i]);
            thumbnail.append(petName, breedType, image);
            $(".picturesWrap").append(thumbnail);
        }   

        console.log(nameArr);
        console.log(zipArr);
        console.log(imgArr);
        console.log(phoneArr);
        console.log(breedArr);
        
        database.ref().push({
            //Storing search params
            Type: animalType,
            age: age,
            size: size,
            sex: sex,
            zip: zip,
            //Storing petfinder API return data
            name: nameArr,
            zipCode: zipArr,
            images: imgArr,
            phoneNum: phoneArr 
        })
        console.log("databaseref.key= "+firebase.database().ref("/pet-package").key);
        console.log("databaseref.key= "+firebase.database().ref("/pet-package/").getKey());
    })
})

$(document).on("click", ".thumbnail", function(event){
   event.preventDefault();

   address = $(this).attr("data-location");

   console.log(address);
   console.log("vets = "+ vets);

   var queryURL = "https://www.google.com/maps/embed/v1/search?q=" + address + "&key=" + mapApiKey;
   console.log("queryURL = "+ queryURL);
   $("#google-map").attr("src", queryURL);
});

$(document).on("click", "#mapVets", function(event){
    event.preventDefault();

    var vets = "Veterinarians Near" + address;

    var queryURL = "https://www.google.com/maps/embed/v1/search?q=" + vets + "&key=" + mapApiKey;
    $("#google-map").attr("src", queryURL);
});

$(document).on("click", "#mapParks", function(event){
    event.preventDefault();

    var parks = "Dog Parks Near" + address;

    var queryURL = "https://www.google.com/maps/embed/v1/search?q=" + parks + "&key=" + mapApiKey;
    $("#google-map").attr("src", queryURL);
});

$(document).on("click", "#mapStores", function(event){
    event.preventDefault();

    var stores = "Pet Stores Near" + address;

    var queryURL = "https://www.google.com/maps/embed/v1/search?q=" + stores + "&key=" + mapApiKey;
    $("#google-map").attr("src", queryURL);
});