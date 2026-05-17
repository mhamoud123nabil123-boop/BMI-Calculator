let btn=document.querySelector("#btn")
let bmiInput=document.querySelector("#bmi")
let Condation=document.querySelector("#Condation")

function calculateBMI() {
    let heightValue=document.querySelector("#height").value / 100
    let weightValue=document.querySelector("#weight").value
    let bmiValue=weightValue / (heightValue * heightValue)
    bmiInput.value=bmiValue.toFixed(3)
    if (bmiInput.value < 18.5) {
        Condation.textContent="Under Weight"
    }
    else if(bmiInput.value >= 18.5 && bmiInput.value < 24.9) {
        Condation.textContent="Normal Weight"
    }
    else if(bmiInput.value >= 24.9 && bmiInput.value < 29.9 ) {
        Condation.textContent="OverWeight"
    }
    else if(bmiInput.value >= 29.9 ) {
        Condation.textContent="Obesity"
    }
}

btn.addEventListener("click",calculateBMI)