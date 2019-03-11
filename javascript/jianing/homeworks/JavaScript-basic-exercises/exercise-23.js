function swichFirstLast(string) {
  var newStr = "";
  if (string.length > 1) {
    var newStr = string[string.length - 1].concat(
      string.slice(1, -1) + string[0]
    );
  } else if (string.length <= 1) {
    newStr = string;
  }
  return newStr;
}
alert(swichFirstLast("hhi"));
