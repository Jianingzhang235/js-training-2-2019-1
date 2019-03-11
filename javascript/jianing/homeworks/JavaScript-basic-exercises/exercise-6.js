function isALeapYear(year) {
    if (year % 4 !== 0) {
        return 'No, year ' + year + ' is not a leap year.';
    } else if (year % 400 !== 0) {
        return 'No, year ' + year + ' is not a leap year.';
    }
    return 'Yes, year ' + year + ' is a leap year.';
}
alert(isALeapYear(1600));