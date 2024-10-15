// script.js

const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const result = document.getElementById('result');

const randomNumber = Math.floor(Math.random() * 100) + 1;

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        result.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
        result.style.color = 'red';
    } else if (userGuess === randomNumber) {
        result.textContent = '¡Felicidades! Adivinaste el número.';
        result.style.color = 'green';
    } else if (userGuess < randomNumber) {
        result.textContent = 'Demasiado bajo. Intenta de nuevo.';
        result.style.color = 'orange';
    } else {
        result.textContent = 'Demasiado alto. Intenta de nuevo.';
        result.style.color = 'orange';
    }
});
