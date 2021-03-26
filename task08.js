function timeConverter(numberToConvert){
    var convertToHour = Math.floor(numberToConvert / 60);

    var convertToMinutes = numberToConvert % 60;

    if(convertToHour <= 1 && convertToMinutes <= 1){
        console.log(numberToConvert + ' will become "' + convertToHour + ' hour, ' + convertToMinutes + ' minute"')
    } else if (convertToHour > 1 && convertToMinutes > 1) {
        console.log(numberToConvert + ' will become "' + convertToHour + ' hours, ' + convertToMinutes + ' minutes"')
    } else {
        console.log(numberToConvert + ' will become "' + convertToHour + ' hour, ' + convertToMinutes + ' minutes"')
    }

}
timeConverter(09);
timeConverter(71);
timeConverter(133);

/*Make a function to convert any number into hours and minutes. 
(For example, 71 will become “1 hour, 11 minutes; 133 will become “2 hours, 13 minutes.)

Most people get this question wrong. Make sure you handle singulars and plurals for both hours and minutes.*/