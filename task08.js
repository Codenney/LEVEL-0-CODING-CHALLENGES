function timeConverter(minutesToConvert){
    var convertToHour = Math.floor(minutesToConvert / 60);

    var convertToMinutes = minutesToConvert % 60;

    if(convertToHour <= 1 && convertToMinutes <= 1){
        console.log(minutesToConvert + ' will become "' + convertToHour + ' hour, ' + convertToMinutes + ' minute"')
    } else if (convertToHour > 1 && convertToMinutes > 1) {
        console.log(minutesToConvert + ' will become "' + convertToHour + ' hours, ' + convertToMinutes + ' minutes"')
    } else {
        console.log(minutesToConvert + ' will become "' + convertToHour + ' hour, ' + convertToMinutes + ' minutes"')
    }

}
timeConverter(9);
timeConverter(71);
timeConverter(133);

/*Make a function to convert any number into hours and minutes. 
(For example, 71 will become “1 hour, 11 minutes; 133 will become “2 hours, 13 minutes.)

Most people get this question wrong. Make sure you handle singulars and plurals for both hours and minutes.*/