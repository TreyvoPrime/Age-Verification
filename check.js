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
});