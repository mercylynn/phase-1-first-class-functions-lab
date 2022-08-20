// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers= function(drivers){
    return drivers.slice(0,2)

}
const returnLastTwoDrivers=function(drivers){
    return drivers.slice(2,4)
}

 const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(number){
    return function(fare){
        return (Number(number) * Number(fare))
    }
}
const fareDoubler1=createFareMultiplier(2);
function fareDoubler(fare){
    return fareDoubler1(fare)
}

const fareTripler1=createFareMultiplier(3);
function fareTripler(fare){
    return fareTripler1(fare)
}
function selectDifferentDrivers(arrayOfDrivers,driverfunction) {
    if(driverfunction===returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers);
    }else if (driverfunction===returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);

    }
}
console.log (selectDifferentDrivers(drivers,returnFirstTwoDrivers));


