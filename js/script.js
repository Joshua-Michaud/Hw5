/*
Name: Joshua Michaud
Email: Joshua_Michaud@student.uml.edu
Affiliation: Student at Umass Lowell Computer Science
Date: 10/30/2020
Description: External JavaScript for index.html
Location: github
91.461 Assignment: First JavaScript Webpage
Joshua Michaud, UMass Lowell Computer Science,
Copyright (c) 2020 by Joshua Michaud. All rights reserved. May be
freely copied or excerpted for educational purposes with credit to the author.
*/


function InputValidation(){

    let xStart = parseInt(document.getElementById("xMin").value);
    var xEnd = parseInt(document.getElementById("xMax").value);
    var yStart = parseInt(document.getElementById("yMin").value);
    var yEnd = parseInt(document.getElementById("yMax").value);
    //clears the Multiplication Table
    document.getElementById("multTable").innerHTML = "";
    //clears the Error messages
    document.getElementById("errorMessages").innerHTML = "";

    //test to see if all fields have a input value
    if (!xStart || !xEnd || !yStart || !yEnd) {
        document.getElementById("errorMessages").innerHTML =
       "One or more of the values you entered is empty.<br>Please make sure all values have been filled.<br>";
        return;
    }

    //This if-else statement will test if each form input it a number
    if(isNaN(xStart) || isNaN(xEnd) || isNaN(yStart) || isNaN(yEnd)){
        //empty
    }


    if(xStart > xEnd)
    {
        document.getElementById("errorMessages").innerHTML = "X Min should be lower than X Max";
        return;
    }


    if(yStart > yEnd)
    {
        document.getElementById("errorMessages").innerHTML = "Y Min should be lower than Y Max";
        return;
    }

    //if-else statement to see if any input is below -50
    if(xStart < -50 || yStart < -50 || xEnd < -50 || yEnd < -50 || xStart > xEnd) {
        //give error message if input is below -50 for any input
        document.getElementById("errorMessages").innerHTML = "Input value is Less than -50";
        return;
    }
    //if-else statement to see if any input is above 50
    else if (xStart > 50 || xEnd > 50 || yStart > 50 || yEnd > 50) {
        //give error message if input is greater than 50 for any input
        document.getElementById("errorMessages").innerHTML = "Input Value is Greater than 50";
        return;
    }
    else {
        //clears error messages when correct input is entered
        document.getElementById("errorMessages").innerHTML = "";
    }
//calls function to create table
createTable(xStart, xEnd, yStart, yEnd);
}



function createTable(xStart, xEnd, yStart, yEnd){
  var i, j;
  var table = "";


  // Creates table
  for (j = xStart - 1; j <= xEnd; j++) {
      table += "<tr>";
    if (j == xStart - 1) {
        table += "<td></td>";
      for (i = yStart; i <= yEnd; i++) {
          table += "<td>" + i + "</td>";
      }
    }
    else {
        table += "<td>" + j + "</td>";
        for (i = yStart; i <= yEnd; i++) {
            table += "<td>" + i * j + "</td>";
        }
    }
    table += "</tr>";
  }
  // Insert table
  document.getElementById("multTable").innerHTML = table;
}
