// question no 01

var city=prompt("Enter City Name");
if(city.toLowerCase()==="karachi"){
alert("welcome to the city of light");
}

// question no 02 
var gender=prompt("Enter Gender");
if(gender.toLowerCase()==="male"){
alert("Good Morning Sir !");
}
if(gender.toLowerCase()==="female"){
alert("Good Morning Ma'am");
}

// question no 03 
var signalColor=prompt("Enter Traffic Color");
if(signalColor.toLowerCase()==="red"){
    alert("Must Stop");
}
if(signalColor.toLowerCase()==="yellow"){
    alert("Must Stop");
}if(signalColor.toLowerCase()==="green"){
    alert("Must Now");
}
if(signalColor===null || signalColor.trim()=== ""){
    alert("Enter Valid Color");
}


// question no 04 
var fuel=prompt("Enter Your Fuel in(liters)");
if(fuel<0.25){
alert("Please Refill The fuel");
}
if(fuel>=0.25){
alert("No need of Refueling");
}


// question no 05 
// part a
var a=4;
if(++a===5){
alert("Given condition for a variable is true")
}
// Given Condition for a variable is true 


// part b
var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
} 
//  Condition 2 is true 



// part c
var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
}
// Condition 2 is true 
//  Condition 4 is true 





// part d
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
} 
// The Cost Equals 



//  part e
if (true){ 
alert("True"); 
} 
if (false){ 
alert("False"); 
} 

// True 


// part f
if("car" < "cat"){ 
alert("car is smaller than cat"); 
} 


//  question no 06 
var sub1=prompt("Enter Math Marks(out of 100)");
var sub2=prompt("Enter CF Marks(out of 100");
var sub3=prompt("Enter CP Marks(out of 100)");
const mathamatics=parseFloat(sub1);
const fundamental=parseFloat(sub2);
const computer=parseFloat(sub3);
document.writeln("<h3>Marksheet</h3>");
var total_Marks=300;
document.writeln("<br>Total Marks : "+total_Marks);
var obtained_Marks=mathamatics+fundamental+computer;
document.writeln("<br>Obtained Marks :  " +obtained_Marks);
var percentage=((obtained_Marks/total_Marks)*100);
document.writeln("<br>Percentage : "+percentage.toFixed(2)+"%");
if(percentage>=80){
document.writeln("<br> Grade : A-one");
document.writeln("<br> Remarks : Excellent");
}
else if(percentage>=70){
document.writeln("<br> Grade : A");
document.writeln("<br> Remarks : Good");
}
else if(percentage>=60){
document.writeln(" <br>Grade : B");
document.writeln(" <br>Remarks : You Need To improve");
}
else if(percentage<60){
document.writeln(" <br>Grade : fail");
document.writeln(" <br>Remarks : Sorry");
}

// question no 07
var n=6;
var guess=prompt("Guess The secret number");
var gnum=parseInt(guess);
if(gnum===n){
alert(" “Bingo! Correct answer”");
}
if(gnum+1===n){
alert("Close Enough To the correct answer");
}

// question no 08 
var d=prompt("Enter Number");
var delta=parseInt(d);
if(delta%3===0){
    alert(delta+ " is divisible by 3");
}


// question no 09 
var e=prompt("Enter Number");
var elephant=parseInt(e);
if(elephant%2===0){
    alert(elephant+ " is Even Number");
}
if(elephant%1===0){
    alert(elephant+ " is Odd Number");
}

// question no 10 
var temp=prompt("Enter Temprature in Celsius");
if(temp>"40"){
    alert("It is too Hot outside");
}
else if(temp>"30"){
    alert("Today Weather is Normal");
}
else if(temp>20){
    alert("Today Weather is Cool");
}
else if(temp>10){
    alert("Today Weather is too cool");
}


// question no 11 
var num1=prompt("Enter First Number");
var firstnumber=parseFloat(num1);
var num2=prompt("Enter Second Number");
var Secondnumber=parseFloat(num2);
var op=prompt("Enter Operator");
var result;
if(op==="+"){
    result=firstnumber+Secondnumber;
    alert(firstnumber+"+"+Secondnumber+  "  =  "+result);
}
else if(op==="-"){
    result=firstnumber-Secondnumber;
    alert(firstnumber+"-"+Secondnumber+  "  =  "+result);
}
else if(op==="*"){
    result=firstnumber*Secondnumber;
    alert(firstnumber+ "*" +Secondnumber+  "  =  "+result);
}
else if(op==="/"){
    result=firstnumber/Secondnumber;
    alert(firstnumber+"/"+Secondnumber+  "  =  "+result);
}
else if(op==="%"){
    result=firstnumber%Secondnumber;
    alert(firstnumber+"%"+Secondnumber+  "  =  "+result);
}




