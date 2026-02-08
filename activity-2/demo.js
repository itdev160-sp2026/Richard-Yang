// Part A: Arithmetic Operators
console.log("-- Part A: Arithmetic Operators --");
let a = 20;
let b = 6;
console.log("a = " + a);
console.log("b = " + b);
console.log("Addition (a + b):\t", a +b );
console.log("Subtraction (a - b):\t", a - b);
console.log("Multiply (a * b):\t", a * b);
console.log("Divide (a / b):\t", a / b);
console.log("Modulus (a % b):\t", a % b);

// Part B: Comparison Operators
console.log("-- Part B: Comparison Operators --");
let myNumber = 5;
let myString = "5";
let myNumber2 = 10;

console.log("(int) myNumber =\t", myNumber);
console.log("(String) myString =\t", myString);
console.log("(int) myNumber2 =\t", myNumber2);
console.log("myNumber = myString:\t", myNumber = myString);
console.log("myNumber == myString (Loose Equality):\t", myNumber == myString);
console.log("myNumber === myString (Strict Equality):\t", myNumber === myString);
console.log("myNumber != myString (Loose Equality):\t", myNumber != myString);
console.log("myNumber !== myString (Strict Equality):\t", myNumber !== myString);
console.log("myNumber > myNumber2:\t", myNumber > myNumber2);
console.log("myNumber < myNumber2:\t", myNumber < myNumber2);
console.log("myNumber >= myNumber2:\t", myNumber >= myNumber2);
console.log("myNumber <= myNumber2:\t", myNumber <= myNumber2);


// Part C: Logical Operators
console.log("-- Part C: Logical Operators --");
let isHuman = true;
let isMale = false;
let age = 18;

console.log("isHuman = ", isHuman);
console.log("isMale = ", isMale);
console.log("age = ", age);

console.log("AND (Both Condition must be TRUE) :\n(isHuman && age > 17) =\t", isHuman && age > 17);
console.log("OR (One of the condition must be True) :\n(isHuman && isMale) =\t", isHuman || isMale);
console.log("NOT :\n(!isMale=\t", isMale);
console.log("Compound Condition :\n(age <= 18 || age >= 65)\t", age <= 17 || age >= 60);

// Part D: Conditional Statements
console.log("-- Part D: Conditional Statements --");
let score = 80;
console.log("Score = 80");
if(score <= 60){
    console.log("Your grade is a D");
}else if(score <= 70){
    console.log("Your grade is a C");
}else if(score <= 80){
    console.log("Your grade is a B");
}else if(score <= 90){
    console.log("Your grade is a A");
}else{
    console.log("Your grade is a A+");
}
// Part E: Switch Statement
console.log("-- Part E: Switch Statements --");
let dayOfWeek = 5
console.log("Sunday --> Saturday (0->6)");
console.log("Day of the Week Number: " + dayOfWeek);
switch(dayOfWeek){
    case 0:
        console.log("Today is Sunday!");
        break;
    case 1:
        console.log("Today is Monday!");
        break;
    case 2:
        console.log("Today is Tuesday!");
        break;
    case 3:
        console.log("Today is Wednesday!");
        break;
    case 4:
        console.log("Today is Thursday!");
        break;
    case 5:
        console.log("Today is Friday!");
        break;
    case 6:
        console.log("Today is Saturday!");
        break;
    default:
        console.log("Day of the Week number is Invalid!");
}

// Part F: Display a Message
console.log("-- Part A: Display a Message --");
console.log("Part F: Display a Message\nThis is my message");
document.getElementById("output").innerHTML = "<b>Part F: Display a Message - This is my Message. </b>";