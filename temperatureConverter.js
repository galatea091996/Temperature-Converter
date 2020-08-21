const celciusInput = document.querySelector('#celcius > input');
const fahrenheithInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNumber(num) {
    return Math.round(num*100)/100;
}

function celciusToFahrenheitAndKalvin() {
	const cTemp = parseFloat(celciusInput.value);
	const fTemp = (cTemp * (9/5)) + 32;
	const kTemp = cTemp + 273.15;
	fahrenheithInput.value = roundNumber(fTemp);
	kelvinInput.value = roundNumber(kTemp);
}

function fahrenheitToCelciusAndKelvin() {
    const fTemp = parseFloat(fahrenheithInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * 5/9;
    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
}

function kelvinToCelciusAndFahrenheit(){
   const kTemp = parseFloat(kelvinInput.value);
   const cTemp = kTemp - 273.15;
   const fTemp = 9/5 * (kTemp - 273) + 32;
   celciusInput.value = roundNumber(cTemp);
   fahrenheithInput.value = roundNumber(fTemp);
   
}




function main() {
celciusInput.addEventListener('input', celciusToFahrenheitAndKalvin);
fahrenheithInput.addEventListener('input', fahrenheitToCelciusAndKelvin);
kelvinInput.addEventListener('input', kelvinToCelciusAndFahrenheit);
}

main();
