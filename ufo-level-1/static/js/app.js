// from data.js
var tableData = data;
var firstFilter = true;
// console.log(tableData);

// YOUR CODE HERE!
// 
// Part-1 --> Add more Filters



// Part-2 --> Deal with Filter
// 
// Select the submit button
var filterButton = d3.select("#filter-btn");

// Complete the click handler for the form
filterButton.on("click", function() {

    // Prevent the page from freshing
    d3.event.preventDefault();

    // Select the input element and get the row HTML code
    var dateElement = d3.select("#datetime");

    // Get the value property of the input element
    var dateValue = dateElement.property("value");

    console.log(dateValue);

    // Use the form input to filter the data
    var filteredData = tableData.filter(data => data.datetime === dateValue);

    console.log(filteredData);

    // Build table based on filter
    // 
    // Select the table body
    // var tbody = ""
    // var tbody = d3.select("tbody").selectAll("tr").remove().selectAll("td").remove();
    // var tbody = ""
    
    // var tbody = d3.select("tbody");
    
    if (!firstFilter) {
        console.log("Not a first try...");
        var tbody = d3.select("tbody").selectAll("tr").remove();
        // tbody.exit().remove();
    }

    var tbody = d3.select("tbody");

    // console.log(tbody);

    filteredData.forEach((marsdata) => {
        var row = tbody.append("tr");
        Object.entries(marsdata).forEach(([key, value]) => {
            var cell = row.append("td");
            console.log(key);
            cell.text(value);
        });
        firstFilter = false;
    
    });

});