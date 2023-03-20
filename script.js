const btnElement = document.getElementById('btn');
const resultElement = document.getElementById('bmi-result');
const weightConditionElement = document.getElementById('weight-condition');

btnElement.addEventListener('click', () => {
    const heightElementValue = document.getElementById('height').value / 100;
    const weightElementValue = document.getElementById('weight').value;

    // bmi = weight / (height * height)
    const bmi = weightElementValue / (heightElementValue * heightElementValue);

    resultElement.value = bmi;

    // bmi - condition
    if (bmi < 18.5) {
        weightConditionElement.innerText = `Underweight`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        weightConditionElement.innerText = `Normal weight`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        weightConditionElement.innerText = `Overweight`;
    } else if (bmi >= 30) {
        weightConditionElement.innerText = `Obesity`;
    }
    
});