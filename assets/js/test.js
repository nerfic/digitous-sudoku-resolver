function fiboLeSang(n) {

    var result = 0;

    for (var i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

console.log(fiboLeSang(5))