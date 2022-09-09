//? CONSTs

//? VARs
var cat;
var ids = [];
var selRandom = [];
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
// var userInputTag = document.getElementById("user-tag");

//!Event Listeners
tagYes.addEventListener("click", tagGet);
tagNo.addEventListener("click", tagGet);

//! Called once body has loaded
async function fetchingData() {
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

//! User INPUT how many images and random
function selectingNumbers() {
	var userNumberImages = document.getElementById("numberofImages").value; //$ Get Value
	console.log(maxNumber.min);
	console.log(maxNumber.max);

	if (userNumberImages < maxNumber.min || userNumberImages > maxNumber.max) {
		maxNumber.style.height = "30px";
		maxNumber.style.width = "208.667";
		maxNumber.style.borderBottom = "red solid 2px";
		// console.log(submitAlert);
	}
}

//!TAGS
//! Fetching Tags
async function tagGet() {
	if (tagYes.checked == true && tagNo.checked == false) {
		var fetchTags = await fetch("https://cataas.com/api/tags"); //$ fetching all tags
		dataTags = await fetchTags.json(); //$ converting to json
		// console.log(dataTags);
		tagAdd(); //? running to add all tags to input field
	} else {
		tagInput.style.visibility = "hidden";
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

function searchTags() {
	// console.log("search");
	// console.log(tagAdds.value);
	// console.log(data[3].tags);

	//$ To reset tagSelected Array
	for (let a = 0; a < tagSelected.length; a++) {
		tagSelected.pop();
	}

	//$ Storing data values into an array
	for (let i = 0; i < data.length; i++) {
		if (data[i].tags.indexOf(tagAdds.value) > -1) {
			tagSelected.push(data[i]);
		}
	}

	//$Displaying result number to user
	var submitdisabled = document.getElementById("submit");
	tagResult.innerHTML = "You have " + tagSelected.length + " result available to you";

	if (tagSelected.length == 0) {
		submitdisabled.disabled = true;
	} else {
		submitdisabled.disabled = false;
	}
}
