const btn = document.getElementById("btn");
const bmiInput = document.getElementById("bmi-result");
const weightCondition = document.getElementById("weight-condition");

function calculateBMI() {
    const height = document.getElementById("height").value / 100;
    const weight = document.getElementById("weight").value;

    const bmiValue = weight / (height * height);

    bmiInput.value = bmiValue.toFixed(2);

    if (bmiValue < 18.5) {
        weightCondition.innerText = "น้ำหนักต่ำกว่าปกติ";
    } 
    else if (bmiValue < 25) {
        weightCondition.innerText = "น้ำหนักปกติ";
    } 
    else if (bmiValue < 30) {
        weightCondition.innerText = "น้ำหนักมากกว่าปกติ";
    } 
    else {
        weightCondition.innerText = "ภาวะน้ำหนักเกิน";
    }
}

btn.addEventListener("click", calculateBMI);
