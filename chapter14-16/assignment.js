//  question no 01 
var marks=[];
marks=["84","90","90","80","40","70","75","65","85","75","56"]
alert(marks);

// question no 02 
var std_names=[];
std_names=["faheem","sheraz","ahsan","arslan","wasif","hammad","hamza"]
alert(std_names);

// question no 03 
var string=["1","2"];

// question no 04 
var num=[1,2,3];


// question no 05 
var boolean=[true,false];

// question no 06 
var mixed=["abcd",2,true];

// question no 07 
var pakistan=["<ol><li>SSC</li>","<li>HSC</li>", "<li>BCS</li>", "<li>BS</li>", "<li>B.COM</li>","<li>MS</li>","<li>M.Phill</li>","<li>Phd</li>", "</ol>"];
document.writeln("<h4>Qualification</h4>")
document.writeln(pakistan);


// question no 08 
var names=["Faheem","Ahsan","Sammar"];
var marks=[429,385,390];
var total=500;
var percentage=(marks[0]/total)*100;
document.writeln(" <br>Score of " +names[0]+    "   is "    + marks[0]+    "    with percentage   "      +percentage+"%");
 percentage=(marks[1]/total)*100;
document.writeln(" <br>Score of " +names[1]+    "   is "    + marks[1]+    "    with percentage   "      +percentage+"%");
 percentage=(marks[2]/total)*100;
document.writeln("<br> Score of " +names[2]+    "  is "    + marks[2]+    "     with percentage  "      +percentage+"%");


// question no 09 
// Variable initialization
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

// Initial display
document.write("Initial Colors:");
document.write(colors.join(", "));
document.write("<hr>");

// a. Add Color to the Beginning (unshift)
let newColorStart = prompt("a. What color do you want to add to the beginning?");
if (newColorStart) {
    colors.unshift(newColorStart);
}
document.write("a. Added to Start:");
document.write(colors.join(", "));
document.write("<hr>");

// b. Add Color to the End (push)
let newColorEnd = prompt("b. What color do you want to add to the end?");
if (newColorEnd) {
    colors.push(newColorEnd);
}
document.write("b. Added to End:");
document.write(colors.join(", "));
document.write("<hr>");

// c. Add two more colors to the beginning (unshift)
colors.unshift("Black", "White");
document.write("c. Added Two More to Start:");
document.write(colors.join(", "));
document.write("<hr>");

// d. Delete the first color (shift)
let deletedStartColor = colors.shift();
document.write("d. Array After Deleting First Color (" + deletedStartColor + "):");
document.write(colors.join(", "));
document.write("<hr>");

// e. Delete the last color (pop)
let deletedEndColor = colors.pop();
document.write("e. Array After Deleting Last Color (" + deletedEndColor + "):");
document.write(colors.join(", "));
document.write("<hr>");

// f. Add Color at a Specific Index (splice for insertion)
let indexToAdd = parseInt(prompt("f. Enter the index where you want to add a color:"));
let colorToInsert = prompt("f. Enter the color name to insert:");

if (!isNaN(indexToAdd) && colorToInsert) {
    colors.splice(indexToAdd, 0, colorToInsert);
}
document.write("f. Added Color at Specific Index (" + indexToAdd + "):");
document.write(colors.join(", "));
document.write("<hr>");

// g. Delete Colors from a Specific Index (splice for deletion)
let indexToDelete = parseInt(prompt("g. Enter the starting index to delete color(s) from:"));
let countToDelete = parseInt(prompt("g. Enter the number of colors to delete:"));

if (!isNaN(indexToDelete) && !isNaN(countToDelete)) {
    let deletedItems = colors.splice(indexToDelete, countToDelete);
    document.write("g. Deleted item(s): " + deletedItems.join(", "));
}
document.write("g. Array After Deleting Color(s) from Index " + indexToDelete + ":");
document.write(colors.join(", "));


// question no 10 
var score=[320,230,480,120];
document.writeln(score);
score.sort((a,b)=>a-b);
document.writeln(score);


// question no 11
var cityNames=["karachi","islamabad","quetta","peshawar"];
var selectedCities=cityNames.slice(0,2);
document.writeln(selectedCities);


// question no 12 
var arr = ["This ", " is ", " my ", " cat"];

console.log("Array:");
console.log(arr.join(","));

var str = arr.join(""); 
console.log("String:");
console.log(str);

// question no 13 