// question no 01 
var num1=3,num2=7,sum=num1+num2;
document.writeln(" <br> First Number is " +num1);
document.writeln(" <br> Second Number is " +num2);
document.writeln(" <br> Sum of " +num1   + "and" +num2   +  "is" +sum);



// question no 02 
var product=num1*num2, quotient=num1/num2, difference=num1-num2;
document.writeln(" <br> Product of "  +num1    +  "and"  +num2   +  "is"  +product);
document.writeln(" <br> Division of "  +num1   +  "and"  +num2   +  "is"  +quotient);
document.writeln(" <br> Difference "  +num1    +  "and"  +num2   +  "is"  +difference );


// question no 03 
var a=5;
alert("Initial Value = "+a);
a=6;
alert("Value after increment =" +a);
a=6+7;
alert("Value after addition = " +a);
a=12;
alert("Value after decrement =" +a);
a=12%3;
alert("The Reminder is  =  " +a);

// question  no 04 
var ticketPrice=600;
document.writeln(" <br> The cost of buying 5 T shirts is " +600*5);



// question no  05
var num=prompt("Enter Table Number");
document.writeln("<h4>Multiplicaton Table of " +num+ "<br> </h4>");
var tableLength=prompt("Enter Table Length");
for(var i=1;i<=tableLength;i++){
var result=i*num;
document.writeln( "<br>"+num+ "x" +i+ "= "+result);
}

// question no 06 
var celsius,fahrenhiet;
celsius=prompt("Enter Temprature in Celsius");
fahrenhiet=((celsius*1.8)+32);
document.writeln("<h4> Temprature converter </h4>");
document.writeln(celsius+"<sup>o</sup>C  in Celsius is \t  "+fahrenhiet.toFixed(2)+"<sup>o</sup>F in Fahrenhiet");
fahrenhiet=prompt("Enter Temprature in fahrenhiet");
celsius=((fahrenhiet-32)*5/9);
document.writeln( "<br>  "+fahrenhiet+"<sup>o</sup>F in Fahrenhiet  is  \t "+celsius.toFixed(2)+"<sup>o</sup>C in Celsius");


// question no 07
var item1,item2,q_item1,q_item2,shippingCharge=100;
item1=prompt("Enter Item 1 Price Here");
q_item1=prompt("Enter Quantity of Item 1 You Purchased");
item2=prompt("Enter Item 2 Price Here");
q_item2=prompt("Enter Quantity of Item 1 You Purchased");
var item1payablePrice=item1*q_item1;
var item2payablePrice=item2*q_item2;
var payablePrice=item1payablePrice+item2payablePrice+shippingCharge;
document.writeln("Price of Item 1 is <strong> "+item1+" </strong>");
document.writeln("<br>Quantity  of Item 1 is <strong> "+q_item1+ "</strong>");
document.writeln("<br>Price of Item 2 is <strong> "+item2+ "</strong>");
document.writeln("<br>Quantity  of Item 2 is <strong> "+q_item2+"</strong>");
document.writeln("<br>Shipping Charges  <strong> "+shippingCharge+ "</strong>");
document.writeln("<br>Your Payable Bill is <strong>  "+payablePrice+ "</strong>");


// question no 08 
var totalMarks=1100,obtainedMarks=840;
var percentage=(obtainedMarks/totalMarks*100);
document.writeln("<h4> Marks Calculator </h4>");
document.writeln("Total Marks : <strong> "+ totalMarks+ "</strong>");
document.writeln("<br>Obtained Marks :<strong> "+ obtainedMarks+ "</strong>");
document.writeln("<br>Percentage : <strong> "+ percentage.toFixed(2)+ "%</strong>");



// question no 09 
// 10 USD DOllars where 1 dollar = 104.80PKR
// 25 SR where 1 SR = 28PKR
var pkr=((10*104.80)+(25*28));
document.writeln("Total Curreny in Pakistani rupees is<strong>   "+pkr+"PKR</strong>");


// question no 10 
var a=10;
var result=((a+5)*10)/2;
document.writeln("Number is " +a);
document.writeln(" <br> Result is "+result);


// question no 11 
var currentYear=prompt("Enter Current Year of Your Age");
document.writeln("Current Year<strong> :" +currentYear+ "</strong>");
var birthYear=prompt("Enter your birth year ");
document.writeln(" <br> Birth Year is <strong> :" +birthYear+ "</strong>");
var age=currentYear-birthYear;
document.writeln(" <br> Your Age is <strong> :" +age+ "</strong>");


// question no 12 
var radius=10;
var area=(3.142*(10*10));
var circumference=(2*3.142*10);
document.writeln("Radius is "+ radius+"cm");
document.writeln("<br>Area is  "+area.toFixed(2)+"cm<sup>2</sup>");
document.writeln("<br>Circumference is "+ circumference.toFixed(2)+"cm");



// question no 13
var faviorateSnack="choclateChip",currentAge=15,maxAge=65,estimatedamount=3;
document.writeln("<br>Favourite Snack :" +faviorateSnack);
document.writeln("<br>Current Age  :" +currentAge);
document.writeln("<br>Estimated Age:" +maxAge);
document.writeln("<br>Amount of Snack per Day :" +estimatedamount);

// amountofsnack per day =3 years left =50 in 1Year 365 days , 365*50=total days , then multiply amountof snack with total days for final result
var yearsRemaining=maxAge-currentAge;

// where 365.25 is number of days in a year
var daysRemaining=yearsRemaining*365.25;
var TotalSnack=daysRemaining*3;
document.writeln("<br>You will need  "+Math.floor(TotalSnack)  +faviorateSnack+"   to Last Until the ripe age of "+maxAge);






