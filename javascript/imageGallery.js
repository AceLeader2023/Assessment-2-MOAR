const catImg = document.getElementById("CAT1");
var clearBTN = document.getElementById("clearBTN");
const submitButton = document.getElementById("submit");

var cat;
var selRandom = [];
var ids = [];
var submited = false;
var cardArea = document.getElementById("row");

//? Event Listeners
submitButton.addEventListener("click", getValue);
// clearBTN.addEventListener("click", clearImagesBTN);

function getValue() {
	var numberofImages = document.getElementById("numberOfImages").value;
	// console.log(numberofImages);
	fetchImages(numberofImages);
}

//? Fetching multiple images from API
async function fetchImages(numberofImages) {
	// * fetching the api
	var catImage = await fetch("https://cataas.com/api/cats");

	//* converting to json format
	data = await catImage.json();
	randomImages(data, numberofImages);
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
		divCol.id = "cols";
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
	clearImagesBTN();

	// console.log(selRandom);
}

//s Clearing Images
function clearImagesBTN() {
	if (submited == false) {
		submited = true;
		clearAllImagesBTN();
	}
}

function clearAllImagesBTN() {
	var newBTNClear = document.createElement("button");
	newBTNClear.className = "btn btn-warning";
	var newBTNText = document.createTextNode("CLEAR");
	clearBTN.appendChild(newBTNClear);
	newBTNClear.appendChild(newBTNText);
	newBTNClear.addEventListener("click", deleteImages);
}

function deleteImages() {
	location.reload();
}
