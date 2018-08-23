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
 
[Pet Package](skeeis.github.io/Pet-Package/)


### Image Preview of Pet Package
<!-- take a picture of the image and add it into the readme  -->
[![Pet Package Preview](https://raw.githubusercontent.com/SkeeIs/Pet-Package/master/img/Preview1.PNG "Pet Package")](skeeis.github.io/Pet-Package/)

## Prerequisites

The page can be run from any browser, preferably on Google Chrome!

## Technologies Used

### Web Technologies
* **HTML5**, **CSS3** 
* **Javascript** - the primary scripting logic enabling our application
* **jQuery** - the robust scripting library for Javascript
* [**Firebase**](https://firebase.google.com/) - the online infrastructual database utilized

### Application Programming Interfaces
* [**Google Maps API**](https://developers.google.com/maps/documentation/javascript/tutorial) - an customizable API provided by Google to interact with diverse location queries
* [**Petfinder API**](https://www.petfinder.com/developers/api-docs) - an extensive API with an accessible and updated database of over 300,000 adoptable pets and 11,000 animal welfare organizations

### Design Technologies
* [**UIkit**](https://getuikit.com/) - the open-source web styling framework used
* **Sketch App** – mockups UI/UX
* **Adobe Illustrator** – vector editing
* [**TheNounProject.com**](https://thenounproject.com) – open-source vector database
* **CSS Flexbox** – innovative web layouts

# Applied Research

In the United States alone, there are over 1000 searches per hour of users looking for cats and dogs to adopt, according to North America’s largest non-profit pet adoption service. We strive to harness this market and enhance those users' ability to make informed decisions about potential pet adoption.

# Innovative Design

### Initial Mockup - Sketch App
![Pet Package Sketch Mockup](https://raw.githubusercontent.com/SkeeIs/Pet-Package/master/graphics/Query.png "Mockup")

# Code Snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

Here, we queried Petfinder’s API with a jQuery AJAX call and created unique conditional statements to check whether certain pet characteristics existed for each pet. Since Petfinder’s API has different requirements and different outputs for each query, we had to make sure that each parameter existed before we proceeded. 

![Petfinder Code Snippet](https://raw.githubusercontent.com/SkeeIs/Pet-Package/master/img/CodeSnip1.PNG "Petfinder API")

Dynamic generation of HTML elements via jQuery is an extremely powerful tool to instantaneously adjust the webpage to the user's interaction with the interface. Here, we establish a simple, clean iframe in the HTML waiting to be rendered. Without a source, Google Maps doesn’t generate.
Then, we embed a "data-location" attribute within each pet thumbnail on the page. From there, we push the address *on click* of the thumbnail to dynamically generate a particular source attribute of a Google Maps iFrame HTML element so that we can query appropriately and populate the location of the animal.

![Google Maps Code Snippet](https://raw.githubusercontent.com/SkeeIs/Pet-Package/master/img/CodeSnip.PNG "Google Maps API")

We also implemented dynamic CSS styling upon creation of new HTML elements. 

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


# Learning Points
<!-- Learning points where you would write what you thought was helpful -->
* Firebase is extremely useful for long-term cloud storage of user data
* *Additional Learning Points to Come*

## Core Developers

* **Kevin Macaraeg** - Lead Graphics and Front-End Design - [GitHub](https://github.com/everysf)
* **Sajeel Malik** - Team Coordination and Google Maps Integration - [GitHub](https://github.com/sajeelmalik)
* **Syam Kanduri** - Google Maps Integration and Analytics - [GitHub](https://github.com/syamkanduri1)
* **Taylor Skeels** - Petfinder Operations and Firebase Database Management - [GitHub](https://github.com/skeeis)

### Task Breakdown

| Task                                                                     | Lead                        |
|--------------------------------------------------------------------------|-----------------------------|
| Design, Research, Logic and Execution                                    | Syam, Sajeel, Taylor, Kevin |
| *Google Maps* Success Team                                                 | Syam, Sajeel                |
| *Petfinder* Operations & Execution                                         | Taylor                      |
| *Graphics/Front End* Direction                                             | Kevin                       |
| *Firebase* Management & Logistics                                          | Taylor                      |
| *Analytics*                                                                | Syam                        |
| *Team Coordinator*, Documentation, Git Branching and Project Board Manager | Sajeel                      |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details