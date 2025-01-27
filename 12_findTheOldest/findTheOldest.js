const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    let ageArray = array.map((person) => {
        const yearOfDeath = person.yearOfDeath || currentYear;
        return {
            name: person.name,
            age: yearOfDeath - person.yearOfBirth,
        };
    });

    console.log(ageArray);

    let oldestPerson = ageArray.reduce( (oldest, person) => {
        return oldest.age > person.age ? oldest : person;
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
