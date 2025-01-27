const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanedString = string
        .toLowerCase()
        .split('')
        .filter( (character) => alphanumerical.includes(character) )
        .join('');

    return cleanedString.split('').reverse().join('') === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
