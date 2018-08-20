var hidden = false;

$(document).on("click", "#hideShow", function (){
   hideShow()
});

$(document).on("click", "#dogSelect", function() {
    hideShow()
})

$(document).on("click", "#catSelect", function() {
    hideShow()
})

function hideShow() {
    var toolbar = $("#toolbarRender");
    var searchBar = $("#picturesRender");
    if(!hidden){ 
        toolbar.css("top", "-112px");
        searchBar.css("bottom", "150px");
        $("#hider").text("SHOW");
        $("#hider").css("background-color", "#424874");
        $("#hider").css("color", "white");
        hidden = true;
    }
    else if(hidden){
        toolbar.css("top", "0px");
        searchBar.css("bottom", "0px");
        $("#hider").css("background-color", "white");
        $("#hider").css("color", "#424874");
        $("#hider").text("HIDE");
        hidden = false;
    }
}