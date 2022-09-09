//? CONSTs

//? VARs
var cat;
var ids = [];
var ranIamges = [];
var tagSelected = []; //$ For storing when use tag search feature
var submited = false;

//? Finding Elements
var clearBTN = document.getElementById("clearBTN"); //?div for clear btn
//const submitButton = document.getElementById("submit");
var cardArea = document.getElementById("row"); //?Area for photos
var message = document.getElementById("messageArea"); //?Inital message area
var Qmessage = document.getElementById("quick-message"); //?intial message p
var maxNumber = document.getElementById("numberofImages"); //?Getting input box with no. images
var submitAlert = document.createElement("button");
var tagYes = document.getElementById("yes"); //?Yes Radio Button
var tagNo = document.getElementById("no"); //? No Radio Button
var tagInput = document.getElementById("tag-input");
var tagAdds = document.getElementById("tags");
var tagResult = document.getElementById("tag-result");
var hide = document.getElementById("hide");
// var userInputTag = document.getElementById("user-tag");

//!Event Listeners
tagYes.addEventListener("click", tagGet);
tagNo.addEventListener("click", tagGet);

//! Called once body has loaded
async function fetchingData() {
	tagYes.checked = false;
	tagNo.checked = true;
	var fetchedData = await fetch("https://cataas.com/api/cats"); //$ fetching data
	data = await fetchedData.json();

	createSubmitButton();
}

//! Creating a Submit once data has loaded once body load
function createSubmitButton() {
	//$ Creating a submit Button once data loads
	var submitButton = document.createElement("button");
	submitButton.className = "btn btn-primary";
	submitButton.type = "button";
	submitButton.id = "submit";
	//$ Adding a text Node
	var newBTNSubmit = document.createTextNode("SUBMIT");
	Qmessage.style.display = "none";
	//$ Appending submitButton / newBTNSubmit (TEXT)
	submitButton.appendChild(newBTNSubmit);
	message.appendChild(submitButton);
	maxNumber.max = data.length; //$ adding max value
	submitButton.addEventListener("click", selectingNumbers); //$ Adding an event
}

//! User INPUT how many images then random
function selectingNumbers() {
	var userNumberImages = document.getElementById("numberofImages").value; //$ Get Value
	// console.log(maxNumber.min);
	// console.log(maxNumber.max);

	if (userNumberImages < maxNumber.min || userNumberImages > maxNumber.max) {
		maxNumber.style.height = "30px";
		maxNumber.style.width = "208.667";
		maxNumber.style.borderBottom = "red solid 2px";
		// console.log(submitAlert);
	} else {
		maxNumber.style.borderBottom = "solid 3px #333";
	}

	processImages();
}

//!TAGS
//! Fetching Tags
async function tagGet() {
	if (tagYes.checked == true && tagNo.checked == false) {
		var fetchTags = await fetch("https://cataas.com/api/tags"); //$ fetching all tags
		dataTags = await fetchTags.json(); //$ converting to json
		hide.style.visibility = "visible";
		// console.log(dataTags);
		tagAdd(); //? running to add all tags to input field
	} else {
		tagInput.style.visibility = "hidden";
		hide.style.visibility = "hidden";
		while (tagAdds.hasChildNodes()) {
			tagAdds.removeChild(tagAdds.firstChild);
			// console.log(tagAdds);
		}
	}
}

//! Adding tags to input element and displaying
function tagAdd() {
	// console.log(dataTags[3]);
	for (let i = 0; i < dataTags.length; i++) {
		//$ Creating element option to have presets
		var tag = document.createElement("option");
		var tagText = document.createTextNode(dataTags[i]); //$ Creating a text node
		tag.value = dataTags[i]; //$ adding data tags
		tag.appendChild(tagText); //$ appending text node to option tags
		tagAdds.appendChild(tag); //$ appending tag to tagAdd
	}
	tagInput.style.visibility = "visible";
	tagAdds.addEventListener("change", searchTags);
}

//! insert all data that have the selected tag
function searchTags() {
	//$ To reset tagSelected Array
	for (let a = 0; a < tagSelected.length; a++) {
		tagSelected.pop();
	}

	//$ Storing data values into an array for the said tag
	for (let i = 0; i < data.length; i++) {
		if (data[i].tags.indexOf(tagAdds.value) > -1) {
			tagSelected.push(data[i]);
		}
	}

	//$Displaying result number to user
	var submitdisabled = document.getElementById("submit");
	tagResult.innerHTML = "You have " + tagSelected.length + " result available to you";
	maxNumber.value = tagSelected.length;

	if (tagSelected.length == 0) {
		submitdisabled.disabled = true;
	} else {
		submitdisabled.disabled = false;
	}
}

//! Creating any images that are under that are in the tagSelected array
function tagImageCreate() {
	for (let i = 0; i < tagSelected.length; i++) {
		console.log(tagSelected[i].id);
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
		newImg.id = tagSelected.id;
		newImg.setAttribute("src", "https://cataas.com/cat?" + tagSelected[i].id);
		newImg.setAttribute("alt", tagSelected[i].tags);
		newImg.className = "card-img-top";
		// newImg.style = "padding: 500px";
		cards.appendChild(newImg);

		//! Creating DIV - CardBody
		var newDiv = document.createElement("div");
		newDiv.id = "card-body";
		newDiv.className = "card-body";
		cards.appendChild(newDiv);

		//! To shorten the code
		var tags = tagSelected[i].tags;

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
	tagSelected.length = 0;
	clearImagesBTN();
}

//! Process Images
function processImages() {
	// console.log(tagYes);
	//! Create images for tag selected
	if (tagYes.checked == true) {
		tagImageCreate();
	} else {
		for (let i = 0; i < maxNumber.value; i++) {
			var ranUnImages = Math.floor(Math.random() * data.length);
			ranIamges.push(ranUnImages);
			// console.log(ranIamges);
		}
		createRandomImage(ranIamges);
	}
}

//! Creating random images
function createRandomImage(ranIamges) {
	for (let i = 0; i < ranIamges.length; i++) {
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
		newImg.id = data[ranIamges[i]].id;
		newImg.setAttribute("src", "https://cataas.com/cat?" + data[ranIamges[i]].id);
		newImg.setAttribute("alt", data[ranIamges[i]].tags);
		newImg.className = "card-img-top";
		// newImg.style = "padding: 500px";
		cards.appendChild(newImg);

		//! Creating DIV - CardBody
		var newDiv = document.createElement("div");
		newDiv.id = "card-body";
		newDiv.className = "card-body";
		cards.appendChild(newDiv);

		//! To shorten the code
		var tags = data[ranIamges[i]].tags;

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
	ranIamges.length = 0;

	clearImagesBTN();
}

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
