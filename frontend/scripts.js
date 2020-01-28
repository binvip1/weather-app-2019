console.log('Hello JavaScript!');

function clickmeFunction() {
  console.log('Calling clickmeFunction()');
  
  const myParagraph = document.getElementById("my-paragraph");
  myParagraph.style.fontSize = "25px";
  myParagraph.style.color = "red";
  myParagraph.textContent = 'Button was clicked!'
}

const clickmeButton = document.getElementById("clickme");

clickmeButton.addEventListener('click', clickmeFunction);

/* ------------- Custom JavaScript starts ---------------- */
const currentDate= new Date();
const currentDateSpan = document.getElementById("current-date");
currentDateSpan.textContent = currentDate;
// Write your own code here
