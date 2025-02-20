const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === 0 || height < 0 || isNaN(height)){
        results.innerHTML = `Please provide a valid number! ${height}`
    }else if(weight === 0 || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please provide a valid number! ${weight}`
    }else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi < 18.6){
            results.innerHTML = `<span>${bmi}</span><br>You are Underweight!`
        }else if(18.6 < bmi < 24.9){
            results.innerHTML = `<span>${bmi}</span><br>You have Normal weight!`
        }else{
            results.innerHTML = `<span>${bmi}</span><br>You are Overweight!`
        }
    }
})