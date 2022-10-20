// SECTION
// PURPOSE to show the images. This module of the application is so that it displays the images. Either STILL images or GIFs.

var displayImage // VAR displayImage: is to display whatever image you want to use.

var displayImageID = [] // VAR displayImageID: is the images id from the orginal array.
var displayImageAltText = [] // VAR displayImageAltText: is the images alterative text which is the tags from the orginal image so it can be identify but people that can not see image

// !SECTION

const display = {
	//PURPOSE - This is to gather the information for displaying the images.
	informationGet() {
		// VAR displayImage - is used for declaring what image style we are going to display and is an array
		console.log("done 2")

		if (GIFQueue.length > 0) {
			displayImage = GIFQueue //NOTE - GIFQueue is all of the GIF images from the main Json and is assigning the same array to the displayImage array
			for (let i = 0; i < displayImage.length; i++) {
				displayImageID[i] = gifImages[randomNumberSet[i]].id
				displayImageAltText[i] = gifImages[randomNumberSet[i]].tags
			}
		} else if (stillImagesQueue.length > 0) {
			displayImage = stillImagesQueue
			for (let i = 0; i < displayImage.length; i++) {
				displayImageID = stillImages[randomNumberSet[i]].id
				displayImageAltText[i] = stillImages[randomNumberSet[i]].tags
			}
		}
		console.log("Done - Display Image")
		console.log(displayImage)
		console.log(displayImageID)
		console.log(displayImageAltText)
		console.log("Done - Display Image")

		this.informationDisplay()
	},

	//PURPOSE - To display the images to the user that requested those images
	informationDisplay() {
		//NOTE - displayImage - is to hold the link for the image
		console.log(displayImage)
		//NOTE - displayImageID - is to hold the image's ID for the id of the element
		console.log(displayImageID)
		//NOTE - displayImageAltText - is to hold the image's tags that are attached to the image
		console.log(displayImageAltText)

		for (let i = 0; i < displayImage.length; i++) {
			// NOTE Creating Elements for image
			// Creating the column
			var divCol = document.createElement("div")
			divCol.className = "col"
			divCol.id = "cols"

			// Appending divCol to cardArea
			cardArea.appendChild(divCol)

			// NOTE Card Element
			var cards = document.createElement("div")
			cards.className = "card shadow-sm"
			cards.style.width = "18rem"
			cards.style.height = "250px"
			cards.style.backgroundColor = "#dcdcdc"

			// Appending cards to divCol
			divCol.appendChild(cards)

			// NOTE Creating image element
			var newImg = document.createElement("img")
			newImg.id = displayImageID[i]
			newImg.className = "card-img-top"
			newImg.style.objectFit = "cover"
			newImg.style.overflow = "hidden"
			newImg.setAttribute("src", displayImage[i])
			newImg.setAttribute("alt", displayImageAltText[i])

			// Appending newImg to cards
			cards.appendChild(newImg)
		}
		randomNumberSet.length = 0
		GIFQueue.length = 0
		stillImagesQueue.length = 0
	},
}
