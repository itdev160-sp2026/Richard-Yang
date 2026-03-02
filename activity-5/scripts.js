// Part A: Element Selection and Setup
console.log("--Part A: Element Selection and Setup--");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".opButtons");

console.log("Number 1 Element: ", number1);
console.log("Number 2 Element: ", number2);
console.log("Result Element: ", result);
console.log("Button Elements: ", buttons);

// Part B: Event Object Helper
console.log("--Part B: Event Object Helper--");
function logEventDetails(event) {
    console.log("Event Type:", event.type);
    console.log("Target:", event.target);
    console.log("Tag Name:", event.target.tagName);
    console.log("Button Text:", event.target.textContent);
    console.log("Current Target:", event.currentTarget);
}

// Part C: Input Validation and Math Operations
console.log("--Part C: Input Validation and Math Operations--");

//Check Inputs
function validateInputs(num1, num2) {

    if (isNaN(num1) || isNaN(num2)) {
        result.textContent = "Please enter valid numbers in both fields.";
        console.log("Inputs Invalid!")
        return null;
    }
    console.log("Inputs Valid!")
    return { num1, num2 };
}
// Add
function add(a, b) {
    return a + b;
}
// Subtract
function subtract(a, b) {
    return a - b;
}
// Multiply
function multiply(a, b) {
    return a * b;
}
// Divide
function divide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero.";
    }
    return a / b;
}


// Part D: User Interface Interactions
console.log("--Part D: User Interface Interactions--");

    //Clear Inputs
function clearAll() {
    number1.value = "";
    number2.value = "";
    result.style.color = "white";
    result.textContent = "Result will appear here";
    console.log("All inputs and results cleared");
}

function showError() {
    result.textContent = "Please enter a valid first/second number";
    result.style.color = "red";
}

// Event Listeners
console.log("--Event Listeners--");


buttons.forEach(button => {
    button.addEventListener("click", function (event) {
        logEventDetails(event)
        // Clear previous result
        result.textContent = "";

        // User Inputs as floats
        const num1 = parseFloat(number1.value);
        const num2 = parseFloat(number2.value);

        // checks inputs
        if(!validateInputs(num1, num2)){
            showError();
            return;
        }
        const op = button.getAttribute("operator");
        let output;

        switch (op) {
            case "add":
                output = add(num1, num2);
                break;
            case "subtract":
                output = subtract(num1, num2);
                break;
            case "multiply":
                output = multiply(num1, num2);
                break;
            case "divide":
                output = divide(num1, num2);
                break;
            default:
                break;
        }
        result.style.color = "white";
        result.textContent = output;

    });
});