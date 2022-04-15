// import the data from data.js
const tableData = date;
//reference the HTML table using d3
var tbody = d3.select("tbody");

//simple javascript console.log statement
// function printHello() {
//     console.log("hello there!")
// }

//takes two numbers and adds them
// function doubleAddition(a,b) {
//     return a + b;
// }

function buildTable(data) {
    //clears existing data:
    tbody.html("");

    //Loops through each object in our data, 
    //appends a row and cells for each value in the row
    data.forEach(dataRow) => {
        let row = tbody.append("tr");
        //loops through each field in the dataRow and adds
        //each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
}

function handleClick() {
    //grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;


    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

///rebuild table using filtered date

    buildTable(filteredData);


};

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
