window.addEventListener('scroll', () => {
    // Aggiungiamo un controllo: se la pagina è corta, la barra resta a 0
    let scrollHeight = document.body.scrollHeight - window.innerHeight;
    let scroll = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
    
    let bar = document.querySelector('.reveal-bar');
    if (bar) {
        bar.style.width = (scroll * 100) + '%';
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Se la card è dentro, mettila visibile
            entry.target.classList.add('visible');
        } else {
            // Se la card è fuori, toglila così è pronta a ripartire
            entry.target.classList.remove('visible');
        }
    });
}, { 
    threshold: 0.1 // Parte quando la card è entrata almeno al 10%
});

document.querySelectorAll('.felpa-card').forEach((el) => observer.observe(el));

function apriImmagine(element) {
    // 1. Alert di controllo: se questo non appare, il click non parte proprio
    console.log("Stai cliccando su:", element);
    
    let modal = document.getElementById("modal-zoom");
    let modalImg = document.getElementById("modal-img");
    
    // 2. Trova l'immagine dentro la card cliccata
    let imgSorgente = element.querySelector('img').src;
    
    if (imgSorgente) {
        modalImg.src = imgSorgente;
        modal.style.display = "flex"; // Usa flex pe' centrare
        console.log("Immagine caricata:", imgSorgente);
    } else {
        console.error("Non ho trovato l'immagine!");
    }
}