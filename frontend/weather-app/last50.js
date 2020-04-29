console.log("Loading last50.js...");

// Find the first <tbody> element on the page
const tableBody = document.getElementsByTagName("tbody")[0];

// Define an asynchronous function using arrow syntax
const getDataModern = async () => {
	// Todo: fetch data
	console.log("Inside getDataModern");

	// Fetch data using modern Fetch API
	const data = await fetch("http://webapi19sa-1.course.tamk.cloud/v1/weather");

	// Get actual JSON data presentation
	const dataJson = await data.json();

	// Log data to see if it is correct
	console.log("dataJson", dataJson);

	// Get last 50 measurements
	const sliced_data = dataJson.slice(450);

	for (rowData of sliced_data) {
		// Insert new row to table
		const newRow = tableBody.insertRow(-1);

		// Get the cell keys from a single data row
		const cellKeys = Object.keys(rowData); // Output: ["id", "device_id", "date_time", "data"]
		for (cellKey of cellKeys) {
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
