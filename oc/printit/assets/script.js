const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const dots = document.getElementById("dots").children;

let value = 0;

document.getElementById("arrow_left").addEventListener("click", previousSlide);
document.getElementById("arrow_right").addEventListener("click", nextSlide);

function previousSlide() {
	let slide = --value;

	if (slide < 0) {
		slide = 3;
	}
	
	if (value < 0) {
		value = 3;
	}

	dots.item(slide === 3 ? 0 : slide + 1).classList.remove('dot_selected');
	dots.item(slide).classList.add('dot_selected');

	switch (slide) {
		case 0:
			document.getElementById("image").src = slides[0]["image"];
			document.getElementById("tagLine").innerHTML = slides[0]["tagLine"];
			break;
		case 1:
			document.getElementById("image").src = slides[1]["image"];
			document.getElementById("tagLine").innerHTML = slides[1]["tagLine"];
			break;
		case 2:
			document.getElementById("image").src = slides[2]["image"];
			document.getElementById("tagLine").innerHTML = slides[2]["tagLine"];
			break;
		case 3:
			document.getElementById("image").src = slides[3]["image"];
			document.getElementById("tagLine").innerHTML = slides[3]["tagLine"];
			break;
		}

	// debug
	console.log('value : ' + value + ' | slide : ' + slide);
}

function nextSlide () {
	let slide = ++value;

	if (slide > 3) {
		slide = 0;
	}
	
	if (value > 3) {
		value = 0;
	}

	dots.item(slide === 0 ? 3 : slide - 1).classList.remove('dot_selected');
	dots.item(slide).classList.add('dot_selected');

	switch (slide) {
		case 0:
			document.getElementById("image").src = slides[0]["image"];
			document.getElementById("tagLine").innerHTML = slides[0]["tagLine"];
			break;
		case 1:
			document.getElementById("image").src = slides[1]["image"];
			document.getElementById("tagLine").innerHTML = slides[1]["tagLine"];
			break;
		case 2:
			document.getElementById("image").src = slides[2]["image"];
			document.getElementById("tagLine").innerHTML = slides[2]["tagLine"];
			break;
		case 3:
			document.getElementById("image").src = slides[3]["image"];
			document.getElementById("tagLine").innerHTML = slides[3]["tagLine"];
			break;
		}

	// debug
	console.log('value : ' + value + ' | slide : ' + slide);
}
