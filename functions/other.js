function goPage(page) {
  window.location.href = (page);
}

function search(web, userSearch) {
  let searchURL = web + "/search?q=" + userSearch;
  window.location.href = searchURL;
}

function executionPhp(fileName) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", fileName, true);
    xhr.onreadystatechange =function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
          backToast(fileName + " succes reading");
        } else {
          backToast("Cannot reading file with name " + fileName);
        }
    };
    xhr.send();
}