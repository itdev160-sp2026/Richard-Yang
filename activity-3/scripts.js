console.log("--Part A: DOM Selection Demonstrations--");
// Elements by ID
const title = document.getElementById("title");
const greetMessage = document.getElementById("greeting-message");
const greetImage = document.getElementById("greeting-image");
const nameInput = document.getElementById("nameInput");

console.log("Greeting message element: ", greetMessage);
console.log("Greeting image element: ", greetImage);
console.log("Selected name input element: ", nameInput);

// Elements by querySelector
const cardContainer = document.querySelector(".card-container");
const firstButton = document.querySelector("button");

console.log("Selected card container:", cardContainer);
console.log("First button found:", firstButton);

// Elements by querySelectorAll
const allButtons = document.querySelectorAll("button");
console.log(`Found ${allButtons.length} buttons:`, allButtons);

console.log("--Part B: Content Modification--");

console.log("Original message textContent: ", greetMessage.textContent);
console.log("Original image alt attribute: ", greetImage.getAttribute("alt"));

console.log("--Part C: Attribute Modification-");

console.log("Current image src: ", greetImage.getAttribute("src"));
console.log("Image has 'src' attribute: ", greetImage.hasAttribute("src"));
console.log("Current image alt: ", greetImage.getAttribute("alt"));
greetImage.removeAttribute("alt");
console.log("Removed image's 'alt' attribute: ", greetImage.getAttribute("alt"));

const greetings = {
    birthday: {
        message: "Happy Birthday!",
        image: "https://picsum.photos/id/407/4272/2848?text=Happy+Birthday!",
        alt: "Birthday Celebration"
    },
    holiday: {
        message: "Happy Holidays!",
        image: "https://picsum.photos/id/158/4836/3224?text=Happy+Holidays!",
        alt: "Holiday Celebration"
    },
    thankYou: {
        message: "Thank You!",
        image: "https://picsum.photos/id/433/4752/3168?text=Thank+You!",
        alt: "Thank You Greet"
    },
    welcome: {
        message: "Welcome!",
        image: "https://picsum.photos/id/473/5000/3333?text=Welcome",
        alt: "Welcome Greet"
    }
};

console.log("--Part D: Dynamic Greeting Card Functions--");

function updateGreeting(type) {
    const greeting = greetings[type];

    if (greeting) {
        // Update message
        greetMessage.textContent = greeting.message;

        // Update image
        greetImage.setAttribute("src", greeting.image);
        greetImage.setAttribute("alt", greeting.alt);

        console.log(`Updated greeting to: ${type}`);
        console.log(`Message: ${greeting.message}`);
        console.log(`Image: ${greeting.image}`);
    } else {
        console.error(`Greeting type "${type}" not found`);
    }
}

function setBirthdayGreeting() {
    updateGreeting("birthday");
}

function setHolidayGreeting() {
    updateGreeting("holiday");
}

function setThankYouGreeting() {
    updateGreeting("thankYou");
}

function setRandomGreeting() {
    const types = Object.keys(greetings);
    const randomType = types[Math.floor(Math.random() * types.length)];
    updateGreeting(randomType);
    console.log(`Random greeting selected: ${randomType}`);
}

console.log("--Part E: Interactive Features--");

function personalizeGreeting() {
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter a name to personalize the greeting!");
        console.log("Personalization attempted with empty name");
        return;
    }

    // Get current message and add name
    const currentMessage = greetMessage.textContent;
    const personalizedMessage = `${currentMessage}\n\nDear ${name}!`;

    greetMessage.innerHTML = personalizedMessage.replace('\n\n', '<br><br>');

    console.log(`Personalized greeting for: ${name}`);
    console.log(`Full message: ${personalizedMessage}`);


    nameInput.value = "";
}


//For Fun
//Change Header's color using get and set attribute
function test(){
    if(title.getAttribute("id") == "title"){
        title.setAttribute("id", "title2");
        console.log("Header's ID: "+title.getAttribute("id"));
    }else{
        title.setAttribute("id", "title");
        console.log("Header's ID: "+title.getAttribute("id"));
    }
    
}