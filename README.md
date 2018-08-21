# Pet-Package

Pet Package is an API-driven platform that allows pet-seekers to search and contact local humane societies and adoption clinics by offering geographic references!

Pet Package is a robust, tool to simplify and inform about the pet adoption process.

* Powered by Javascript, jQuery, Firebase, Petfinder API, and Google Maps API!

## Motivations

We strive to create a user-friendly product that can help abandoned and in-need animals find homes. Our web app will also help the new owner locate pet-related resources in their area, like vet clinics & pet stores.

Often, we overlook the needs of animals in our own locales due to our hectic daily lives, especially in noisy, tumultuous cities like San Francisco and New York City. However, with the right tools, many of us would lend a hand to our fellow creatures. Our hope is to provide the connection between animals and future pet-owners to establish a friendly environment for all.

## Getting Started

Follow the deployed project link below to utilize the application.

### Deployed Project Link
<!-- make a link to the deployed site -->
 
[Pet Package](https://sajeelmalik.github.io/Train-Scheduler)


### Image Preview of Pet Package
<!-- take a picture of the image and add it into the readme  -->
![Pet Package Preview](img/preview1.png "Pet Package")

## Prerequisites

The page can be run from any browser, preferably on Google Chrome!

## Technologies Used

* **HTML5**, **CSS3** 
* **Javascript** - the primary scripting logic enabling our application
* **jQuery** - the robust scripting library for Javascript
* [**UIkit**](https://getuikit.com/) - the open-source web styling framework used
* [**Firebase**](https://firebase.google.com/) - the online infrastructual database utilized

* [**Google Maps API**](https://developers.google.com/maps/documentation/javascript/tutorial) - an customizable API provided by Google to interact with diverse location queries
* [**Petfinder API**](https://www.petfinder.com/developers/api-docs) - an extensive API with an accessible and updated database of over 300,000 adoptable pets and 11,000 animal welfare organizations

# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

Dynamic generation of HTML elements via jQuery is an extremely powerful tool to instantaneously adjust the webpage to the user's interaction with the interface. Here, jQuery interacts with Firebase to push new user entries onto the cloud. Here, we dynamically generate a particular source attribute of a Google Maps iFrame HTML element so that we can query appropriately.

```
var address;
$(document).on("click", ".thumbnail", function(event){
   event.preventDefault();

   $("#dogVideo").hide();
   var apikey = "AIzaSyATvFSKs1YEJMLy6w9qAIXKWgzoteNXrmg";

   var address = $(this).val();
   var vets = "Veterinarians Near" + address;
   var parks = "Dog Parks Near" + address;
   
   var queryURL = "https://www.google.com/maps/embed/v1/search?q=" + vets + "OR" + parks + "&key=" + apikey;
   console.log("queryURL = "+ queryURL);
   $("#google-map").attr("src", queryURL);
});
```

We implemented dynamic CSS styling upon creation of new HTML elements. 

```
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

```

# Learning points
<!-- Learning points where you would write what you thought was helpful -->
* Firebase is extremely useful for long-term cloud storage of user data


## Core Developers

* **Kevin Macaraeg** - [GitHub](https://github.com/everysf)
* **Sajeel Malik** - [GitHub](https://github.com/sajeelmalik)
* **Syam Kanduri** - [GitHub](https://github.com/syamkanduri1)
* **Taylor Skeels** - [GitHub](https://github.com/skeeis)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details