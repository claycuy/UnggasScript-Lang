function createElement(variableNameVar = "defaultName", type) {
  window[variableNameVar] = document.createElement(type);
}

 let randomNum;
function createRandomNum(count1, count2) {
  randomNum = Math.floor(Math.random() * count1) * count2;
}