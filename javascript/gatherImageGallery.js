// SECTION
// PURPOSE Is to gather image data for gallery and to sort still and Gif images. Also to gather random image numbers that depend on the type of image that the user requests

// 1. Async Function Fetching Data - To gather the data and storing it into an array = data
// 2. Sorting - To sort data into two global arrays stillImages + gifImages
// 3. Random Numbers - To gather random numbers depending on how many they request

// VARs not global
// - noImages declares how many images are getting added to the page
// !SECTION

// SECTION Async Function Fetching Data
//PURPOSE - getImages is to fetch the images from the API
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
//PURPOSE - creatingSortedData is there to sort out the GIFs and the still images that are fetch from the API
const creatingSortedData = {
	//PURPOSE - sort is here to sort the GIFs and still images apart using the tags that are also fetched at the time of getting the images
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
//PURPOSE - To get ready for displaying the images, a random number generation is generating an array with random numbers
const getRandom = {
	//PURPOSE - Gets the numbers for either GIF images or still images depending if GIF is true
	numbers() {
		//NOTE - noImage is the number of images the user wants
		var noImage = document.getElementById("noImages").value
		if (enableGif.checked == true) {
			for (let i = 0; i < noImage; i++) {
				//NOTE - randomNumbers is a random number that gets pushed to randomNumbnerSet
				var randomNumbers = Math.floor(Math.random() * gifImages.length)
				console.log(randomNumbers)
				//NOTE - randomNumberSet is a array of the random numbers that have been generated
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
