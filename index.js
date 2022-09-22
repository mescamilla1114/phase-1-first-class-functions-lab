// Code your solution in this file!
const drivers =["Antonia", "Nuru", "Amari", "Mo"];

function returnFirstTwoDrivers (drivers){
    return(drivers.slice(0,2));
}

function returnLastTwoDrivers (drivers){
    return(drivers.slice(2));
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

let fare; 
function createFareMultiplier(fare){
    
    return function(fare){fare*fare;};
}

function fareDoubler (fare){
    return fare*2;
}
 function fareTripler (fare){
     return fare*3;
 }

 function selectDifferentDrivers (other) {
    function other (){
        return returnLastTwoDrivers ();
    }
    return returnFirstTwoDrivers ();
 }
