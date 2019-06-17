var tableData = data;
var tbody; 
var row;
var cell;

// Display table with all UFO sightings
tableData.forEach(function(record) {
    tbody = d3.select("tbody");
    row = tbody.append("tr");
    Object.entries(record).forEach(function([key, value]) {
        cell = row.append("td");
        cell.text(value);
    });
});

/* ******************************************************************
   ********************** FILTER BUTTONS ****************************
 * ****************************************************************** */

// Grab the filter button elements from HTML
var dateFilterButton = d3.select("#date-filter-btn");
var cityFilterButton = d3.select("#city-filter-btn");
var stateFilterButton = d3.select("#state-filter-btn");
var countryFilterButton = d3.select("#country-filter-btn");
var shapeFilterButton = d3.select("#shape-filter-btn");

/* ******************************************************************
   ********************** EVENT LISTENERS ***************************
 * ****************************************************************** */


// Event handler for date filter button
dateFilterButton.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Grab the date value with which to filter
    var filterDate= d3.select("#datetime").property("value");
    
    function dateFilter() {
        var filteredData = tableData.filter(entry => entry.datetime === filterDate);
        console.log(filteredData);

        // If there are no filtered results returned
        if (filteredData === undefined || filteredData.length == 0) {

            // Display a message stating no results were returned
            var error_div = d3.select("#error-msg");
            error_div.append("h4").text("Sorry, there were no results matching your query!");

            // Remove the table from the page
            d3.select("#ufo-table").remove();

        }

        filteredData.forEach(function(record) {
            tbody = d3.select("tbody");
            row = tbody.append("tr");            
            
            Object.entries(record).forEach(function([key, value]) {
                cell = row.append("td");
                cell.text(value);
            });
        });
    }
    
    // If filter date is entered, clear the table and call filterData()
    if (filterDate != "") {
        var table = document.querySelector("tbody");
        for(var i = table.rows.length - 1; i >= 0; i--)
        {
            table.deleteRow(i);
        }
        dateFilter();
    }
});

// Event handler for city filter button
cityFilterButton.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Grab the city value with which to filter
    var filterCity = d3.select("#city").property("value");
    
    function cityFilter() {
        var filteredData = tableData.filter(entry => entry.city === filterCity);
        console.log(filteredData);

        // If there are no filtered results returned
        if (filteredData === undefined || filteredData.length == 0) {

            // Display a message stating no results were returned
            var error_div = d3.select("#error-msg");
            error_div.append("h4").text("Sorry, there were no results matching your query!");

            // Remove the table from the page
            d3.select("#ufo-table").remove();

        }

        filteredData.forEach(function(record) {
            tbody = d3.select("tbody");
            row = tbody.append("tr");
            
            Object.entries(record).forEach(function([key, value]) {
                cell = row.append("td");
                cell.text(value);
            });
        });
    }
    
    // If filter date is entered, clear the table and call filterData()
    if (filterCity != "") {
        var table = document.querySelector("tbody");
        for(var i = table.rows.length - 1; i >= 0; i--)
        {
            table.deleteRow(i);
        }
        cityFilter();
    }
});

// Event handler for state filter button
stateFilterButton.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Grab the state value with which to filter
    var filterState = d3.select("#state").property("value");
    
    function stateFilter() {
        var filteredData = tableData.filter(entry => entry.state === filterState);
        console.log(filteredData);

        // If there are no filtered results returned
        if (filteredData === undefined || filteredData.length == 0) {

            // Display a message stating no results were returned
            var error_div = d3.select("#error-msg");
            error_div.append("h4").text("Sorry, there were no results matching your query!");

            // Remove the table from the page
            d3.select("#ufo-table").remove();

        }

        filteredData.forEach(function(record) {
            tbody = d3.select("tbody");
            row = tbody.append("tr");
            
            Object.entries(record).forEach(function([key, value]) {
                cell = row.append("td");
                cell.text(value);
            });
        });
    }
    
    // If filter date is entered, clear the table and call filterData()
    if (filterState != "") {
        var table = document.querySelector("tbody");
        for(var i = table.rows.length - 1; i >= 0; i--)
        {
            table.deleteRow(i);
        }
        stateFilter();
    }
});

// Event handler for country filter button
countryFilterButton.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Grab the country value with which to filter
    var filterCountry = d3.select("#country").property("value");
    
    function countryFilter() {
        var filteredData = tableData.filter(entry => entry.country === filterCountry);
        console.log(filteredData);

        // If there are no filtered results returned
        if (filteredData === undefined || filteredData.length == 0) {

            // Display a message stating no results were returned
            var error_div = d3.select("#error-msg");
            error_div.append("h4").text("Sorry, there were no results matching your query!");

            // Remove the table from the page
            d3.select("#ufo-table").remove();

        }

        filteredData.forEach(function(record) {
            tbody = d3.select("tbody");
            row = tbody.append("tr");
            
            Object.entries(record).forEach(function([key, value]) {
                cell = row.append("td");
                cell.text(value);
            });
        });
    }
    
    // If filter date is entered, clear the table and call filterData()
    if (filterCountry != "") {
        var table = document.querySelector("tbody");
        for(var i = table.rows.length - 1; i >= 0; i--)
        {
            table.deleteRow(i);
        }
        countryFilter();
    }
});

// Event handler for shape filter button
shapeFilterButton.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Grab the shape value with which to filter
    var filterShape = d3.select("#shape").property("value");
    
    function shapeFilter() {
        var filteredData = tableData.filter(entry => entry.shape === filterShape);
        console.log(filteredData);

        // If there are no filtered results returned
        if (filteredData === undefined || filteredData.length == 0) {

            // Display a message stating no results were returned
            var error_div = d3.select("#error-msg");
            error_div.append("h4").text("Sorry, there were no results matching your query!");

            // Remove the table from the page
            d3.select("#ufo-table").remove();

        }

        filteredData.forEach(function(record) {
            tbody = d3.select("tbody");
            row = tbody.append("tr");
            
            Object.entries(record).forEach(function([key, value]) {
                cell = row.append("td");
                cell.text(value);
            });
        });
    }
    
    // If filter date is entered, clear the table and call filterData()
    if (filterShape != "") {
        var table = document.querySelector("tbody");
        for(var i = table.rows.length - 1; i >= 0; i--)
        {
            table.deleteRow(i);
        }
        shapeFilter();
    }
});





