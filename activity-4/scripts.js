// Part A: Element Creation Demonstrations
// Elements
const divElement = document.createElement("div");
const pElement = document.createElement("p");
const mainElement = document.createElement("main");

console.log("--Part A: Element Creation Demonstrations--");
console.log("Created div element:", divElement);
console.log("Created p element:", pElement);
console.log("Created main element:", mainElement);

// Setting properties on elements
divElement.textContent = "A created Div element";
pElement.innerText = "A created p Element";

// Part B: Element Styling Demonstrations
console.log("--Part B: Element Styling Demonstrations--");

divElement.classList.add("divClass");
pElement.classList.add("pClass");

console.log("Added divElement class: " + divElement.classList);
console.log("Added pElement class: " + pElement.classList);

if(pElement.classList.contains("pClass")){
    console.log("Checks if pElement have a class name 'pClass': " + pElement.classList.contains("pClass"));
    pElement.classList.remove("pClass");
    console.log("Removed pElement class: " + pElement.classList);
}

pElement.classList.toggle("active");
console.log("After toggling 'active':", pElement.classList);

divElement.style.backgroundColor = "blue";
divElement.style.padding = "10px";
divElement.style.border = "dotted red";

// Part C: Element Appending Demonstrations
// Appending
const outputDiv = document.getElementById("output");
console.log("Output div before appending:", outputDiv.children.length, "children");
outputDiv.appendChild(divElement);
outputDiv.appendChild(pElement);
outputDiv.appendChild(mainElement);
console.log("Output div after appending:", outputDiv.children.length, "children");
console.log("--Part C: Element Appending Demonstrations--");

// Part D: To-Do List Core Functionality
let tasks = [];
let taskIdCounter = 1;
console.log("--Part D: To-Do List Core Functionality--");
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    
    console.log(`Attempting to add task: "${taskText}"`);

    if (taskText === "") {
        alert("Please enter a task!");
        console.log("Task addition failed: empty input");
        return;
    }
    
    if (taskText.length > 100) {
        alert("Task is too long! Please keep it under 100 characters.");
        console.log("Task addition failed: too long");
        return;
    }
    
    const task = {
        id: taskIdCounter++,
        text: taskText,
        completed: false,
        createdAt: new Date()
    };
    
    tasks.push(task);
    console.log("Task added to array:", task);
    
    const listItem = createTaskElement(task);
    
    const todoList = document.getElementById("todo-list");
    todoList.appendChild(listItem);
    
    taskInput.value = "";
    
    updateTaskStats();
    
    console.log(`Task "${taskText}" added successfully. Total tasks: ${tasks.length}`);
}

function createTaskElement(task) {
    // Create list item
    const listItem = document.createElement("li");
    listItem.className = "task-item";
    listItem.setAttribute("data-task-id", task.id);
    
    const taskTextSpan = document.createElement("span");
    taskTextSpan.className = "task-text";
    taskTextSpan.textContent = task.text;
    
    const statusSpan = document.createElement("span");
    statusSpan.className = "task-status";
    
    if (task.completed) {
        listItem.classList.add("done");
        statusSpan.textContent = "\u2713 Done";
        statusSpan.className += " status-done";
    } else {
        statusSpan.textContent = "\u23F3 Pending";
        statusSpan.className += " status-pending";
    }
    
    // Append spans to list item
    listItem.appendChild(taskTextSpan);
    listItem.appendChild(statusSpan);

    listItem.onclick = function() {
        toggleTaskCompletion(task.id);
    };
    
    console.log("Created task element:", listItem);
    return listItem;
}

// Part E: Task State Management
console.log("--Part E: Task State Management--");
function toggleTaskCompletion(taskId) {
    console.log(`Toggling completion for task ID: ${taskId}`);
    
    // Find task in array
    const task = tasks.find(t => t.id === taskId);
    if (!task) {
        console.error(`Task with ID ${taskId} not found`);
        return;
    }
    
    task.completed = !task.completed;
    console.log(`Task "${task.text}" is now ${task.completed ? 'completed' : 'pending'}`);
    
    const listItem = document.querySelector(`[data-task-id="${taskId}"]`);
    const statusSpan = listItem.querySelector(".task-status");
    
    if (task.completed) {
        listItem.classList.add("done");
        statusSpan.textContent = "\u2713 Done";
        statusSpan.className = "task-status status-done";
    } else {
        listItem.classList.remove("done");
        statusSpan.textContent = "\u23F3 Pending";
        statusSpan.className = "task-status status-pending";
    }
    
    updateTaskStats();
}

function updateTaskStats() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;
    
    // Update DOM elements
    document.getElementById("taskCount").textContent = `(${totalTasks} task${totalTasks !== 1 ? 's' : ''})`;
    document.getElementById("totalTasks").textContent = `Total: ${totalTasks}`;
    document.getElementById("completedTasks").textContent = `Completed: ${completedTasks}`;
    document.getElementById("pendingTasks").textContent = `Pending: ${pendingTasks}`;
    
    console.log(`Stats updated - Total: ${totalTasks}, Completed: ${completedTasks}, Pending: ${pendingTasks}`);
}

document.getElementById("taskInput").onkeydown = function(event) {
    if (event.key === "Enter") {
        addTask();
    }
};

console.log("To-Do List application initialized. Add Some Tasks");

const initialDemo = 
    `<h3>DOM Manipulation Demonstrations</h3>
    <p>Element creation examples loaded above</p>
    <p>Styling and classList demonstrations complete</p>
    <p>Ready to create and manage to-do tasks!</p>`;

setTimeout(() => {
    document.getElementById("output").innerHTML = initialDemo + document.getElementById("output").innerHTML;
}, 100);
