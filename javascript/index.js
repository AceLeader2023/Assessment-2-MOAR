const catImg = document.getElementById("CAT1");

var submitButton = document.getElementById("submit");
var cat;
var selRandom = [];
var ids = [];
var cardArea = document.getElementById("row");
// const cards = document.getElementById("cards");
// const cardsBody = document.getElementById("card-body");

//? Fetching multiple images from API
async function fetchImages(numberofImages) {
	// * fetching the api
	var catImage = await fetch("https://cataas.com/api/cats");

	//* converting to json format
	data = await catImage.json();
	// console.log(data);
	// console.log(data.length);
	randomImages(data, numberofImages);

	//! id for image of random cat TESTING
	// console.log(catImage[8].id);
	// console.log(selRandom);
}

//! Creating a list of random images
function randomImages(data, numberofImages) {
	//? Picks random number within the range of the catImage.length / pushes them to selRandom
	for (let i = 0; i < numberofImages; i++) {
		var unselRandom = Math.floor(Math.random() * data.length);
		selRandom.push(unselRandom);
	}
	displayRandomImages(selRandom, data);
	numberofImages = 0;
	// console.log(data);
}

//! Displaying a grid
function displayRandomImages(selRandom, data) {
	// console.log(data);
	// console.log(selRandom);

	for (let i = 0; i < selRandom.length; i++) {
		// console.log(data[selRandom[i]]);
		// console.log(data[selRandom[i]].id);

		// * Creating Elements
		//! COL Div
		var divCol = document.createElement("div");
		divCol.className = "col";
		cardArea.appendChild(divCol);

		//! Creating DIV - CardElement
		var cards = document.createElement("div");
		cards.className = "card h-100 shadow-sm";
		cards.style = "width: 18rem";
		divCol.appendChild(cards);

		//! Image elements
		var newImg = document.createElement("img");
		newImg.id = data[selRandom[i]].id;
		newImg.setAttribute("src", "https://cataas.com/cat?" + data[selRandom[i]].id);
		newImg.setAttribute("alt", data[selRandom[i]].tags);
		newImg.className = "card-img-top";
		// newImg.style = "padding: 500px";
		cards.appendChild(newImg);

		//! Creating DIV - CardBody
		var newDiv = document.createElement("div");
		newDiv.id = "card-body";
		newDiv.className = "card-body";
		cards.appendChild(newDiv);

		//! To shorten the code
		var tags = data[selRandom[i]].tags;

		// ! Paragraph element
		if (tags.length > 0) {
			var newTags = document.createElement("p");
			var newPText = document.createTextNode(`Tags: ${tags.join(", ")}`);
			newTags.className = "card-text";
			newDiv.appendChild(newTags);
			newTags.appendChild(newPText);
		} else {
			var newTags = document.createElement("p");
			var newPText = document.createTextNode("No Tags");
			newTags.className = "card-text";
			newDiv.appendChild(newTags);
			newTags.appendChild(newPText);
		}
	}
	selRandom.length = 0;
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
	var numberofImages = document.getElementById("numberOfImages").value;
	console.log(numberofImages);
	fetchImages(numberofImages);
}
