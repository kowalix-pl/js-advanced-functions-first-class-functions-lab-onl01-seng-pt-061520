// Code your solution in this file!
function returnFirstTwoDrivers(array){
  const newArray = [];
  newArray.push(array[0]);
  newArray.push(array[1]);
  return newArray
}
function returnLastTwoDrivers(array){
 return array.slice(array.length-2);
}

const selectingDrivers = []
selectingDrivers[0]= returnFirstTwoDrivers();
selectingDrivers[selectingDrivers.length-1]=returnLastTwoDrivers();

