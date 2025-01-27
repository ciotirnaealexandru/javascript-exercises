const fibonacci = function(n) {
    let n1 = 1;
    let n2 = 1;
    let n3;

    if (n < 0)
        return "OOPS";

    if (n == 0)
        return 0;

    if (n == 1 || n == 2)
        return 1;
    
    for (let i = 3; i <= n; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    
    return n3;
};

// Do not edit below this line
module.exports = fibonacci;
