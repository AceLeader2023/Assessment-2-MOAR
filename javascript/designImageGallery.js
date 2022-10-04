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
		console.log("ji")

		// NOTE If Say is enable and GIF is true then this
		if (say.checked == true && enableGif.checked == true) {
			console.log("true true")
			var sayLength = document.getElementById("sayTextValue")
			var sayColor = document.getElementById("color floatingSelect")
			console.log(sayLength.value.length)
			// NOTE Checking that there is something in text box
			if (sayLength.value.length > 0) {
				console.log("asd")
				for (let i = 0; i < noImage; i++) {
					// NOTE Setting URL with SAY text
					GIFQueue[i] = "https://cataas.com/cat/" + gifImages[randomNumberSet[i]].id + "/says/" + textSayAble.value + "?color=" + sayColor
					console.log(gifImages)
				}
				this.UrlGenerator()
				// TODO Create a invilid message via another doc that holds all invild messages.
			} else if (sayLength.value.length == 0) {
				console.log("INVLID")
				//invalidMessages.SayText()
			}
		} else if (say.checked == false && enableGif.checked == true) {
			console.log("false trye")
			console.log(gifImages)
			for (let i = 0; i < noImage; i++) {
				GIFQueue[i] = "https://cataas.com/cat/" + gifImages[randomNumberSet[i]].id
				console.log(gifImages)
			}
			this.UrlGenerator()
		} else if (say.checked == true && enableGif.checked == false) {
			console.log("true false")
			for (let i = 0; i < noImage; i++) {
				stillImagesQueue[i] = "https://cataas.com/cat/" + stillImages[randomNumberSet[i]].id + "/says/" + textSayAble.value + "?color=" + sayColor
				console.log(gifImages)
			}
			this.UrlGenerator()
		}

		// Image_GIF.imageGIFDefine()
	},

	// NOTE PURPOSE: Creating image url to append to image so that you can view image in separate window
	UrlGenerator() {
		console.log("yo")
		for (let i = 0; i < noImage; i++) {
			if (size.value != "d") {
				imageURL[i] = GIFQueue[i] + "?type=" + size.value
				console.log("yes")
			} else if (size.value == "d") {
				console.log("no")
				imageURL[i] = GIFQueue[i]
			}
		}
		Image_GIF.imageGIFDefine()
	},

	// sayColorGenerator() {
	// 	var colorPicker = Math.floor(Math.random() * colorSay.length)
	// 	for (let i = 0; i < noImage; i++) {
	// 		if (textSayAble.disabled == false) {
	// 			GIFQueue[i] = GIFQueue[i] + "?color=" + colorSay[colorPicker]
	// 		}
	// 	}

	// 	Image_GIF.imageGIFDefine()
	// },
}
