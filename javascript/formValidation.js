const formValidation = {
	formValidator() {
		var noImage = document.getElementById("no.Images floatingInputValue").value
		noImage = Number(noImage)
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
				sayError.style.visibility = "hidden"
			}
		}
	},
}
