const welcomeMsg = document.getElementById('welcome-msg');
const descText = document.getElementById('desc-text');
const btnChange = document.getElementById('btn-change-text');
const btnToggle = document.getElementById('btn-toggle');
const extraContent = document.getElementById('extra-content');

alert("¡Bienvenido a mi portafolio optimizado!");

btnChange.addEventListener('click', () => {
    descText.innerText = "¡El texto ha sido actualizado con éxito!";
    descText.style.color = "#e67e22";
});

btnToggle.addEventListener('click', () => {
    if (extraContent.classList.contains('hidden')) {
        extraContent.classList.remove('hidden');
        btnToggle.innerText = "Ocultar Info";
    } else {
        extraContent.classList.add('hidden');
        btnToggle.innerText = "Mostrar Info";
    }
});