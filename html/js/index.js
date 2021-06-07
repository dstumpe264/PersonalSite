var i = 0;
var intro = "Hi, I'm David. Welcome to my site.";
var speed = 50;

function typeWriter(){
	if(i < intro.length){
		document.getElementById("intro").innerHTML += intro.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

typeWriter();