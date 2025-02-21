/*!
* Start Bootstrap - Small Business v5.0.6 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Seleciona todos os inputs de rádio
const ratings = document.querySelectorAll('input[name="rating"]');
const resultDiv = document.getElementById('result');

// Adiciona um evento de mudança a cada input de rádio
ratings.forEach((rating) => {
    rating.addEventListener('change', () => {
        const selectedValue = rating.value;
        resultDiv.textContent = `Você avaliou o site com ${selectedValue} estrela(s)!`;
    });
});