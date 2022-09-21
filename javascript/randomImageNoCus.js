const logImages = {
	randomImages(xImages) {
		console.log(xImages);
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
			newImg.setAttribute("src", "https://cataas.com/cat/" + selectNumbers[i].id);
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
	},
};
