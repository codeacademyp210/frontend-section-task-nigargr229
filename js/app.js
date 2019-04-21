
let buttons = document.querySelectorAll(".tab-button");
let tabs = document.querySelectorAll(".tab-content");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // console.log(this.getAttribute("data-tab-target"));
        let elementId = this.getAttribute("data-tab-target");
        for (let j = 0; j < tabs.length; j++) {
            tabs[j].style.display = "none";
        }
        document.querySelector("#" + elementId).style.display = "block";
    });
}



function fadeIn(elem, speed) {
    if (elem.style.opacity) {
        elem.style.opacity = 0;
        elem.style.display = "block";
    }
    var fadeInInterval = setInterval(function () {
        elem.style.opacity = Number(elem.style.opacity) + 0.02;
        if (elem.style.opacity >= 1) {
            clearInterval(fadeInInterval);
        }
    }, speed);
}

function fadeOut(elem, speed) {
    if (!elem.style.opacity) {
        elem.style.opacity = 1;
    }
    var fadeOutInterval = setInterval(function () {
        elem.style.opacity = Number(elem.style.opacity) - 0.02;
        if (elem.style.opacity <= 0) {
            clearInterval(fadeOutInterval);
            elem.style.display = "none";
        }
    }, speed);
}


window.onscroll = function () { scrollFunction() };

var isScrollUpDisplayed = false;
var scrollUpElem = document.querySelector(".scroll-top");

scrollUpElem.addEventListener("click", function () {
    var upInterval = setInterval(function () {
        if (document.documentElement.scrollTop <= 0) {
            console.log(document.body.scrollTop);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            clearInterval(upInterval);
        } else {
            document.body.scrollTop -= 20;
            document.documentElement.scrollTop -= 20;
        }
        console.log(document.body.scrollTop);

    }, 1);

});


function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        if (!isScrollUpDisplayed) {
            fadeIn(scrollUpElem, 10);
            isScrollUpDisplayed = true;
        }
    } else {
        if (isScrollUpDisplayed) {
            fadeOut(scrollUpElem, 10);
            isScrollUpDisplayed = false;
        }
    }
}


var section = document.querySelector(".simple-section");
section.addEventListener("click", function(){
    fadeOut(tabs[0], 20)
});
