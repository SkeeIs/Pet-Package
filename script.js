
var hidden = true;

$(document).on("click", "#hideShow", function (){
   hideShow();
});

$(document).on("click", ".animal-pick", function() {
    hideShow();
})

function hideShow() {
    var toolbar = $("#toolbarRender");
    var searchBar = $("#picturesRender");
    if(!hidden){ 
        toolbar.css("top", "-104px");
        searchBar.css("bottom", "150px");
        $("#hider").text("SHOW");
        $("#hider").css("background-color", "#424874");
        $("#hider").css("color", "white");
        hidden = true;
    }
    else if(hidden){
        toolbar.css("top", "0px");
        searchBar.css("bottom", "0px");
        $("#hider").css("background-color", "rgba(255,255,255,.0)");
        $("#hider").css("color", "#424874");
        $("#hider").text("HIDE");
        hidden = false;
    }
}

function hideLanding() {
    $(".landingWrap").hide()
    $("#modalCover").hide()
    // $("#dogVideo").hide()
    hideShow()
}

$(document).on("click", "#searchPets", function() {
   
    var toolbar = $("#toolbarRender");
    hideLanding();
    toolbar.css("top", "0px");

})
// var pet_id;

// database.ref().on("child_added", function(snapshot){

//     pet_id = snapshot.ref_.path.pieces_[0];

    

//     var name = database.ref(pet_id).get(name);
//     var zip = database.ref(pet_id).get(zipCode);
//     var sex = database.ref(pet_id).get(sex);
//     var images = database.ref(pet_id).get(images);
//     console.log(name)

//     for (var i = 0; i < 5; i++){

//         var thumbnail = $("<div>");
//         thumbnail.addClass("thumbnail");
//         var petName = $("<h4>").text(name[0]);
//         var image = $("<img>").attr("src", images[0]);
//         thumbnail.append(petName, image);
//         $(".picturesWrap").append(thumbnail);
    
//     }
    
// });

// function renderPets() {
    
//     for (var i = 0; i < name.length; i++){
//         var thumbnail = $("<div>");
//         thumbnail.addClass("thumbnail");
        
//         var name = $("<h3>").text(name[i]);
//         var image = $("<img>").attr("src", images[i]);
//         thumbnail.append(image);

//         $(".picturesWrap").append(name, thumbnail);
    
//     }

// }