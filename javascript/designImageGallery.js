// SECTION
// PURPOSE To start design all of the images that are going to be displayed on the site. This includes but not limited  if there is text and what color and also link size settings.

// !SECTION

// SECTION Sorting images into GIF or not GIF and selecting images
const imageGenerator = {
	GIFGenerator() {
		var noImage = document.getElementById("no.Images floatingInputValue").value // Getting value of number of images
		GIFQueue.length = 0

		if (say.checked == true) {
			for (let i = 0; i < noImage; i++) {
				GIFQueue[i] = "https://cataas.com/cat/" + gifImages[randomNumberSet[i]].id + "/says/" + textSayAble.value
			}
		}
		console.log(GIFQueue)
		Image_GIF.imageGIFDefine()
	},
}
