let input_text_first = document.getElementById('first-text');
let input_text_second = document.getElementById('second-text');
let input_option_first = document.getElementById('temp1');
let input_option_second = document.getElementById('temp2');

input_text_first.addEventListener('input', convertRight);
input_text_second.addEventListener('input', convertLeft);
input_option_first.addEventListener('input', convertRight);
input_option_second.addEventListener('input', convertRight);

function convertRight() {
    let first_option = document.getElementById('temp1').value
    let second_option = document.getElementById('temp2').value    
    let first_text = document.getElementById('first-text').value
    let second_text = document.getElementById('second-text')
    
    if (first_option == 'Kelvin' && second_option == 'Kelvin')  {
        document.getElementById('temp2').value = "Degree Celsius";
    }
    if (first_option == 'Fahrenheit' && second_option == 'Fahrenheit'){
        document.getElementById('temp2').value = "Degree Celsius";
    }
    if (first_option == 'Degree Celsius' && second_option == 'Degree Celsius'){
        document.getElementById('temp2').value = "Fahrenheit";
    }
    
    second_option = document.getElementById('temp2').value

    if (first_option == 'Degree Celsius' && second_option == 'Fahrenheit') 
        second_text.value = parseFloat(((Number(first_text) * 9/5) + 32).toFixed(4));
    else if (first_option == 'Degree Celsius' && second_option == 'Kelvin')
        second_text.value = parseFloat((Number(first_text) + 273.15).toFixed(4));
    else if (first_option == 'Fahrenheit' && second_option == 'Degree Celsius')
        second_text.value = parseFloat(((Number(first_text) - 32) * 5/9).toFixed(4));
    else if (first_option == 'Fahrenheit' && second_option == 'Kelvin')
        second_text.value = parseFloat(((Number(first_text) - 32) * 5/9 + 273.15).toFixed(4));
    else if (first_option == 'Kelvin' && second_option == 'Degree Celsius')
        second_text.value = parseFloat((Number(first_text) - 273.15).toFixed(4));
    else if (first_option == 'Kelvin' && second_option == 'Fahrenheit')
        second_text.value = parseFloat(((Number(first_text) - 273.15) * 9/5 + 32).toFixed(4));
    else
        console.log('Else One')
}

function convertLeft() {
    let first_option = document.getElementById('temp1').value
    let second_option = document.getElementById('temp2').value    
    let first_text = document.getElementById('first-text')
    let second_text = document.getElementById('second-text').value
    
    if (first_option == 'Kelvin' && second_option == 'Kelvin')  {
        document.getElementById('temp2').value = "Degree Celsius";
    }
    if (first_option == 'Fahrenheit' && second_option == 'Fahrenheit'){
        document.getElementById('temp2').value = "Degree Celsius";
    }
    if (first_option == 'Degree Celsius' && second_option == 'Degree Celsius'){
        document.getElementById('temp2').value = "Fahrenheit";
    }
    
    second_option = document.getElementById('temp2').value

    if (first_option == 'Degree Celsius' && second_option == 'Fahrenheit') 
        first_text.value = parseFloat(((Number(second_text) - 32) * 5/9).toFixed(4));
    else if (first_option == 'Degree Celsius' && second_option == 'Kelvin')
        first_text.value = parseFloat((Number(second_text) - 273.15).toFixed(4));
    else if (first_option == 'Fahrenheit' && second_option == 'Degree Celsius')
        first_text.value = parseFloat(((Number(second_text) * 9/5) + 32).toFixed(4));
    else if (first_option == 'Fahrenheit' && second_option == 'Kelvin')
        first_text.value = parseFloat(((Number(second_text) - 273.15) * 9/5 + 32).toFixed(4));
    else if (first_option == 'Kelvin' && second_option == 'Degree Celsius')
        first_text.value = parseFloat((Number(second_text) + 273.15).toFixed(4));
    else if (first_option == 'Kelvin' && second_option == 'Fahrenheit')
        first_text.value = parseFloat(((Number(second_text) - 32) * 5/9 + 273.15).toFixed(4));
    else
        console.log('Else One')
}



convertRight();