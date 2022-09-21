//$ Varibles | Const
var submitButton = document.getElementById("submit"); //? Submit button
//? Input box
var cardArea = document.getElementById("row"); //?Area for photos
var gifImageInputYes = document.getElementById("yes"); //? Yes to GIF image
var gifImageInputNo = document.getElementById("no"); //? GIF = no
var selectNumbers = []; //? Defining a emtpy array
var gifs = [];
let url = "https://cataas.com/cat/";

//$ Event Listeners
submitButton.addEventListener("click", loadImages);

async function loadImages() {
	// console.log(xImages.value);
	var xImages = document.getElementById("numberofImages").value;
	//! Do random images or GIF images
	if (gifImageInputYes.checked == true) {
		// displayGifImages(xImages);
		var fetchGIFData = await fetch("https://cataas.com/api/cats");
		GIFdata = await fetchGIFData.json();
		console.log(GIFdata);

		Image_GIF.sepImage_GIF(xImages);
	} else {
		var fetchData = await fetch("https://cataas.com/api/cats"); //? Fetching data
		data = await fetchData.json(); //? changing data to json
		console.log(data);
		getRandomImages(xImages);
	}

	// console.log(data[1].id);
}

const GETGIFImage = async () => {};

async function displayGifImages() {
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
	newImg.id = "gif";

	newImg.setAttribute("src", "https://cataas.com/cat/595f280a557291a9750ebf62");
	newImg.setAttribute("alt", "gif");
	newImg.className = "card-img-top";

	// newImg.style = "padding: 500px";
	cards.appendChild(newImg);

	//! Creating DIV - CardBody
	var newDiv = document.createElement("div");
	newDiv.id = "card-body";
	newDiv.className = "card-body";
	cards.appendChild(newDiv);
}

//! Random Images
function getRandomImages(xImages) {
	console.log(data);
	for (let i = 0; i < xImages; i++) {
		var unSelNumber = Math.floor(Math.random() * data.length);
		selectNumbers.push(data[unSelNumber]);
	}
	console.log(selectNumbers);
	// randomImages(xImages);
	logImages.randomImages(xImages);
}

function randomImages(xImages) {
	for (let i = 0; i < xImages; i++) {
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
		newImg.id = selectNumbers[i].id;
		newImg.setAttribute("src", "https://cataas.com/cat/" + selectNumbers[i].id + "/says/HI");
		newImg.setAttribute("alt", selectNumbers[i].tags);
		newImg.className = "card-img-top";

		// newImg.style = "padding: 500px";
		cards.appendChild(newImg);

		//! Creating DIV - CardBody
		var newDiv = document.createElement("div");
		newDiv.id = "card-body";
		newDiv.className = "card-body";
		cards.appendChild(newDiv);

		console.log(selectNumbers[i].tags);
	}
	selectNumbers.length = 0;
	console.log(localStorage);
}
