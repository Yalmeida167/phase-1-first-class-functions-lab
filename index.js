// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"]

const returnFirstTwoDrivers = function (nameArray) {
    return nameArray.slice(0, 2)
}

const returnLastTwoDrivers = function (nameArray) {
    return nameArray.slice(2, 4)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
]

function createFareMultiplier(multiplier) {
    return function (fare) {
       return multiplier * fare
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (arrayOfNames, driverFunction) {
    return driverFunction(arrayOfNames);
}