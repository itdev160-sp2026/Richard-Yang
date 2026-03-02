// Part A: Element Selection and Setup
console.log("Part A: Element Selection and Setup");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const result = document.getElementById("result");
const buttons = document.querySelectorAll("button");

console.log("Number 1 Element: ", number1);
console.log("Number 2 Element: " , number2);
console.log("Result Element: " , result);
console.log("Button Elements: " , buttons);

// Part B: Event Object Helper
console.log("Part B: Event Object Helper");


// Part C: Input Validation and Math Operations
console.log("Part C: Input Validation and Math Operations");

    //Check Inputs
function validateInputs() {
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);

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
console.log("Part D: User Interface Interactions");

function calculate( op ){
    const num1 = parseFloat(number1.value);
    const num2 = parseFloat(number2.value);
    let answer;
    validateInputs(num1,num2);

    switch (op) {
        case "add":
            answer = num1 + num2;
            break;
        case "subtract":
            answer = num1 - num2;
            break;
        case "multiply":
            answer = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                showError("Error: Cannot divide by zero.");
                return;
            }
            answer = num1 / num2;
            break;
    }

    return answer;    
}


function clearAll() {
  number1.value = "";
  number2.value = "";
  result.textContent = "Result will appear here";
  console.log("All inputs and results cleared");
}

function showError(msg) {
    result.textContent = msg;
    result.style.color = "red";
}

function showResult(result, operation) {
  resultDiv.textContent = `Result: ${result}`;
  resultDiv.className = "result success";
  console.log(`Displaying result: ${result} for operation: ${operation}`);
}
