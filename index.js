const mainElement = document.getElementById('main');
if (mainElement) {
    mainElement.remove(); 

// Create an <h1> element
const newHeader = document.createElement('h1');

// Assign ID 'victory' to the new <h1>
newHeader.id = 'victory';

// Set the text content of the new <h1>
newHeader.textContent = 'Mohammad is the champion'; 

// Append the new <h1> to the body
document.body.appendChild(newHeader);

}