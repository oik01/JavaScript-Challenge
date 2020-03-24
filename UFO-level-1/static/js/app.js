// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// extract the data from our data array and add it to our table
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
// Gain reference to the inputed date

var date_selection = d3.select(".form-control")
function handlechange(event){
    var input = d3.event.target.value;
    console.log(input)

}
date_selection.on("change", handlechange)

// Gain reference to the filter button: 
var filter_button = d3.select("#filter-btn")
function clicked(event){
    console.log("The button was clicked")
    tbody.html("")
    var input = date_selection.property("value")
    var filteredData = data.filter(sighting => sighting.datetime == input)
    filteredData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });}

filter_button.on("click", clicked);
