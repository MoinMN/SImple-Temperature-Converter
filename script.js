let input_text = document.getElementById('first-text');
let input_option_one = document.getElementById('temp1');
let input_option_second = document.getElementById('temp2');

input_text.addEventListener('input', convert);
input_option_one.addEventListener('input', convert);
input_option_second.addEventListener('input', convert);

function convert() {
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
        second_text.value = (Number(first_text) * 9/5) + 32;
    else if (first_option == 'Degree Celsius' && second_option == 'Kelvin')
        second_text.value = Number(first_text) + 273.15;
    else if (first_option == 'Fahrenheit' && second_option == 'Degree Celsius')
        second_text.value = (Number(first_text) - 32) * 5/9;
    else if (first_option == 'Fahrenheit' && second_option == 'Kelvin')
        second_text.value = (Number(first_text) - 32) * 5/9 + 273.15;
    else if (first_option == 'Kelvin' && second_option == 'Degree Celsius')
        second_text.value = Number(first_text) - 273.15;
    else if (first_option == 'Kelvin' && second_option == 'Fahrenheit')
        second_text.value = (Number(first_text) - 273.15) * 9/5 + 32;
    else
        console.log('Else One')
}

convert();