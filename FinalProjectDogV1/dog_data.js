
function setInsert(i){
	fetchGet("text("+i+").html", document.getElementById("desc"), false, -1);
	fetchGet("image("+i+").html", document.getElementById("photo"), true, -1);
}
function getImage(i){
	fetchGet("image("+i+").html", document.getElementById("photo"), true, i);
	PhotoIndex = i;
	return("asf");
	
}
	
function fetchGet(url,element, img, PhotoIndex) {
	
  fetch(url)
  .then(response => response.text())
  .then(data => writeIt(data,element, img, PhotoIndex))
  .catch(err => console.error(err));
}

function writeIt(data,element, img, PhotoIndex) {
	console.log(data);
	photosrc = data.toString();
	console.log("SRC "+ photosrc);
	if (img)
  element.src = data;
else
	element.innerHTML = data;
console.log("index is " + PhotoIndex);
if (PhotoIndex != -1)
document.getElementById("img"+PhotoIndex).src = data;

}
