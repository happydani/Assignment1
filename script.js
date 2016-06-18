/// STEP 1
/* var someMonth;
var function theMonth(CURRENT_MONTH) // function to return current month
var CURRENT_MONTH; 		              // a constant
var summerMonth; 		              // an array of summer months
var myLibraryAFunction(); 	          // a function 

// STEP 2 - various literals
1.5      // numeric 
"This is an example of a string literal"
true     //boolean 
null     //null  


// STEP 3 - complex/variable expressions
var anExpression = 3 * (4 / 5) + 6;
var aSecondExpression = Math.PI * radius * radius;


// STEP 4 - variable declarations

var strFirstName, strLastName, strAddress, strCity, strState, intZipCode, intYourAge, strReferralSource, strMayWeContactYou;


// STEP 5 - 3 ways to make variable declarations and assignments

var strFirstName;
var isInstructor;
strFirstName = "Danette";
isInstructor = false;

var strFirstName = "Danette";
var isInstructor = false;

var strFirstName = "Danette", isInstructor = false;


// STEP 6 - coerce mixed types

var concatNumberString = 5 + " strings";
window.console.log(concatNumberString);

var concatBooleanString = false + " strings";
window.console.log(concatBooleanString);

var concatNumberBoolean = 3.5 + false;
window.console.log(concatNumberBoolean);


// STEP 7 - Hoisting variables

var make = "Chevy";
console.log("The car is a " + make + " " + model + ".");
var model = "Camaro";


// STEP 8 - escape key for contractions within quotes

var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
window.console.log(someString);


// STEP 9 - null and undefined variables

var photo = null;
window.console.log(photo);

var arr = ["Paul","Peter","Mary"];
arr[5] = "Dani";
window.console.log(arr[3]);


// STEP 10 - typeof

var ownHome;
window.console.log(typeof "Danette");
window.console.log(typeof 52);
window.console.log(typeof true);
window.console.log(typeof {type:"Lexus", model:"ES350", color:"red"});
window.console.log(typeof ownHome);


// STEP 11 - concatination of strings

alert("Hello " + "Danette Klein" + ", welcome to the  JavaScript class!");

    
// STEP 12  - concatination of strings & variables

var name = "Danette Klein";
alert("Hello " + name + ", welcome to the  JavaScript class!");


// STEP 13 - concatination of strings & variables

var name = "Danette Klein",
    course = "JavaScript";
alert("Hello " + name + ", welcome to the  " + course + " class!");


// STEP 14- concatination of strings & variables with a line break before "Welcome"

var name = "Danette Klein",
    course = "JavaScript";
alert("Hello " + name + ".\n" + "Welcome to the " +  course + " class!");

// STEP 15 - prompt for user's name

var course = "JavaScript",
    name = window.prompt("What is your full name?");
alert("Hello " + name + ".\n" + "Welcome to the " +  course + " class!");


// STEP 16 - prompt for course name

var course = window.prompt("Which course are you attending?"),
name = window.prompt("What is your full name?");
alert("Hello " + name + ".\n" + "Welcome to the " +  course + " class!");


// STEP 17 - addition

var x, y; 
x = 10;
y = 20;
window.console.log(x + y);


// STEP 18 - addition

var x = 20;
window.console.log(x += 20);


// STEP 19 - multiplication

var x = 20;
window.console.log(x *= 5);


// STEP 20 - modulus

var x = 20 % 3;
window.console.log(x /= 1);


// STEP 21 - comparion and logical operators evaluating to true

window.console.log(Boolean(10 >= 10 && true != false || false == true));


// STEP 22- comparion and logical operators evaluating to true

window.console.log(Boolean(8 > 11 && true == false && false == true));


// STEP 23 - the new operator and it's type of object

var widget = {};
window.console.log(typeof widget);


// STEP 24 - test if variable is an object

var widget = {};
if (widget instanceof Object) {
    window.console.log("true");
}

*/
// STEP 25 - test if variable is an object

var widget = {};
if (widget instanceof Object !== true) {
    window.console.log("false");
}

