//Write a JavaScript program to create a new string adding "Py" in 
//front of a given string.If the given string begins with "Py"
//then return the original string.
//input: str;
//output: 'Py'+str;
function addPy(str) {
    if (str === null || str === undefined || str.slice(0, 2) === 'Py') {
        return str;
    } else {
        return "Py" + str;
    }
}
alert(addPy("huahuhs"));