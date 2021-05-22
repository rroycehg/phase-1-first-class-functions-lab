// Code your solution in this file!

const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

//functions to return first two and last two drivers
function returnFirstTwoDrivers(drivers) {
    let firstDrivers = drivers.slice(0,2);
    return firstDrivers;
}

function returnLastTwoDrivers(drivers) {
    let lastDrivers = drivers.slice(2,4);
    return lastDrivers;
}

//Creates an array to callback the functions that combine both First two and last two drivers
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];


//fareMultiplier
function createFareMultiplier(fareMultiplier) {
    return function (fareQuintupler) {
        return fareQuintupler * fareMultiplier;
    }
} 


//fare double
const fareDoubler = (fare) => fare*2; 

//fare triple
const fareTripler = (fare) => fare*3;


function selectDifferentDrivers(arrayofDrivers, returnSelectedTwoDrivers){
    return returnSelectedTwoDrivers(arrayofDrivers);
}
