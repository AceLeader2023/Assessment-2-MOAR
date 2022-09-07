const catImg = document.getElementById("CAT1");

//* function to fetch data from API
async function getCatImages() {
	let catImages = await fetch("https://cataas.com/cat");

	// console.log(catImages);
	insertCatImg(catImages);
}

//* function to insert image into document
function insertCatImg(catImages) {
	console.log(catImg);
	console.log(catImages);

	// * * Pulling out the url out of the JSON formatted response from API and displaying it
	catImg.src = catImages.url;
	console.log(catImg);
}

getCatImages();
