// Función para alternar el menú
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('show');
}

// Control de audio para el botón de mute
const muteButton = document.getElementById('mute-button');
const audio = new Audio('audio/cancionMain.mp3'); // Asegúrate de que esta ruta sea correcta

audio.loop = true; // Reproduce en bucle

// Inicia el audio solo después de una interacción del usuario
let isMuted = true;
audio.muted = true;

muteButton.addEventListener('click', () => {
  if (isMuted) {
    audio.play(); // Reproduce el audio si está en mute
  }
  isMuted = !isMuted;
  audio.muted = isMuted; // Activa o desactiva el mute
  muteButton.querySelector('img').src = isMuted ? 'image/mute_icon.png' : 'image/unmute_icon.png'; // Cambia el icono
});