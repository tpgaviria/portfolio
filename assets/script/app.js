$(document).ready(function () {
    $('.scrollspy').scrollSpy();
});

skrollr.init({
    forceHeight: false
});

$(document).ready(function () {
    $('.sidenav').sidenav();
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById('small-nav').style.top = "0";
    } else {
        document.getElementById("small-nav").style.top = "-65px";
    }
}

skrollr.init({
    forceHeight: false
});