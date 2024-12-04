const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0;
// Code your solution here
function reduceBatches(arr,testValue){
    let newArray =[];
    totalBatteries = arr.reduce(function(accumulator, element){
        accumulator += element;
        return accumulator
    })
}
totalBatteries =batteryBatches.reduce((acc,curr)=> acc+curr,0); 
