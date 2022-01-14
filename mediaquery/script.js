function testWidth(inp){
	if(document.getElementById("bottom") != null){
		if (inp.matches){
			document.getElementById("bottom").innerHTML = "<div class = \"class2\">this is different text! whoa!!!</div>";
			return;
		}
		document.getElementById("bottom").innerHTML = "<div class = \"class3\">here's another text group!!!</div>";
	}
}

testWidth(window.matchMedia("(max-width: 600px)"));
window.matchMedia("(max-width: 600px)").addListener(testWidth);