// Adiciona uma classe de animação às seções quando a página é carregada
document.addEventListener("DOMContentLoaded", function() {
    animateSections();
});

// Adiciona uma classe de animação às seções
function animateSections() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach((section, index) => {
        section.style.animation = `fadeInUp 0.5s ease ${index / 5}s`;
    });
}
