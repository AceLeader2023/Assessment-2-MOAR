const catImg = document.getElementById("CAT1");
var numberOfImages = document.getElementById("numberOfImages").value;
var submitButton = document.getElementById("submit");
var cat;
var selRandom = [];
var ids = [];

//? Fetching multiple images from API
async function fCatImages(numberofImages) {
	// * fetching the api
	var catImage = await fetch("https://cataas.com/api/cats");

	//* converting to json format
	catImage = await catImage.json();
	console.log(catImage);
	console.log(catImage.length);

	//? Picks random number within the range of the catImage.length / pushes them to selRandom
	for (let i = 0; i < numberOfImages; i++) {
		var unselRandom = Math.floor(Math.random() * catImage.length);
		selRandom.push(unselRandom);
	}

	//? for loop to replace ids with urls
	for (let i = 0; i < selRandom.length; i++) {
		console.log(selRandom[i]);
		selRandom[i] = "https://cataas.com/cat?" + catImage[i].id;
		console.log(selRandom);

		// imageDisplay(selRandom);
	}

	//! id for image of random cat TESTING
	// console.log(catImage[8].id);
	// console.log(selRandom);
}

//* function to fetch 1 image from API
async function getCatImage() {
	let catImage = await fetch("https://cataas.com/cat");

	// console.log(catImages);
	insertCatImg(catImage);
}

//* function to insert image into document
function insertCatImg(catImage) {
	console.log(catImg);
	console.log(catImage);

	// * * Pulling out the url out of the JSON formatted response from API and displaying it
	catImg.src = catImage.url;
	console.log(catImg);
}

// getCatImage();

//? Testing input and submit button
submitButton.addEventListener("click", getValue);

function getValue() {
	fCatImages(numberOfImages);
}
