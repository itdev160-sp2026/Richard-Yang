// Part A: Function Demonstrations
console.log("--Activity 6: Function and Scope Demonstrations--");

// Function Declaration
function demonstrateDeclaration(message) {
    console.log("Function Declaration:", message);
    return message + " - Function Declaration";
}

// Function Expression
const demonstrateExpression = function (name) {
    console.log("Function expression:", name);
    return 'Hello, ' + name + '. - Function Expression';
};

// Arrow Function
const arrowFunction = (name) => {
    console.log("Arrow Function:", name);
    return "Hello, " + name + " - Arrow Function";
};

console.log("--Function Declaration--");
console.log(demonstrateDeclaration("Hello Chat"));
console.log("--Function Expression--");
console.log(demonstrateExpression("Tom Bo"));
console.log("--Arrow Function--");
console.log(arrowFunction("Bob Sun"));

// Scope demonstrations
const globalVariable = "Global Variable";

// Outside scopeDemonstration()
console.log("Outside scopeDemonstration Function-");
console.log("-Global Variable: ", globalVariable);

function scopeDemonstration() {
    const localVariable = "Local Variable";
    console.log("Inside scopeDemonstration Function-");
    console.log("-Global Variable: ", globalVariable);
    console.log("-Local Variable: ", localVariable);
    // Nested Function
    function nestedFunction() {
        let nestedVariable = "I'm nested";
        console.log("Inside nested function:");
        console.log("-Global:", globalVariable);
        console.log("-Local:", localVariable);
        console.log("-Nested:", nestedVariable);
    }
    nestedFunction();
}
scopeDemonstration();
