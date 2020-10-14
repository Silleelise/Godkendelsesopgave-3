var xhttp = new XMLHttpRequest();

xhttp.open("GET", "http://localhost:4000", true);

xhttp.send();

var storage = multer.diskStorage({
  destination
})

