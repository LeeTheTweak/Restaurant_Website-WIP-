/** fade in steak image on page load */
const logoEl = document.getElementById("steakImg");
$(document).ready(function(){
    $(logoEl).hide().delay(500).fadeIn(1400);
});
/** When user hovers over the dish 
 * ads, replace 'Hot Dishes' with the name of the 
 * dish. */

 /** Access the 'Hot Dishes' title */
 const dishNameHeader = document.getElementById("dishName");
 dishNameHeader.setAttribute("class", "black");
 const priceEl  = document.getElementById("Price");

 /** On hover on ads, change title */
const topDishes = document.getElementsByClassName("boxes");
const defaultAdText = "Hot Dishes";
const adText = ["The Rock", "The Steak Garden", "Icy Mountain"];
let adPrice = ["20", "$10", "$5"];


const adOneHover = () => {
    dishNameHeader.textContent = adText[0];
        priceEl.textContent = adPrice[0];
}
topDishes[0].addEventListener("mouseover", adOneHover, false);


const adTwoHover = () => {
    dishNameHeader.textContent = adText[1];
        priceEl.textContent = adPrice[1];
}
topDishes[1].addEventListener("mouseover", adTwoHover, false);


const adThreeHover = () => {
    dishNameHeader.textContent = adText[2];
        priceEl.textContent = adPrice[2];
}
topDishes[2].addEventListener("mouseover", adThreeHover,false);



for(let i = 0; i < topDishes.length; i += 1) {
    function changeBack() {
        dishNameHeader.textContent = defaultAdText;
        $(function(){
            $(dishNameHeader).animate({
                paddingLeft: "0px"
            });
        });
            priceEl.textContent = "Price";
    }
    topDishes[i].addEventListener("mouseout", changeBack, false);
}