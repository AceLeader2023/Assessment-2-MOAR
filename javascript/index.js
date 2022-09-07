const catImg = document.getElementById("CAT1");
var numberofImages = document.getElementById("numberOfImages").value;
var submitButton = document.getElementById("submit");
var cat;
var selRandom = [];
var ids = [];
const cards = document.getElementById("cards");

//? Fetching multiple images from API
async function fCatImages(numberofImages) {
	// * fetching the api
	var catImage = await fetch("https://cataas.com/api/cats");

	//* converting to json format
	data = await catImage.json();
	// console.log(data);
	// console.log(data.length);
	randomImages(data);

	//! id for image of random cat TESTING
	// console.log(catImage[8].id);
	// console.log(selRandom);
}

//! Creating a list of random images
function randomImages(data) {
	//? Picks random number within the range of the catImage.length / pushes them to selRandom
	for (let i = 0; i < numberofImages; i++) {
		var unselRandom = Math.floor(Math.random() * data.length);
		selRandom.push(unselRandom);
	}
	displayImages(selRandom, data);
	console.log(data);
}

//! Displaying a grid
function displayImages(selRandom, data) {
	console.log(data);
	console.log(selRandom);

	for (let i = 0; i < selRandom.length; i++) {
		console.log(data[selRandom[i]]);
		console.log(data[selRandom[i]].id);

		// * Creating Elements
		//! Image elements
		var newImg = document.createElement("img");
		newImg.id = data[selRandom[i]].id;
		newImg.setAttribute("src", "https://cataas.com/cat?" + data[selRandom[i]].id);
		newImg.setAttribute("alt", data[selRandom[i]].tags);
		cards.appendChild(newImg);

		//! To shorten the code
		var tags = data[selRandom[i]].tags;

		// //! Paragraph element
		var newTags = document.createElement("p");
		var newPText = document.createTextNode(tags.join(" "));
		cards.appendChild(newPText);
	}
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
	fCatImages(numberofImages);
}
