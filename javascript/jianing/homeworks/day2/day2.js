//$(document).ready(function () {
//   $("button").click(function () {
//      var x = $("form").serializeArray();
//      $.each(x, function (i, field) {
//         $("#results").append(field.class + ":" + field.placeholder + " ");
//      });
//  });
//});

function objectifyForm(formArray) { //serialize data function

    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}
alert(objectifyForm(formArray))