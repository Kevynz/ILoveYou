(function animateShorteningPhrase() {
    const phrases = [
        'I Love You',
        'I ❤️ You',
        'I ❤️ u',
        '❤️'
    ];
    const phraseContainer = document.getElementById('iLoveYou');
    let current = 0;
    const fadeDuration = 500; // ms

    function showPhrase(index) {
        phraseContainer.innerHTML = `<span class="sideBar">|</span>${phrases[index]}<span class="sideBar">|</span>`;
    }

    function fadeOut(element, callback) {
        element.style.opacity = '1';
        element.style.transition = `opacity ${fadeDuration}ms ease`;
        element.style.opacity = '0';
        setTimeout(callback, fadeDuration);
    }

    function fadeIn(element) {
        element.style.transition = `opacity ${fadeDuration}ms ease`;
        element.style.opacity = '1';
    }

    function nextPhrase() {
        fadeOut(phraseContainer, () => {
            current = (current + 1) % phrases.length;
            showPhrase(current);
            fadeIn(phraseContainer);
        });
    }

    // Inicializa com opacidade 1 e mostra a primeira frase
    phraseContainer.style.opacity = '1';
    showPhrase(current);

    setInterval(nextPhrase, 2000);
})();