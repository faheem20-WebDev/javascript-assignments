// question no 01 


let inputChar = prompt("Enter Any Chracter"); 
const charCode = inputChar.charCodeAt(0);
const isUppercase = (charCode >= 65 && charCode <= 90);
const isLowercase = (charCode >= 97 && charCode <= 122);
const isNumber = (charCode >= 48 && charCode <= 57);
alert(`Checking character: '${inputChar}'`);

if (isNumber) {
    alert(`Result: **${inputChar} is a NUMBER.**`);
} 
else if (isUppercase) {
    alert(`Result: **${inputChar} is an UPPERCASE letter.**`);
} 
else if (isLowercase) {
    alert(`Result: **${inputChar} is a LOWERCASE letter.**`);
} 
else {
    alert(`Result: **${inputChar} is a SYMBOL or something else.**`);
}

// question no 02 
var a=prompt("Enter First Number");
var num1=parseInt(a);
var b=prompt("Enter second  Number");
var num2=parseInt(b);
if(num1>num2){
alert(num1+ " is Larger");
}
else if(num2>num1){
alert(num2+ " is Larger");
}
else if(num1==num2){
alert( "Both are Equal");
}


// question no 03 
var c=prompt("Enter Number");
var number=parseInt(c);
if(number>0){
    alert(number+ " is  positive");
}
else if(number<0){
    alert(number+ " is  negative");
}
else if(number===0){
    alert(number+ " is zero ");
}


// question no 04 
var chracter=prompt("Enter Any chracter");
if(chracter.toLowerCase()=== "a" || chracter.toLowerCase()=== "e"||chracter.toLowerCase()=== "i"||chracter.toLowerCase()=== "o"||chracter.toLowerCase()=== "u"){
 alert("True");   
}
else{
    alert("false");
}

// question no 05 
var correctPassword="12345";
var authentication=prompt("Enter Your Password");
if(authentication===""){
   alert("Please Enter Your Password"); 
}
else if(authentication===correctPassword){
    alert("Login Successfully");
}
else if(!authentication===correctPassword){
    alert("Incorrect Password Please Try Again !");
}


// question no 06 
var hour=prompt("Enter Time");
var greeting;
if(hour<"18"){
    greeting="Good day";
    alert(greeting);
}
else if(hour>=18 && hour<=24){
    greeting="Good evening";
    alert(greeting);
}

// question no 07 
var time = parseInt(prompt("Enter the time (in 24-hour clock format):"));

if (time >= 0 && time < 1200) {
    alert ("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2000) {
    alert("Good evening!");
} else {
    alert("Good night!");
}