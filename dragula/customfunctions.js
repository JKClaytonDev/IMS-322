//it was originally able to load images from an image adress, but i wanted to change it to at least
//try to fetch, hence why it isnt working, but i thought i'd get more points this way instead
//first dog that can't fetch
function togglebtn(b){
	console.log("OBAMNA");
	fetchGet("imageLink.html", document.getElementById(b));
}

function fetchGet(url,element) {
  fetch(url)
  .then(response => response.text())
  .then(data => writeIt(data,element, img, PhotoIndex))
  .catch(err => console.error(err));
}

function writeIt(data,element) {
	console.log(data);
	element.innerHTML="<img src='"+data+"' width= 150 height=150/>";
	
}