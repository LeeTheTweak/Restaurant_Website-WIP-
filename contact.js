//if user clicks send email button, text area will display SENT!

var getButtonEl = document.getElementById('sendButton');
var changeButtonColor = function() {
    getButtonEl.style.backgroundColor = 'pink';
    getButtonEl.textContent = 'Opening App';
    $(getButtonEl).animate({
        marginLeft: '100px',
        opacity: '0.5'
    });
}
getButtonEl.onclick = changeButtonColor;