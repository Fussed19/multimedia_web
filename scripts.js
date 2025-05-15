// Función para alternar el menú
function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('show');
}

// Control de audio para el botón de mute
const muteButton = document.getElementById('mute-button');
const audio = new Audio('audio/cancionMain.mp3'); 

audio.loop = true; // Reproduce en bucle

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch((error) => {
        console.error('Error al intentar reproducir el audio:', error);
      });
    }
  }, { once: true }); 
});

let isMuted = false;

muteButton.addEventListener('click', () => {
  isMuted = !isMuted;
  audio.muted = isMuted; 
  muteButton.querySelector('img').src = isMuted ? 'image/unmute_icon.png' : 'image/mute_icon.png'; // Cambia el icono
});