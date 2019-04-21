    
"use strict"

var slideIndex = 0;
var currentSlideIndex = 0;

var slideArray = [];

function Slide(title, subtitle, background, link ) {
	this.title = title;
	this.subtitle = subtitle;
	this.background = background;
	this.link = link;
	this.id = "slide" + slideIndex;
	slideIndex++;

	slideArray.push(this);
}

var walkingDead = new Slide(
	"Digital", 
	"Agency", 
	"images/001.jpg", 
	
);

var bigBang = new Slide(
	"One page Layouts", 
	"Many More Features", 
	"images/002.png", 
    
);

var LastMan = new Slide(
	"Modern&", 
	"Creative", 
	"images/003.jpg", 

);

function buildSlider(){

	var myHTML;
	
	
	for(var i = 0; i < slideArray.length; i++) {
		
		myHTML += "<div id='" + slideArray[i].id + 
		"' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" + 
		"<div class='slideOverlay'>" + 
		"<h1>" + slideArray[i].title + "</h1>" +
		"<h4>" + slideArray[i].subtitle + "</h4>" +
		"</div>" +
		"</div>";	
		
	}	

	document.getElementById("mySlider").innerHTML = myHTML;
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

buildSlider();

function prevSlide(){
	var nextSlideIndex;

	if (currentSlideIndex === 0 ) {
		nextSlideIndex = slideArray.length - 1;
	} else {
	
		nextSlideIndex = currentSlideIndex - 1;
	}	
	

	document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;	
	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");
	

	currentSlideIndex = nextSlideIndex;
}

function nextSlide(){

	var nextSlideIndex;

	if (currentSlideIndex === (slideArray.length - 1) ) {
		nextSlideIndex = 0;
	} else {
	
		nextSlideIndex = currentSlideIndex + 1;
	}	

	document.getElementById("slide" + nextSlideIndex).style.left = "100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;	
	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");
		
	currentSlideIndex = nextSlideIndex;
}


