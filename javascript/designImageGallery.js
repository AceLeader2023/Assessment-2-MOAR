// SECTION
// PURPOSE To start design all of the images that are going to be displayed on the site. This includes but not limited  if there is text and what color and also link size settings.

// !SECTION

// SECTION Sorting images into GIF or not GIF and selecting images

// VAR to find the number of images the user of app wants
var noImage = document.getElementById("no.Images floatingInputValue").value // Getting value of number of images
var saycolor = [""]

const imageGenerator = {
	// NOTE PUPORSE: Create images with a SAY element
	sayGenerator() {
		GIFQueue.length = 0
		console.log(size)

		if (say.checked == true) {
			for (let i = 0; i < noImage; i++) {
				// NOTE Setting URL with SAY text
				GIFQueue[i] = "https://cataas.com/cat/" + gifImages[randomNumberSet[i]].id + "/says/" + textSayAble.value
			}
		} else if (say.checked == false) {
			for (let i = 0; i < noImage; i++) {
				GIFQueue[i] = "https://cataas.com/cat/" + gifImages[randomNumberSet[i]].id
			}
		}
		this.UrlGenerator()
		Image_GIF.imageGIFDefine()
	},

	// NOTE PURPOSE: Creating image url to append to image so that you can view image in separate window
	UrlGenerator() {
		for (let i = 0; i < noImage; i++) {
			if (size.value != "d") {
				imageURL[i] = GIFQueue[i] + "?type=" + size.value
				console.log("yes")
			} else if (size.value == "d") {
				console.log("no")
				imageURL[i] = GIFQueue[i]
			}
		}
	},

	sayColorGenerator() {
		var colorPicker = Math.floor(Math.random() * colorSay.length)

		for (let i = 0; i < noImage; i++) {
			if (textSayAble.disabled == false) {
				console.log("hi")
				GIFQueue[i] = GIFQueue[i] + "?color=" + colorSay[colorPicker]
			}
		}
	},
}
