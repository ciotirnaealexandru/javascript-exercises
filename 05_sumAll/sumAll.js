const sumAll = function(leftLimit, rightLimit) {
    if (leftLimit > rightLimit) {
        let aux = leftLimit;
        leftLimit = rightLimit;
        rightLimit = aux;
    }

    if (leftLimit < 0)
        return "ERROR";
    if (parseInt(leftLimit) != leftLimit || parseInt(rightLimit) != rightLimit)
        return "ERROR";
    if (typeof(leftLimit) != "number" || typeof (rightLimit) != "number")
        return "ERROR";

    let sum = 0;
    for (let i = leftLimit; i <= rightLimit; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
