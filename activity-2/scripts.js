// checkAge Function
function checkAge(){
    let age = document.getElementById("ageInput").value; //Retrieve input from user from ageInput ID
    console.log("Age Input: " + age);

    let result = document.getElementById("result");

    //Empty String
    if( age === ""){
        console.log("Empty");
        result.textContent = "Please Enter Your Age";
        result.className = "invalid";
        return;
    }
    //Checks if integer
    if(isNaN(age)){
        console.log("Not Int");
        result.textContent = "Please Enter Your Age (Integers Only)";
        result.className = "invalid";
        return;
    }

    age = Number(age);

    //Age Range
    if(age < 0  || age > 150){
        console.log("Empty");
        result.textContent = "Invalid - Enter a Realistic Age";
        result.className = "invalid";
        return;
    }
    //Adult or Minor
    if(age <= 17){
        console.log("Minor");
        result.textContent = "You are "+age+" years old, You are an minor";
        result.className = "minor";
        return;
    }else{
        console.log("Adult");
        result.textContent = "You are "+age+" years old, You are an adult";
        result.className = "adult";
        return;
    }
};