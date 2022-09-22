//$ Varibles | Const
var submitButton = document.getElementById("submit"); //? Submit button
//? Input box
var cardArea = document.getElementById("row"); //?Area for photos
var gifImageInputYes = document.getElementById("yes"); //? Yes to GIF image
var gifImageInputNo = document.getElementById("no"); //? GIF = no
var selectNumbers = []; //? Defining a emtpy array
var gifImages = [];
var images = [];
var randomNumberSet = [];
var data;
var finishImage;
var GIFQueue = [];

let url = "https://cataas.com/cat/";

//$ Event Listeners
submitButton.addEventListener("click", loadImages);

async function loadImages() {
	// console.log(xImages.value);

	//! Do random images or GIF images
	if (gifImageInputYes.checked == true) {
		if (gifImages.length > 0) {
			gifImages.length = 0;
		}
		getGifImages();
	} else {
		getImages();
	}
}
