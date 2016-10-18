
//jquery.css(`"background". ${hexcode}`))

var hexadecimals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]


hexValues()

randHexValues()


function hexValues() {
	hexNumber = "#"
	for (var i = 0; i < 6; i += 1) {
	hexNumber += hexadecimals[Math.floor(Math.random() * 16)]
	$("#hex").html(hexNumber)
	$("body").css("background",hexNumber)
	}
}

function randHexValues() {
	setInterval(function() {
		hexValues()
	}, 3000)	
}




// $("body").fadeOut("slow", function() {
// 		$(this).css("background",hexNumber)
// 	})