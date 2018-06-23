var selectedPage = document.getElementsByTagName("li")[1];

selectedPage.style.color = "rgb(250, 101, 101)";
selectedPage.style.fontSize = "60px";
$(selectedPage).animate({
    marginTop: "5px",
});

var table = document.getElementById("table");
var Dinner = document.getElementById("dinnerWord");
$(document).ready(function(){
    $(table).hide().delay(500).fadeIn(1500);
    $(Dinner).animate({
        paddingLeft: "50px",
    });
});