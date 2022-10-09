//$ Varibles | Const
var submitButton = document.getElementById("submit") //? Submit button
//? Input box
var cardArea = document.getElementById("row") //?Area for photos

var enableGif = document.getElementById("flexSwitchCheckChecked enableGIF")
var size = document.getElementById("size floatingSelect")
var say = document.getElementById("flexSwitchCheckChecked textSay")
var textSayAble = document.getElementById("sayTextValue")
var sayColor = document.getElementById("color floatingSelect")
var noImageError = document.getElementById("noImageError")
var selectNumbers = [] //? Defining a emtpy array
var gifImages = []
var images = []
var randomNumberSet = []
var data
var finishImage
var GIFQueue = [] // for GIF images
var stillImages = []
var stillImagesQueue = []
var imageURL = []
var colorSay = [
	"AliceBlue",
	"AntiqueWhite",
	"Aqua",
	"Aquamarine",
	"Azure",
	"Beige",
	"Bisque",
	"black",
	"blanchedalmond",
	"blue",
	"blueviolet",
	"brown",
	"burlywood",
	"cadetblue",
]

let url = "https://cataas.com/cat/"

// Event Listeners
submitButton.addEventListener("click", loadImages)
say.addEventListener("mousedown", able)

// To display images
async function loadImages() {
	await formValidation.formValidator()
	console.log("CHECK DONE")
	getImages()
}

// Disabling and enbling text on images.
function able() {
	if (say.checked != true) {
		textSayAble.disabled = false
		sayColor.disabled = false
	} else {
		textSayAble.disabled = true
		textSayAble.value = ""
		sayColor.disabled = true
	}
}
