// question no 01 
var num=10;
document.writeln("<h3>Result</h3>");
document.writeln("<br>The value of a is "+num);
document.writeln("<br>-------------------------------");
document.writeln("<br>The value of ++num is "+(++num));
document.writeln("<br>Now the  value of num is "+num);
document.writeln("<br><br>The value of num++ is "+(num++));
document.writeln("<br>Now the value of num is "+num);
document.writeln("<br><br>The value of --num is "+(--num));
document.writeln("<br>Now the value of num is "+num);
document.writeln("<br><br>The value of num-- is "+(num--));
document.writeln("<br>Now the value of num is "+num);


// question no 02 
var a = 2, b = 1;

 --a; 
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
var a=1;
var b=0;
var Result=3;
document.write("a is  "+a+ "<br>")
document.write("b is  "+b+ "<br>")
document.write("Result is "+Result+ "<br>")


// Q3:Answer:
var user=prompt("Enter Your Name:");
var greet="<h1>Hello"+user+"! Welcome to our website.</h1>"
document.writeln(greet);

// Q4:Answer:
let num=prompt("Enter a number to display its multiplication table:","5")
document.writeln("Table of "+ num+"<br>");
if(num==="null" || num.trim()==='' || isNaN(num)){
num=5;
document.writeln("Invalid Input Showing table of 5 By default ");
}
else{
document.writeln("Showing table of " +num);
}
for(var i=1;i<=10;i++){
var result=i*num;
document.writeln( "<br>"+num+ "x" +i+ "= "+result);
}




// Q5:Answer:


var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");


var totalMarks = 100;


var marksSubject1 = (+prompt("Enter the obtained marks for " + subject1 + ":"));
var marksSubject2 = (+prompt("Enter the obtained marks for " + subject2 + ":"));
var marksSubject3 = (+prompt("Enter the obtained marks for " + subject3 + ":"));

var percentageSubject1 = (marksSubject1 / totalMarks) * 100;
var percentageSubject2 = (marksSubject2 / totalMarks) * 100;
var percentageSubject3 = (marksSubject3 / totalMarks) * 100;
var sumofmarks=(totalMarks*3);
var sumofobt=(marksSubject1+marksSubject2+marksSubject3);
var tptalper=(sumofobt/ sumofmarks)*100;

document.write("<table >");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marksSubject1 + "</td><td>" + percentageSubject1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marksSubject2 + "</td><td>" + percentageSubject2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marksSubject3 + "</td><td>" + percentageSubject3 + "%</td></tr>");

document.write("<tr><td colspan='4'><hr><h2>Overall Result</h2><hr><br>Total  Marks: " + sumofmarks + "</td></tr>");
document.write("<tr><td colspan='4'>Total Obtained Marks: " + sumofobt + "</td></tr>");

document.write("<tr><td colspan='4'>Overall Percentage: " + tptalper+ "%</td></tr>");
document.write("</table>");