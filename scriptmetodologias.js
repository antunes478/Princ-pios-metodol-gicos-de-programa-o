// Adicione interatividade se necessário
// Por exemplo, ao passar o mouse sobre os títulos h2.

const titles = document.querySelectorAll('h2');

titles.forEach(title => {
    title.addEventListener('mouseover', () => {
        title.style.color = '#e74c3c';
    });

    title.addEventListener('mouseout', () => {
        title.style.color = 'inherit';
    });
});
