console.log("Hello World");
document.getElementById("output").innerHTML = "Hello World";

let studentName = "Richard";
const age = 22;
let isStudent = true;
let emptyValue = null;
let notAssigned;

console.log("-Variables-");
console.log("studentName: " + studentName + " is "+ typeof studentName);
console.log("age: " + age + " is "+ typeof age);
console.log("isStudent: " + isStudent + " is "+ typeof isStudent);
console.log("emptyValue: " + emptyValue + " is "+ typeof emptyValue);
console.log("notAssigned: " + notAssigned + " is "+ typeof notAssigned);

console.log("-Variables Types (typeof)-");
console.log("studentName: " +  typeof studentName);
console.log("age: " +  typeof age);
console.log("isStudent: " +  typeof isStudent);
console.log("emptyValue: " +  typeof emptyValue);
console.log("notAssigned: " +  typeof notAssigned);

console.log("Original: " + studentName);
studentName = "Joe Joe";
console.log("After Reassignment: " + studentName );
age = 23;
console.log(age + " (after reassignment)"); //Causes an error because the variable is a constant variable which cannot be modified

