function yesCookies(){
	document.cookie = document.cookie+"i love cookies";
	document.getElementById("shield").remove();
	
}
function noCookies(){
	document.getElementById("shield").innerHTML = document.cookie;
	document.getElementById("shield").remove();
}