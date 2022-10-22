//$ Varibles | Const
var submitButton = document.getElementById("submit") //? Submit button
//? Input box
var cardArea = document.getElementById("row") //?Area for photos

var enableGif = document.getElementById("flexSwitchCheckChecked enableGIF")
var size = document.getElementById("size")
var say = document.getElementById("flexSwitchCheckChecked textSay")
var textSayAble = document.getElementById("sayTextValue")
var sayColor = document.getElementById("color")
var noImageError = document.getElementById("noImageError")
var downloadBtn = document.getElementById("down")
var imageNumber = document.getElementById("noImages")
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
downloadBtn.addEventListener("click", logGenerator)

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

//NOTE - To generate a Txt file with some data in it.
function logGenerator() {
	console.log(enableGif.value)
	if (gifImages.length == 0) {
		gifImages = "No images fetched - ERROR"
	}
	if (images.length == 0) {
		images = "No images fetched - ERROR"
	}
	let data =
		"\r No of images: " +
		imageNumber.value +
		"\r\n " +
		"random numbers: " +
		randomNumberSet +
		"\r\n" +
		"no Image Error: " +
		noImageError +
		"\r\n" +
		"Images Fetched (GIF): " +
		gifImages +
		"\r\n" +
		"Images Fetched (STILL): " +
		images

	const textToBlob = new Blob([data], { type: "text/plain" })
	const sFileName = "formData.txt"

	let newlink = document.createElement("a")
	newlink.download = sFileName

	if (window.webkitURL != null) {
		newlink.href = window.webkitURL.createObjectURL(textToBlob)
	} else {
		newlink.href = window.URL.createObjectURL(textToBlob)
		newlink.style.display = "none"
		document.body.appendChild(newlink)
	}

	newlink.click()
}
