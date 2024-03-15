 let localData
function getLocalData(key) {
  localData = localStorage.getItem(key);
}

let sessionData
function getSessionData(key) {
  sessionData = sessionStorage.getItem(key);
}