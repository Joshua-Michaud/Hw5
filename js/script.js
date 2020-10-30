var error = document.getElementById("errorMessages");


function variables(){

var xStart = Number(document.getElementById("xMin").value);
var xEnd = Number(document.getElementById("xMax").value);
var yStart = Number(document.getElementById("yMin").value);
var yEnd = Number(document.getElementById("yMax").value);
var lengthY = Math.abs(xEnd - xStart);
var lengthX = Math.abs(yEnd - yStart);
var vecArray = {};
var xIndex = xStart;
var yIndex = yStart;
var xarray = [];
var yarray = [];


if(isNaN(xStart)){
  //empty isNaN give error message and will not allow values other than integers into form
  var message = "Input Value for X Min is not a integer"
  error.textContent = message;
}
else if (isNaN(xEnd)) {
  //empty
  var message = "Input Value for X Max is not a integer"
  error.textContent = message;
}
else if (isNaN(yStart)) {
  //empty
  var message = "Input Value for Y Min is not a integer"
  error.textContent = message;
}
else if (isNaN(yEnd)) {
  //empty
  var message = "Input Value for Y Max is not a integer"
  error.textContent = message;
}

if(xStart < -50 || yStart < -50 || xEnd < -50 || yEnd < -50) {
    //give error message if input is below -50 for any input
    var message = "Input value is Lower below -50";
    error.textContent = message;
}
else if (xStart > 50 || xEnd > 50 || yStart > 50 || yEnd > 50) {
  //give error message if input is greater than 50 for any input
  var message = "Input Value is Greater than 50"
  error.textContent = message;
}
else {
  //clears error messages when correct input is entered
  error.textContent = "";
}





var x = document.createElement("TABLE");
x.setAttribute("id", "myTable");
document.body.appendChild(x);

for(var i = xStart; i < xEnd; i++){
  xarray[i] = i;
}

for(var j = yStart; j < yEnd; j++){
  yarray[j] = j;
}

for(var k = 0; k <= lengthY; k++){
  var arrayTemp = [];
  for(var l = 0; l <= lengthX; l++){
    var value = xIndex * yIndex;
    arrayTemp[l] = value;
    xIndex++;
  }
  vecArray[k] = arrayTemp;
  xIndex = xStart;
  yIndex++;
}


console.log(vecArray);
//swap
//calculations
//first array times second array
console.log(xStart);
console.log(xEnd);
console.log(yStart);
console.log(yEnd);


}
