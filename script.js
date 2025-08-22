d// Botão "Bora dirigir comigo?" funcional
const driveBtn = document.getElementById('driveBtn');
driveBtn.addEventListener('click', (e) => {
  e.preventDefault();
  alert("Preparada para dirigir comigo? 🚗💨");
  // Aqui você pode adicionar qualquer ação extra, como rolar para uma seção ou abrir modal
});

// Botão de confete
const confettiBtn = document.getElementById('confettiBtn');
confettiBtn.addEventListener('click', () => {
  if (typeof confetti === 'function') {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
  }
});