// task 01
// let date =new Date;
// console.log(date);
// let div=document.getElementById("heading");
// div.innerHTML=date;


//task 2
// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const currentDate = new Date();
// const currentMonthName = monthNames[currentDate.getMonth()];

// console.log(currentMonthName);
// let div1=document.getElementById("heading1");
// div1.innerText=currentMonthName;


//task 03 
// const day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// const currentdate=new Date();
// const currentday=day[currentdate.getDay()];
// const shortDaynames=currentday.toString().slice(0,3);
// console.log("Today is   " + shortDaynames);



// task 04


let userday=input=prompt("Enter the day");
let weekenddays=["Saturday","Sunday"];
if(userday===weekenddays[0] || userday===weekenddays[1]){
    alert("It's Fun day");
    console.log("It's Fun day");
}


// task 05
let date =new Date();
let currentdate=date.getDate();
if(currentdate<16){
    console.log("First fifteen days of the month");
}else{
    console.log("Last days of the month");
};


// task 06
let currentdate1=new Date();
let millisec=currentdate1.getTime();
let minutes=millisec/(1000*60);
console.log("Current Date: " + currentdate1);
console.log("Elapsed milliseconds since January 1, 1970: " + millisec);
console.log("Elapsed minutes since January 1, 1970: " + minutes);


// task 07 
let currentdate2=new Date();
let currenthour=currentdate2.getHours();
if(currenthour<12){
    console.log("It's AM");
}
else{
    console.log("It's PM");
}
// task 08
let laterdate=new Date("December 31, 2020");
console.log("Later date: " + laterdate);

// task 09
let ramadandate=new Date("June 18, 2015");
let currentdate3=new Date();
let diff= currentdate3 - ramadandate;
let dayspassed=Math.floor(diff/(1000*60*60*24));
console.log(dayspassed + " days have passed since 1st Ramadan, 2015");
// task 10
let referenceDate=new Date("December 5, 2015");
let currentdate4=new Date("January 1, 2015");
let diff1=referenceDate - currentdate4;
let secondspassed=Math.floor(diff1/(1000));
console.log("On reference date " + referenceDate + ", " + secondspassed + " seconds had passed since beginning of 2015");
// task 11
let currentdate5=new Date();
console.log("Current date: " + currentdate5);
let onehourback=new Date(currentdate5.getTime() - (1000*60*60));
console.log("1 hour ago, it was " + onehourback);
// task 12
let currentdate6=new Date();
console.log("Current date: " + currentdate6);
let hundredyearsback=new Date(currentdate6.getFullYear() - 100, currentdate6.getMonth(), currentdate6.getDate());
console.log("100 years back, it was " + hundredyearsback);
// task 13
let userage=prompt("Enter your age");
let currentyear=new Date().getFullYear();
let birthyear=currentyear - userage;
console.log("Your birth year is: " + birthyear);


// task 14
let customername=prompt("Enter your name");
let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentmonth=new Date().getMonth();
let numberofunits=prompt("Enter number of units");
let chargesperunit=16;
let netamountpayable=numberofunits * chargesperunit;
let latepaymentcharges=350;
let grossamountpayable=netamountpayable + latepaymentcharges;
console.log("K-Electric Bill");
console.log("Customer Name: " + customername);
console.log("Month: " + monthNames[currentmonth]);

console.log("Number of units: " + numberofunits);
console.log("Charges per unit: " + chargesperunit);
console.log("Net Amount Payable (within Due Date): " + netamountpayable);
console.log("Late Payment Charges: " + latepaymentcharges);
console.log("Gross Amount Payable (after Due Date): " + grossamountpayable);
