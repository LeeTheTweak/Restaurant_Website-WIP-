/** fade in steak image on page load */
var logoEl = document.getElementById("steakImg");
$(document).ready(function(){
    $(logoEl).hide().delay(500).fadeIn(1400);
});
/** When user hovers over the dish 
 * ads, replace 'Hot Dishes' with the name of the 
 * dish. */

 /** Access the 'Hot Dishes' title */
 var dishNameHeader = document.getElementById("dishName");
 dishNameHeader.setAttribute("class", "black");
 var priceEl  = document.getElementById("Price");

 /** On hover on ads, change title */
var topDishes = document.getElementsByClassName("boxes");
function adOneHover() {
    dishNameHeader.textContent = "The Rock";
    
        priceEl.textContent = "$20";
}
topDishes[0].addEventListener("mouseover", adOneHover, false);
function adTwoHover() {
    dishNameHeader.textContent = "The Steak Garden";

        priceEl.textContent = "$10";
}
topDishes[1].addEventListener("mouseover", adTwoHover, false);
function adThreeHover() {
    dishNameHeader.textContent = "Icy Mountain";
 
        priceEl.textContent = "$5";
}
topDishes[2].addEventListener("mouseover", adThreeHover,false);

for(var i=0; i < topDishes.length; i++) {
    function changeBack() {
        dishNameHeader.textContent = "Hot Dishes!"
        $(function(){
            $(dishNameHeader).animate({
                paddingLeft: "0px"
            });
        });
            priceEl.textContent = "Price";
    }
    topDishes[i].addEventListener("mouseout", changeBack, false);
}