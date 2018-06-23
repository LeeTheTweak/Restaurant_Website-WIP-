let backgroundPhrase1 = document.getElementById("phrase1");
let backgroundPhrase2 = document.getElementById("phrase2");
let backgroundPhrase3 = document.getElementById("phrase3");

$(document).ready(function(){
    $(backgroundPhrase1).animate({
        marginTop: "100px",
    },3000);
});
function fadeOnHover1() {
    $(function(){
        $(backgroundPhrase1).animate({
            opacity: 1.0,
            fontSize: "80px",
        });
    });
}
function fadeBack1() {
    $(function() {
        $(backgroundPhrase1).animate({
            opacity: 0.5,
            fontSize: "60px"
        });
    });
}
function fadeOnHover2() {
    $(function(){
        $(backgroundPhrase2).animate({
            opacity: 1.0,
            fontSize: "60px"
        });
    });
}
function fadeBack2() {
    $(function() {
        $(backgroundPhrase2).animate({
            opacity: 0.5,
            fontSize: "40px"
        });
    });
}
function fadeOnHover3() {
    $(function(){
        $(backgroundPhrase3).animate({
            opacity: 1.0,
            fontSize: "60px"
        });
    });
}
function fadeBack3() {
    $(function() {
        $(backgroundPhrase3).animate({
            opacity: 0.5,
            fontSize: "50px"
        });
    });
}
backgroundPhrase1.addEventListener("mouseover",fadeOnHover1,false);
backgroundPhrase1.addEventListener("mouseout", fadeBack1, false);
backgroundPhrase2.addEventListener("mouseover",fadeOnHover2,false);
backgroundPhrase2.addEventListener("mouseout", fadeBack2, false);
backgroundPhrase3.addEventListener("mouseover", fadeOnHover3,false);
backgroundPhrase3.addEventListener("mouseout", fadeBack3, false);