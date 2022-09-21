//! GET RANDOM NUMBERS

//! GIF IMAGES
const getGifImages = async () => {
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
};

const Image_GIF = {
	sepImage_GIF() {
		var GIFSep = [];
		for (let i = 0; i < GIFdata.length; i++) {
			if (GIFdata[i].tags == "gif") {
				GIFSep.push(GIFdata[i]);
			}
		}

		Image_GIF.randomGIFSelection(GIFSep);
	},

	randomGIFSelection(GIFSep) {
		var SeledGIFId = [];
		// console.log(GIFSep);
		var xImages = document.getElementById("numberofImages").value;
		// console.log(xImages);

		for (let i = 0; i < xImages; i++) {
			var unSelGIFId = Math.floor(Math.random() * GIFSep.length);
			SeledGIFId.push(GIFSep[unSelGIFId]);
			console.log(SeledGIFId);
		}
		//

		Image_GIF.imageGIFDefine(GIFSep, xImages, SeledGIFId);
	},

	imageGIFDefine(GIFSep, xImages, SeledGIFId) {
		console.log("HI");
		for (let a = 0; a < xImages; a++) {
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

			newImg.setAttribute("src", "https://cataas.com/cat/" + SeledGIFId[a].id);
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
	},
};
