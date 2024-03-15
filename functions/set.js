function setLoop(time, loop) {
  for (let i = 0; i * loop; i++) {
    setTimeout(function() {
      
    }, i * time);
  }
}

function setKey(key, callback) {
  document.addEventListener('keydown',function(event) {
    if (event.key === key) {
      callback();
    }
  });
}

function setMouse(button, callback) {
  document.addEventListener('mousedown',function (event) {
    if (event.button === button) {
      callback();
    }
  });
}

function setLocalData(key, value) {
  localStorage.setItem(key, value);
}

function setSessionData(key, value) {
  sessionStorage.setItem(key, value);
}

function setCookieData(key, value) {
  cookie.setItem(key, value);
}

function setText(data, text) {
  document.querySelector(data).textContent = text;
}

function setDatabaseData(hostname, username, password, database) {
    var xhr = new XMLHttpRequest();
    var url = "functions/php/database.php?hostname=" + encodeURIComponent(hostname) + "&username=" + encodeURIComponent(username) + "&password=" + encodeURIComponent(password) + "&database=" + encodeURIComponent(database);
    xhr.open("GET", url, true);
    xhr.onreadystatechange =function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText); // Atau lakukan sesuatu dengan respons jika perlu
            backToast("successfully connected to the database");
        } else {
          backToast("Failed to connect to database")
        }
    };
    xhr.send();
}