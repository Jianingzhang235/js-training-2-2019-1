function integerInRange(num1, num2) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) ? true : false;
}
alert(integerInRange(101, 99))