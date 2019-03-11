//Write a JavaScript program to get the current date.
//Expected Output:
//mm - dd - yyyy, mm / dd / yyyy or dd - mm - yyyy, dd / mm / yyyy
//input:null( but set up a new Date()); output : mm- dd-yyyy; (mm <10 0 + mm; dd<10, 0+ dd;)
var currentDay = new Date(); // construct a Date function to get data;
var mm = currentDay.getMonth() + 1; // getMonths() =0~11; plus 1; mm(01 ..09,10...12);
var dd = currentDay.getDate(); //getDate() (1-31); dd(01-31);
var yyyy = currentDay.getFullYear(); //get yyyy;
if (mm >= 10) {
    mm = mm;
} else {
    mm = '0' + mm;
}

if (dd >= 10) {
    dd = dd;
} else {
    dd = '0' + dd;
}

console.log(mm + '-' + dd + '-' + yyyy);
console.log(dd + '/' + mm + '/' + yyyy);
console.log(mm + '-' + dd + '-' + yyyy);
console.log(dd + '/' + mm + '/' + yyyy);