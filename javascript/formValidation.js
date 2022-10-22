//NOTE - adding animation to fetching error message
var errorMessageAnime = document.getElementById("error-message-fetching")

const formValidation = {
	formValidator() {
		var noImage = document.getElementById("noImages").value
		noImage = Number(noImage)

		//NOTE - Checking that number is above 0
		if (noImage != 0) {
			console.log("ERROR")
			noImageError.style.visibility = "hidden"
		} else if (noImage == 0) {
			console.log("ERROR - 0")
			noImageError.style.visibility = "visible"
		}

		// NOTE Checking Say text
		var sayLength = document.getElementById("sayTextValue")
		var sayError = document.getElementById("sayError")
		if (say.checked == true) {
			console.log("YEAH")
			if (sayLength.value.length == 0) {
				console.log("ERROR - none")
				sayError.style.visibility = "visible"
			} else if (sayLength.value.length != 0) {
				sayError.style.visibility = "hidden"

				console.log("YYEAH")
			}
		}
	},
}
