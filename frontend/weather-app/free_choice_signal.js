function myFunction() {
    console.log("Loading search.js..");
  
    // Get the feature for measurements
    const DATATYPE = document.getElementById("features").value;
  
    // Get the time interval for measurements
    const time_interval = document.getElementById("time_interval").value;
  
    // Get the type of graph
    const graph_type = document.getElementById("graph_type").value;
  
    // Find the first <tbody> element on the page
    const tableBody = document.getElementsByTagName("tbody")[0];
  
    // Define an asynchronous function using arrow syntax
    const getDataModern = async () => {
  
      // Remove old data from the table
      $("tbody").children().remove();
  
        // Todo: fetch data
        console.log("Inside getDataModern");
  
        // Fetch data using modern Fetch API
        const data = await fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/" + DATATYPE + "/" + time_interval);
  
        // Get actual JSON data presentation
        const dataJson = await data.json();
  
        // Log data to see if it is correct
        console.log("dataJson", dataJson);
  
        for (rowData of dataJson) {
            // Insert new row to table
            const newRow = tableBody.insertRow(-1);
  
            // Get the cell keys from a single data row
            const cellKeys = Object.keys(rowData); // Output: ["device_id", "date_time", "data"]
            for (cellKey of cellKeys) {
          // No addiing the device_id column to the table
          if (cellKey == 'device_id') {
            continue;
          }
  
                const newCell = newRow.insertCell(-1);
  
                // Perform operation based on cell content
                switch (cellKey) {
                    // If data cell, dig key&value from sub-object
                    case "data":
                        const key = Object.keys(rowData[cellKey])[0];
                        const value = rowData[cellKey][key];
                        newCell.textContent = `${key}: ${value}`;
                        break;
                    // For other calls, jsut copy the value to the ceell
                    default:
                        newCell.textContent = rowData[cellKey];
                }
            }
        }
    };
  
    getDataModern();
  
    // Measurement graph
    console.log("Loading graph.js..");
  
    const graph = document.getElementById("graph").getContext("2d");
  
    (async () => {
      console.log("Starting anonymous function..");
  
      // Fetch data using modern Fetch API
      const data = await fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/" + DATATYPE + "/" + time_interval);
  
      // Get actual JSON data presentation
      const dataJson = await data.json();
  
      // Log data to see if it is correct
      console.log("dataJson", dataJson);
  
      // To draw a sensible graph we need to get one type of data.
      // filter: create a new array, picking "DATATYPE" cells from the big data
      // slice: limit values to first 100
      // map: format the data to "x: date, y: value" -format understood by Chart.js
      // sort: sort the array by date (https://flaviocopes.com/how-to-sort-array-by-date-javascript/)
      const chartData = dataJson
        // .filter(item => typeof item.data[DATATYPE] !== "undefined")
        .slice(0, 100)
        .map(item => ({ x: item.date_time, y: item[DATATYPE] }))
        .sort((a, b) => a.x - b.x);
  
      console.log("chartData", chartData);
  
      new Chart(graph, {
        type: graph_type,
        data: {
          // labels: chartData.map(item => item.x),
          datasets: [
            {
              label: DATATYPE,
              data: chartData,
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            xAxes: [{
              type: "time",
              distribution: "series"
            }]
          }
        }
      });
    })();
  }
  
  myFunction();
  
  // Function for button when clicked
  const clickmeButton = document.getElementById("update");
  clickmeButton.addEventListener('click', myFunction);
  