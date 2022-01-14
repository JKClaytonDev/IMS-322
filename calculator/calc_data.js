var submittedResponse = 1;
let list = [];
var value = "0";
var operator = "+";
var lastValue = "0";
var memory = "0";

document.addEventListener('keyup', (e) => {
  if (e.key === "1")        submitNumber(1);
  if (e.key === "2")        submitNumber(2);
  if (e.key === "3")        submitNumber(3);
  if (e.key === "4")        submitNumber(4);
  if (e.key === "5")        submitNumber(5);
  if (e.key === "6")        submitNumber(6);
  if (e.key === "7")        submitNumber(7);
  if (e.key === "8")        submitNumber(8);
  if (e.key === "9")        submitNumber(9);
  if (e.key === "0")        submitNumber(0);
  if (e.key === "_")        submitNumber("-");
  
  if (e.key === "+")        submitOperator('+');
  if (e.key === "-")        submitOperator('-');
  if (e.key === "/")        submitOperator('/');
  if (e.key === "*")        submitOperator('*');
  
  if (e.key === "=")        calculateNumbers();
  if (e.key === "Enter")        calculateNumbers();
  if (e.key === "Escape")        resetValues();
});
	
document.addEventListener('keyup', (e) => {
  if (e.key === "1")        console.log("1");
});
	

function saveMemory(){
memory = value;
document.getElementById("textInput").innerHTML += "<br>saved " + value + " to memory<br>";
}

function recallMemory(){
document.getElementById("textInput").innerHTML += "<br>recalled " + memory + " from memory<br>";
submittedResponse = 0;
submitNumber(memory);
document.getElementById("inputbox").innerHTML = value;
document.getElementById("textInput").innerHTML += "<br>"+value;
}

function submitOperator(str){
submittedResponse = 0;
operator = str;
list.push(value);
lastValue = value;
value = "0";
document.getElementById("textInput").innerHTML += " "+str+" ";
}

function submitNumber(str) {
if (str == "."){
submittedResponse = 0;
}

if (submittedResponse == 1){
submittedResponse = 0;
value = "";
}
if (value == "0")
value = "";
value+=str;
//list.push(str);
  document.getElementById("inputbox").innerHTML = shortenString(value);
  document.getElementById("textInput").innerHTML += ""+str;
}
function calculateNumbers(){
submittedResponse = 1;
var v1 = parseFloat(lastValue);
var v2 = parseFloat(value);
var final = 0;
if (operator == "+")
final = v1+v2;
else if (operator == "-")
final = v1-v2;
else if (operator == "*")
final = v1*v2;
else if (operator == "/")
final = v1/v2;
if (operator == "-" || operator == "	+"){
lastValue = "0";}
else{
lastValue = "1";}
value = ""+final;
document.getElementById("inputbox").innerHTML = shortenString(value);
document.getElementById("textInput").innerHTML += "\n = "+value+"<br>";
}

function shortenString(str) {
  if (str.length <= 10) {
    return str
  }
  return str.slice(0, 10);
}

function resetValues() {
submittedResponse = 0;
list = [];
value = "0";
lastValue = "0";
document.getElementById("inputbox").innerHTML="0";
document.getElementById("textInput").innerHTML += "<br>cleared<br>";
}