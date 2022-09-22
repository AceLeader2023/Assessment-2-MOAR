//! GET RANDOM NUMBERS
const getRandom = {
	numbers() {
		var noImage = document.getElementById("numberofImages").value;
		if (gifImageInputYes.checked == true) {
			for (let i = 0; i < noImage; i++) {
				var randomNumbers = Math.floor(Math.random() * gifImages.length);
				console.log(randomNumbers);
				randomNumberSet.push(randomNumbers);
				console.log(randomNumberSet);
			}
			// Image_GIF.imageGIFDefine(noImage);
			Image_GIF.imageGifDesign(noImage);
		} else {
			for (let i = 0; i < noImage; i++) {
				var randomNumbers = Math.floor(Math.random() * data.length);
				console.log(randomNumbers);
				randomNumberSet.push(randomNumbers);
				console.log(randomNumberSet);
			}
			Image.imagedisplay(noImage);
		}
	},
};

//! STILL IMAGES
//$ ASYNC FETCHING Images ASYNC
async function getImages() {
	var fetchData = await fetch("https://cataas.com/api/cats");
	data = await fetchData.json();
	console.log(data.length);
	console.log(data[1].tags.length);
	console.log(data[1]);
	for (let i = 0; i < data.length; i++) {
		for (let q = 0; q < data[i].tags.length; q++) {
			if (data[i].tags[q] == "gif") {
				data.splice(i, 1);
				console.log(data);
			}
		}
	}
	console.log(data);
	getRandom.numbers();
}

//! GIF IMAGES
//$ ASYNC FETCHING GIF Images ASYNC
async function getGifImages() {
	var fetchGIFData = await fetch("https://cataas.com/api/cats");
	GifData = await fetchGIFData.json();

	for (let i = 0; i < GifData.length; i++) {
		for (let q = 0; q < GifData[i].tags.length; q++) {
			if (GifData[i].tags[q] == "gif") {
				gifImages.push(GifData[i]);
			}
		}
	}

	console.log(gifImages);
	getRandom.numbers();
}

const Image_GIF = {
	imageGifDesign(noImage) {
		GIFQueue.length = 0;

		console.log(randomNumberSet);
		console.log(gifImages[1].id);
		for (let i = 0; i < noImage; i++) {
			GIFQueue[i] = "https://cataas.com/cat/" + gifImages[randomNumberSet[i]].id;
		}

		console.log(size.value);
	},

	imageGIFDefine(noImage) {
		console.log("HI");
		console.log(gifImages);
		console.log(randomNumberSet);

		for (let a = 0; a < noImage; a++) {
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

			newImg.setAttribute("src", "https://cataas.com/cat/" + gifImages[randomNumberSet[a]].id);
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
		randomNumberSet.length = 0;
	},
};

const Image = {
	imagedisplay(noImage) {
		for (let i = 0; i < noImage; i++) {
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
			newImg.id = data[randomNumberSet[i]].id;
			newImg.setAttribute("src", "https://cataas.com/cat/" + data[randomNumberSet[i]].id);
			newImg.setAttribute("alt", data[randomNumberSet[i]].tags);
			newImg.className = "card-img-top";

			// newImg.style = "padding: 500px";
			cards.appendChild(newImg);

			//! Creating DIV - CardBody
			var newDiv = document.createElement("div");
			newDiv.id = "card-body";
			newDiv.className = "card-body";
			cards.appendChild(newDiv);

			// console.log(selectNumbers[i].tags);
		}
		randomNumberSet.length = 0;
	},
};
