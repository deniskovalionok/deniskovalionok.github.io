var button = document.getElementById('myButton');
var logo = document.getElementById('headerLogo');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');
var content = document.getElementById('myContent');

button.onclick = function() {
    modal.style.display = "block";
    setTimeout(opacity1, 100);
}

close.onclick = function() {
    content.style.opacity = "0";
    setTimeout(none, 1000);
}

function opacity1() {
    content.style.opacity = "1";
}

function none(){
    modal.style.display = "none";
}