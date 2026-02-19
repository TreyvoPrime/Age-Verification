const myText = document.getElementById("ageInput")
const mySubmit = document.getElementById("submitBtn")
const myResult = document.getElementById("result")
let age;
mySubmit.addEventListener("click", function () {
    console.log(age)
    age = myText.value
    age = Number(age)
    if (age < 5) {
        myResult.textContent = "You are below 5 years old!";
    } 
    else if (age <= 13) {
        myResult.textContent = "You are above 5 but below or the same age as 13!"
    }
    else if (age >= 14 && age < 18) {
        myResult.textContent = "You are a teenager!"
    }
    else if (age >= 18 && age < 21) {
        myResult.textContent = "You are an adult but not 21 yet"
    }
    else if (age == 21) {
        myResult.textContent = "You are 21 years old"
    }
    else if (age > 21 && age <= 65) {
        myResult.textContent = "You are a full adult!"
    }
    else if (age > 65 && age < 100) {
        myResult.textContent = "Holy unc!"
    }
    else {
        myResult.textContent = "You are very wise"
    }
});
