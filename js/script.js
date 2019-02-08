/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Freak Like Me"," Thoughts and Prayers","Act|||: The Reason ","Verona's Obsession Vol. 01"];

// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images =[ "nombe.jpg","grandson.jpg","dennislloyd.jpg","allanrayman.jpg"];
var artists = ["NoMBe", "Grandson", "Denis Lloyd", "Allan Rayman"];
var songLength =["2:57","3:43","2:37","5:13"];
var songLinks =["https://www.youtube.com/watch?v=0IkuKfrYgUc","https://www.youtube.com/watch?v=4DQ-2tDzJxw","https://www.youtube.com/watch?v=cXrDnO98TiU","https://www.youtube.com/watch?v=vRtXAtzItZM"];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    images.forEach(function(img) {
        $("#images").append('<img src="' + img + '">');
    });
    
    artists.forEach(function(artist){
       $("#artists").append("<p>" + artist + "</p>");
    });
    
    songLength.forEach(function(time){
        $("#lengths").append("<p>" + songLength +"</p>");
        
    });
    
    songLinks.forEach(function(link){
        $("#links").append("<a href=\""+ songLinks +"\">Youtube</a>" );
        
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
    songs = [];
    images = [];
    songLength =[];
    songLinks = [];
    
    
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    let songName = $("#songName")

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
