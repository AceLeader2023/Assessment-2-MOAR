//! GET RANDOM NUMBERS
const getRandom = {
	numbers() {
		var noImage = document.getElementById("no.Images floatingInputValue").value;
		if (enableGif.checked == true) {
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
				var randomNumbers = Math.floor(Math.random() * stillImages.length);
				console.log(randomNumbers);
				randomNumberSet.push(randomNumbers);
				console.log(randomNumberSet);
			}
			Image.imagedisplay(noImage);
		}
	},
};

// SECTION fetching IMAGES
// TOPIC ASYNC FETCHING Images ASYNC
async function getImages() {
	var yesStill = 0;
	stillImages.length = 0;
	console.log(yesStill);
	var fetchData = await fetch("https://cataas.com/api/cats");
	data = await fetchData.json();

	// NOTE To sort STILL or GIF
	for (let a = 0; a < data.length; a++) {
		for (let b = 0; b < data[a].tags.length; b++) {
			console.log[a];
			// NOTE Checks if there is a gif in array
			if (data[a].tags[b] != "gif") {
				yesStill = yesStill + 1;
			}
		}

		// NOTE checking whether - ...tags.length == yesStill
		if (yesStill == data[a].tags.length) {
			stillImages.push(data[a]); // puts Still Images in with stillImages
		} else {
			// NOTE checking wheather - ...tags.length != Still
			gifImages.push(data[a]); // puts GIFs in with gifImages
		}
		// NOTE To reset yesStill
		yesStill = 0;
	}
	getRandom.numbers();
}
// !SECTION

const Image_GIF = {
	imageGifDesign(noImage) {
		GIFQueue.length = 0;

		console.log(randomNumberSet);
		console.log(gifImages[1].id);
		for (let i = 0; i < noImage; i++) {
			GIFQueue[i] = "https://cataas.com/cat/" + gifImages[randomNumberSet[i]].id;
		}

		console.log(GIFQueue);

		if (size.value == "or") {
			for (let i = 0; i < GIFQueue.length; i++) {
				console.log(size.value);
				GIFQueue[i] = GIFQueue[i] + "?type=" + size.value;
			}
		} else if (size.value == "md") {
			for (let i = 0; i < GIFQueue.length; i++) {
				console.log(size.value);
				GIFQueue[i] = GIFQueue[i] + "?type=" + size.value;
			}
		} else {
			for (let i = 0; i < GIFQueue.length; i++) {
				GIFQueue[i] = GIFQueue[i] + "?type=" + size.value;
			}
		}
		console.log(GIFQueue);

		Image_GIF.imageGIFDefine();
	},

	imageGIFDefine() {
		for (let a = 0; a < GIFQueue.length; a++) {
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
			newImg.setAttribute("src", GIFQueue[a]);
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
			newImg.id = stillImages[randomNumberSet[i]].id;
			newImg.setAttribute("src", "https://cataas.com/cat/" + stillImages[randomNumberSet[i]].id);
			newImg.setAttribute("alt", stillImages[randomNumberSet[i]].tags);
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
