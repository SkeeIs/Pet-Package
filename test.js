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
$(document).on("click", ".send", function(event){
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
        var nameArr = [];
        var zipArr = [];
        var imgArr = [];
        var phoneArr = [];
        for (var i = 0; i < shortenedObj.length; i++) {
            nameArr.push(shortenedObj[i].name.$t);
            zipArr.push(shortenedObj[i].contact.zip.$t);
            imgArr.push(shortenedObj[i].media.photos.photo[2].$t);
            
            if (shortenedObj[i].contact.phone.$t) {
                phoneArr.push(shortenedObj[i].contact.phone.$t)
            }
            
            else {
                phoneArr.push("Information Not Given");
            }
        }
            // var testZipButton = $("<input/>").attr({ type: "button", value: zipArr[0]});
            // testZipButton.attr(id = "zipButton");
            // //$("#zipButton").val(zipArr[0]);
            // console.log(testZipButton);
            // $("#bottomArea").html(testZipButton);
        for (var i = 0; i < 5; i++){
            var thumbnail = $("<div>");
            thumbnail.addClass("thumbnail");
            thumbnail.attr("id", i);
            var petName = $("<h4>").text(nameArr[i]);
            var image = $("<img>").attr("src", imgArr[i]);
            thumbnail.append(petName, image);
            $(".picturesWrap").append(thumbnail);
        }   

        console.log(nameArr);
        console.log(zipArr);
        console.log(imgArr);
        console.log(phoneArr);
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
var address;
$(document).on("click", ".thumbnail", function(event){
   event.preventDefault();
   $("#dogVideo").hide();
//    var apikey = "AIzaSyATvFSKs1YEJMLy6w9qAIXKWgzoteNXrmg";
//    address =  $("#addressInput").val();
//    console.log("vets = "+ address);
//    var queryURL = "https://www.google.com/maps/embed/v1/search?q=" + address + "&key=" + apikey;
//    console.log("queryURL = "+ queryURL);
//    $("#google-map").attr("src", queryURL);
//    event.preventDefault();
   var apikey = "AIzaSyATvFSKs1YEJMLy6w9qAIXKWgzoteNXrmg";
   var address = $(this).val();
    console.log(address);
   var vets = "Veterinarians Near" + address;
   var parks = "Dog Parks Near" + address;
   console.log("vets = "+ vets);
   var queryURL = "https://www.google.com/maps/embed/v1/search?q=" + vets + "OR" + parks + "&key=" + apikey;
   console.log("queryURL = "+ queryURL);
   $("#google-map").attr("src", queryURL);
});