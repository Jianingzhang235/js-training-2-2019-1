//https://coursework.vschool.io/array-map-exercises/
//Array Map Exercises
//1) Make an array of numbers that are doubles of the first array

function doubleNumbers(arr){
  // your code here
  var newArr = arr.map(el=>el * 2);
  return newArr;
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function doubleNumbers(arr){
  // your code here
  var newArr = arr.map(function(el){
return el = el * 2;
});
return newArr;
}

console.log(doubleNumbers([2, 5, 100]));

//2) Take an array of numbers and make them strings
function stringItUp(arr){
  var newArr = arr.map(el => JSON.stringfy(el));
  return newArr;// your code here
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function stringItUp(arr){
  var newArr = arr.map(el => el.toString());
  return newArr;// your code here
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

function stringItUp(arr){
  var newArr = arr.map(function(el){
    return el.toString();
  });
  return newArr;// your code here
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
//3) Capitalize each of an array of names
function capitalizeNames(arr){
  return arr.map(el=>el[0].toUpperCase() + el.slice(1).toLowerCase());// your code here
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

function capitalizeNames(arr){
  var newArr = arr.map(function(el){
    return el[0].toUpperCase() + el.slice(1).toLowerCase();
  });// your code here
  return newArr;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

//4) Make an array of strings of the names
function namesOnly(arr){
  newArr = arr.map(function(obj) {
    return obj.name;
  });
  return newArr;
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr){
  arr.map(function(obj) {
    if(obj.age > 16) {
      console.log(obj.name + ' can go to The Matrix');
    } else {
      console.log(obj.name + ' is under age!!') 
    }

  });
}

makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]); 
// 6) Make an array of the names in h1s, and the ages in h2s
function readyToPutInTheDOM(arr){
  newArr = [];
  arr.map(function(obj) {
    newArr.push('<h1>' + obj.name + '</h1><h2>' + obj.age +'</h2>');
  });
  return newArr;
}
readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]); 