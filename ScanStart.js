// Așteaptă ca pagina să se încarce complet
window.addEventListener('DOMContentLoaded', function() {
  
  // Găsește pop-up-ul
  const popup = document.getElementById('popup-overlay');
  
  if (popup) {
    // Afișează pop-up-ul MEREU la încărcarea paginii
    popup.style.display = 'flex';
    
    // Click pe overlay (în afara căsuței) pentru închidere
    popup.addEventListener('click', function(e) {
      if (e.target === popup) {
        closePopup();
      }
    });
  }
});

// Funcție pentru închiderea pop-up-ului
function closePopup() {
  const popup = document.getElementById('popup-overlay');
  if (popup) {
    popup.style.display = 'none';
  }
}