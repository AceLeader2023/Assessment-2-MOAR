//? CONSTs

//? VARs
var cat;
var ids = [];
var selRandom = [];
var submited = false;

//? Finding Elements
var clearBTN = document.getElementById("clearBTN"); //?div for clear btn
// const submitButton = document.getElementById("submit");
var cardArea = document.getElementById("row"); //?Area for photos
var message = document.getElementById("messageArea"); //?Inital message area
var Qmessage = document.getElementById("quick-message"); //?intial message p
var maxNumber = document.getElementById("numberofImages"); //?Getting input box with no. images
var submitAlert = document.createElement("button");
var tagYes = document.getElementById("yes"); //?Yes Radio Button
var tagNo = document.getElementById("no"); //? No Radio Button
var tagInput = document.getElementById("tag-input");
var tagAdds = document.getElementById("tags");

const myNodes = document.querySelectorAll("input");

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
		console.log(submitAlert);
	}
}

//!Checking Tag Area
async function tagGet() {
	if (tagYes.checked == true && tagNo.checked == false) {
		var fetchTags = await fetch("https://cataas.com/api/tags"); //$fetching all tags
		dataTags = await fetchTags.json(); //$ converting to json
		console.log(dataTags);

		tagAdd();
	} else {
		tagInput.style.visibility = "hidden";
	}
}

function tagAdd() {
	console.log(dataTags[3]);
	for (let i = 0; i < dataTags.length; i++) {
		//$Creating element option to have presets
		var tag = document.createElement("option");
		tag.value = dataTags[i];
		tagAdds.appendChild(tag);
		console.log(tagAdds);
	}
	tagInput.style.visibility = "visible";
}
