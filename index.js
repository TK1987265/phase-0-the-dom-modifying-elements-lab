// helpers.js

function removeMain() {
    const mainElement = document.querySelector('main#main');
    if (mainElement) {
      mainElement.remove();
    }
  }
  
  function createHeader() {
    const newHeader = document.createElement('h1');
    newHeader.id = 'victory';
    return newHeader;
  }
  
  function setHeaderText(newHeader, name) {
    newHeader.innerHTML = `${name} is the champion`;
  }
  
  module.exports = { removeMain, createHeader, setHeaderText };
  