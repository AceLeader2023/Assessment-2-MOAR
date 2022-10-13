// SECTION
// PURPOSE Is to gather image data for gallery and to sort still and Gif images. Also to gather random image numbers that depend on the type of image that the user requests

// 1. Async Function Fetching Data - To gather the data and storing it into an array = data
// 2. Sorting - To sort data into two global arrays stillImages + gifImages
// 3. Random Numbers - To gather random numbers depending on how many they request

// VARs not global
// - noImages declares how many images are getting added to the page
// !SECTION

// SECTION Async Function Fetching Data
async function getImages() {
	try {
		// NOTE Setting all arrays to 0 length so there is no repeat
		stillImages.length = 0
		gifImages.length = 0

		// NOTE Fetching Data
		var fetchData = await fetch("https://cataas.com/api/cats")
		data = await fetchData.json() // NOTE Changing to json format
		creatingSortedData.sort() // run next class - sorting
	} catch {
		anime({
			targets: errorMessageAnime,
			duration: 1000,
			translateY: 150,
		})
	}
}
// !SECTION

// SECTION Sorting data array into two different arrays stillImages + gifImages
const creatingSortedData = {
	sort() {
		// NOTE Setting yesStill to zero so data is always reset
		var yesStill = 0

		// NOTE To sort STILL or GIF
		for (let a = 0; a < data.length; a++) {
			for (let b = 0; b < data[a].tags.length; b++) {
				console.log[a]
				// NOTE Checks if there is a gif in array
				if (data[a].tags[b] != "gif") {
					yesStill = yesStill + 1
				}
			}
			// NOTE checking whether - ...tags.length == yesStill
			if (yesStill == data[a].tags.length) {
				stillImages.push(data[a]) // puts Still Images in with stillImages
			} else {
				// NOTE checking wheather - ...tags.length != Still
				gifImages.push(data[a]) // puts GIFs in with gifImages
			}
			// NOTE To reset yesStill
			yesStill = 0
		}
		getRandom.numbers()
	},
}
// !SECTION

//! GET RANDOM NUMBERS
const getRandom = {
	numbers() {
		var noImage = document.getElementById("noImages").value
		if (enableGif.checked == true) {
			for (let i = 0; i < noImage; i++) {
				var randomNumbers = Math.floor(Math.random() * gifImages.length)
				console.log(randomNumbers)
				randomNumberSet.push(randomNumbers)
				console.log(randomNumberSet)
			}
			// Image_GIF.imageGIFDefine(noImage);

			// Image_GIF.imageGifDesign(noImage)
			imageGenerator.sayGenerator()
		} else {
			for (let i = 0; i < noImage; i++) {
				var randomNumbers = Math.floor(Math.random() * stillImages.length)
				console.log(randomNumbers)
				randomNumberSet.push(randomNumbers)
				console.log(randomNumberSet)
			}
			// Image.imagedisplay(noImage)
			imageGenerator.sayGenerator()
		}
	},
}
