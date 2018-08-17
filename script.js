
var hidden = false;

$(document).on("click", "#hideShow", function (){
    var toolbar = $("#toolbarRender");

    if(!hidden){
    console.log("clicked")
        
        toolbar.css("top", "-144px");
        $("#hider").text("SHOW");
        $("#hider").css("background-color", "#424874");
        $("#hider").css("color", "white");

        hidden = true;
    }

    else if(hidden){
        toolbar.css("top", "0px");
        $("#hider").css("background-color", "white");
        $("#hider").css("color", "#424874");
        $("#hider").text("HIDE");
        hidden = false;
    }

});