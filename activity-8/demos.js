// -- Part A: Asynchronous JavaScript Demonstrations

console.log("\n--- Part A: Asynchronous JavaScript Demonstrations ---");

// -- Timout
console.log("-- setTimeOut Method");
console.log("Before setTimeOut Method");
setTimeout(timeOutDemo(), 3000);

function timeOutDemo() {
  console.log("After setTimeOut Method");
}


// Demonstrate the event loop
console.log("\nEvent loop demonstration:");
console.log("A. Synchronous code");

setTimeout(() => {
  console.log("C. Asynchronous callback (0ms timeout)");
}, 0);
-
console.log("--- Part B: Fetch API Introduction ---");

// Promise demonstration
console.log("--- Part B: Fetch API Introduction ---");

const simplePromise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.3; // 70% success rate
  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  }, 500);
});

// Handling promise with .then/.catch
function demonstratePromise() {
  console.log("Demonstrating promise with .then/.catch...");

  simplePromise
    .then((result) => {
      console.log("Promise success:", result);
    })
    .catch((error) => {
      console.log("Promise error:", error);
    });
}

// Handling promise with async/await
async function demonstrateAsyncAwait() {
  console.log("Demonstrating promise with async/await...");

  try {
    const result = await simplePromise;
    console.log("Async/await success:", result);
  } catch (error) {
    console.log("Async/await error:", error);
  }
}

// Call both demonstrations
demonstratePromise();
demonstrateAsyncAwait();

// Part B: Fetch API Introduction
console.log("\n=== FETCH API INTRODUCTION ===");

// Basic fetch demonstration with .then/.catch
function demonstrateFetch() {
  console.log("Demonstrating basic fetch with .then/.catch...");

  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      console.log("Response object:", response);
      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      return response.json();
    })
    .then((data) => {
      console.log("JSON data:", data);
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}


