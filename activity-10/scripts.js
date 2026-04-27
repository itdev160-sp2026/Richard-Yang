// -- Part A: localStorage Demonstrations
console.log("-- Part A: localStorage Demonstrations --");

console.log("- setItem() & getItem() with String-");
localStorage.setItem("demoString", "DemoString");
console.log("String : " + localStorage.getItem("demoString"));

console.log("- setItem() & getItem() with Integer -");
localStorage.setItem("demoInt", 10);
console.log("Integer : " + localStorage.getItem("demoInt"));

console.log("- JSON.stringify Demo -");
const demo = {
  name: "Eren",
  employeeID: 5122,
  fullTime: false
};
localStorage.setItem("jsonDemo", JSON.stringify(demo));
console.log("Stringify : " + localStorage.getItem("jsonDemo"));

console.log("- JSON.parse Demo -");
let parseDemo = JSON.parse(localStorage.getItem("jsonDemo"));
console.log("Parse Demo : " + parseDemo);
console.log("Employee ID : " + parseDemo.employeeID);

console.log("- removeItem -");
let removeItem = localStorage.removeItem("jsonDemo");
console.log("Removed jsonDemo variable : ", removeItem);

// -- Part B: Game State Management
console.log("-- Part B: Game State Management --");
const STORAGE_KEY = "tictactoe-game-state";

let gameState = {
  board: ["", "", "",
          "", "", "", 
          "", "", ""],
  player: "X",
  gameActive: true,
  winner: null,
  winningCombination: null,
};

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function initialize() {
  gameState = {
    board: ["", "", "", "", "", "", "", "", ""],
    player: "X",
    gameActive: true,
    winner: null,
    winningCombination: null,
  };

  updateBoard();
  updateStatus();
  saveGameState();
  console.log("Game initialized");
}

function move(index) {
  if (!gameState.gameActive || gameState.board[index] !== "") {
    return;
  }

  gameState.board[index] = gameState.player;

  const result = checkWinner();

  if (result.winner) {
    gameState.gameActive = false;
    gameState.winner = result.winner;
    gameState.winningCombination = result.combination;
    console.log(`Game over! Winner: ${result.winner}`);
  } else if (gameState.board.every((cell) => cell !== "")) {
    gameState.gameActive = false;
    console.log("Game over! It's a draw");
  } else {
    gameState.player = gameState.player === "X" ? "O" : "X";
  }

  updateBoard();
  updateStatus();
  saveGameState();
}

// Check for winner
function checkWinner() {
  for (let combination of winConditions) {
    const [a, b, c] = combination;
    const board = gameState.board;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combination: combination };
    }
  }

  return { winner: null, combination: null };
}

// Part C: localStorage Integration
console.log("-- Part C: localStorage Integration --");

// Save game state
function saveGameState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  console.log("Game state saved to localStorage");
}

function loadGameState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    gameState = JSON.parse(saved);
    console.log("Game state loaded from localStorage:", gameState);
    return true;
  }
  return false;
}

// Part D: UI Update Functions

function updateBoard() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((cell, index) => {
    const value = gameState.board[index];

    cell.textContent = value;
    cell.classList.remove("taken", "x", "o", "winning");

    if (value) {
      cell.classList.add("taken");
      cell.classList.add(value.toLowerCase());
    }

    if (
      gameState.winningCombination &&
      gameState.winningCombination.includes(index)
    ) {
      cell.classList.add("winning");
    }
  });
}

function updateStatus() {
  const statusElement = document.getElementById("statusMessage");
  statusElement.classList.remove("winner", "draw");
  if (gameState.winner) {
    //statusElement.textContent = 'Player ${gameState.winner} wins! \uD83C\uDFC6';
    statusElement.textContent = `Player ${gameState.winner} wins! 🏆`;
    statusElement.classList.add("winner");
  } else if (!gameState.gameActive) {
    statusElement.textContent = "It's a draw! \uD83E\uDD1D";
    statusElement.classList.add("draw");
  } else {
    statusElement.textContent = `Player ${gameState.player}'s turn`;
  }
}

// Event handlers
function handleCellClick(event) {
  const cell = event.target;
  if (!cell.classList.contains("cell")) return;

  const index = parseInt(cell.getAttribute("data-index"));
  move(index);
}

// Initialize application
function initializeApp() {
  console.log("Initializing Tic-Tac-Toe application...");

  const hasGameState = loadGameState();

  if (!hasGameState) {
    initialize();
  } else {
    updateBoard();
    updateStatus();
  }

  document
    .getElementById("gameBoard")
    .addEventListener("click", handleCellClick);
  document
    .getElementById("newGameBtn")
    .addEventListener("click", initialize);

  console.log("Tic-Tac-Toe application initialized successfully!");
}


initializeApp();
