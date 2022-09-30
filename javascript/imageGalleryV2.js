//$ Varibles | Const
var submitButton = document.getElementById("submit"); //? Submit button
//? Input box
var cardArea = document.getElementById("row"); //?Area for photos
// var gifImageInputYes = document.getElementById("yes"); //? Yes to GIF image
// var gifImageInputNo = document.getElementById("no"); //? GIF = no
var enableGif = document.getElementById("flexSwitchCheckChecked enableGIF");
var size = document.getElementById("size floatingSelect");
var say = document.getElementById("flexSwitchCheckChecked textSay");
var textSayAble = document.getElementById("sayTextValue");
var selectNumbers = []; //? Defining a emtpy array
var gifImages = [];
var images = [];
var randomNumberSet = [];
var data;
var finishImage;
var GIFQueue = [];
var stillImages = [];

let url = "https://cataas.com/cat/";

//$ Event Listeners
submitButton.addEventListener("click", loadImages);
say.addEventListener("mousedown", able);

async function loadImages() {
	getImages();
}

function able() {
	if (say.checked != true) {
		textSayAble.disabled = false;
	} else {
		textSayAble.disabled = true;
		textSayAble.value = "";
	}
}
