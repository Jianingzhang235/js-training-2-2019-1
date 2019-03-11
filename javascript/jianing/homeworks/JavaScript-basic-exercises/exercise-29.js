function integerInRange(x, y, z) {
    return (x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (y >= 50 && y <= 99) ?
        true :
        false;
}
alert(integerInRange(101, 99, 33));