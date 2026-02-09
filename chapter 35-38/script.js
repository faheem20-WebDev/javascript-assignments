// task 01
// function displayDateTime(){
//     const now=new Date();
//     const year=now.getFullYear();
//     const month=String(now.getMonth()+1).padStart(2,'0');
//     const day=String(now.getDate()).padStart(2,'0');
//     const hours=String(now.getHours()).padStart(2,'0');
//     const minutes=String(now.getMinutes()).padStart(2,'0');
//     const seconds=String(now.getSeconds()).padStart(2,'0');
//     console.log(`Current Date and Time: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
// }


// displayDateTime();

// task 02
// function greetUser(){
//     let firstName=prompt("Enter Your First Name");
//     let secondName=prompt("Enter Second Name");
//     let fullName=(firstName+" "+secondName);
//     console.log("Welcome  " + fullName);
// }
// greetUser();


// // task 03
// function addTwoNumbers(){
//     let firstNumber=prompt("Enter First Number");
//     let secondNumber=prompt("Enter Second Nubmer");
//        let sum=Number(firstNumber)+Number(secondNumber);
//     alert("Sum of Two numbers is "+sum);
// }
// addTwoNumbers();

// task 04
// function calculateResult(number1,number2,operator){
//     if(operator=="+"){
//         let sum=number1+number2;
//         alert("The sum of two Numbers is "+sum);
        
//     }
//     else if(operator=="-"){
//         let difference=number1-number2;
//         alert("The difference of two Numbers is "+difference);
        
//     }
//     else if(operator=="*"){
//         let multiplication=number1+number2;
//         alert("The multiplication of two Numbers is "+multiplication);
        
//     }
//     else if(operator=="/"){
//         if(number1===0){
//             alert("Result is infinity");
//         }
//         else {
//         let quotient=number1/number2;
//         alert("The sum of two Numbers is "+quotient);
//         }
//     }
//     else{
//         alert("Please Choose Correct Operator")
//     }
// }
// let num1=Number(prompt("Number1"));
// let num2=Number(prompt("Number 2"));
// let op=prompt("Enter operator");
// calculateResult(num1,num2,op);


// task 05
function squareArgument(number){
    let squareNumber=number*number;
    return squareNumber;
}
squareArgument(5);
console.log(squareArgument(5));

// task 06
function calculateFactorial(num){
    let factorial=1;
    for(let initialNumber=1;initialNumber<=num;initialNumber++){
        factorial*=initialNumber;
    }
    console.log("Factorial of  " +num+ "is " +factorial);

}
calculateFactorial(5);



// task 07
function countNumbers(start,end){
    console.log("Counting from "+start+" to "+end);
    for(let i=start;i<=end;i++){
        console.log(i);
    }
}
countNumbers(1,10);

// task 08
function calculateHypotenuse(base,perpendicular){
    function calculateSquare(number){
        return number*number;
    }
    let baseSquare=calculateSquare(base);
    let perpendicularSquare=calculateSquare(perpendicular);
    let hypotenuseSquare=baseSquare+perpendicularSquare;
    let hypotenuse=Math.sqrt(hypotenuseSquare);
    console.log("The length of hypotenuse is "+hypotenuse);
}
calculateHypotenuse(3,4);
// task 09
function calculateAreaOfRectangle(width,height){
    return width*height
}
let w=Number(prompt("Enter width"));
let h=Number(prompt("Enter height"));
let funCall=calculateAreaOfRectangle(w,h);
console.log("The Area of Rectangle is "+funCall+"cm\u00B2");


// task 10
// program to check if the string is palindrome or not

// function checkPalindrome(string) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = prompt('Enter a string: ');

// // call the function
// const value = checkPalindrome(string);

// console.log(value);


// task 11
function convertUpperCase(string) {
    // Split the string into words
    const words = string.split(" ");
    let updatedString = "";

    // Loop through each word
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let firstChar = word[0];
        let rest = word.slice(1);

        // Toggle case of first character
        if (firstChar === firstChar.toLowerCase()) {
            firstChar = firstChar.toUpperCase();
        } else {
            firstChar = firstChar.toLowerCase();
        }

        // Add the word to updated string
        updatedString += firstChar + rest;

        // Add a space after each word except the last
        if (i < words.length - 1) {
            updatedString += " ";
        }
    }

    return updatedString;
}

const string = "the quick brown fox";
const updatedString = convertUpperCase(string);
console.log(updatedString); // Output: "The Quick Brown Fox"

// task 12
function findLongestWord(str) 
{
    const words = str.split(" ");
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}
console.log(findLongestWord("Web Development Course"));


// task 13
function countLetter(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }

    return count;
}

// Example
console.log(countLetter("JSResourceS.com", "o")); // Output: 2


// task 14
function calculatePropertiesOfCircle(radius){
    
    function calCircumference(){
        return Number(2*Math.PI*radius);
    }
    function calArea(){
        return Number(2*Math.PI*Math.pow(radius,2));
    }
    
    console.log("The Circumference is "+calCircumference().toFixed(2)+"cm\u00B2");
    console.log("The Area of Cicle is "+calArea().toFixed(2)+"cm\u00B2");
}
let r=Number(prompt("Enter Radius"));
    calculatePropertiesOfCircle(r)

