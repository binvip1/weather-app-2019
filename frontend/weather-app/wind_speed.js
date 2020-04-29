function myFunction() {
    console.log("Loading wind_speed.js..");
  
    // Get the time interval for measurements
    const time_interval = document.getElementById("time_interval").value;
  
    // Find the first <tbody> element on the page
    const tableBody = document.getElementsByTagName("tbody")[0];
  
    // Define an asynchronous function using arrow syntax
    const getDataModern = async () => {
  
      // Remove old data from the table
      $("tbody").children().remove();
  
        // Todo: fetch data
        console.log("Inside getDataModern");
  
        // Fetch data using modern Fetch API
          let data = await fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/latest/wind_speed");
  
          if (time_interval != "latest") {
              data = await fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather/wind_speed/" + time_interval);
          }
  
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
  }
  
  myFunction();
  
  // Function for button when clicked
  const clickmeButton = document.getElementById("update");
  clickmeButton.addEventListener('click', myFunction);
  