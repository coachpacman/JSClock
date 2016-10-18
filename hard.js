

$(document).ready(function() {


	var hexadecimals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

	var hexNumber = "#"

	randHexValue()

	setInterval(function() {
		randHexValue()
		$("#hex1").toggleClass("current")
		$("#hex2").toggleClass("current")	
	}, 3000)


	
	function randHexValue() {
		for (var i = 0; i < 6; i += 1) {
				hexNumber += hexadecimals[Math.floor(Math.random() * 16)]
		}
		
		$("#hex1, #hex2").html(hexNumber).css("background", hexNumber)
		console.log(hexNumber)
		hexNumber = "#"
	}

})


