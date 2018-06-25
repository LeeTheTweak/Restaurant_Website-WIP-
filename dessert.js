var selectedPage = document.getElementsByTagName("li")[2];

selectedPage.style.color = "rgb(250, 101, 101)";
selectedPage.style.fontSize = "60px";
$(selectedPage).animate({
    marginTop: "5px",
});
// Animating the 'Dishes for Dinner and table
var table = document.getElementById("table");
var Dinner = document.getElementById("dessertWord");
$(document).ready(function(){
    $(table).hide().delay(500).fadeIn(1500);
    $(Dinner).animate({
        paddingLeft: "50px",
    });
});

/** Get background images all white. */

var tableImages = document.querySelectorAll("table td");
for(var i = 0; i < tableImages.length; i++) {
   tableImages[i].style.backgroundColor = "white"; 
}