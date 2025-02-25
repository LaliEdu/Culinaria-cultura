
const ratings = document.querySelectorAll('input[name="rating"]');
const resultDiv = document.getElementById('result');

// Adiciona um evento de mudança a cada input de rádio
ratings.forEach((rating) => {
    rating.addEventListener('change', () => {
        const selectedValue = rating.value;
        resultDiv.textContent = `Você avaliou o site com ${selectedValue} estrela(s)!`;
    });
});