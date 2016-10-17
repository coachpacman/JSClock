console.log('test')

setInterval(function() {
	var number = ""
	var date = new Date()
	var hours = date.getHours()
	if (hours > 12) {
		hours = hours - 12 
	}
	
	if (hours < 10) {
		hours = "0" + hours
	}

	var minutes = date.getMinutes()
	setDigits(minutes)
	
	var seconds = date.getSeconds()
	setDigits(seconds)

	var time = hours + ":" + minutes + ":" + seconds 
	$("#clock").html(time)


	function setDigits(number) {
		if (number < 10) {
		number = "0" + number
		}
		console.log(String(number))
	}

} , 1000) 


