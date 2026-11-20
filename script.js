document.addEventListener('DOMContentLoaded', () => {
    const zapocetBtn = document.getElementById('zapocet-btn');
    const zapocetBox = document.getElementById('zapocet-box');

    if (zapocetBtn && zapocetBox) {
        zapocetBtn.addEventListener('click', () => {
            zapocetBox.classList.toggle('visible');
        });
    }

    const quoteBtn = document.getElementById('new-quote-btn');
    const quoteDisplay = document.getElementById('quote-display');

    const quotes = [
        '„Víš, co se říká o chlapovi, co tahá nůž do přestřelky...“ — Joe Barbaro',
        '„Jezdíš jako moje bába, a to je už deset let pod drnem!“ — Joe Barbaro',
        '„Promiň, mladej, Joe nebyl součástí dohody.“ — Leo Galante',
        '„Všechno se podělalo. Jako vždycky.“ — Vito Scaletta',
        '„Když chceš v tomhle městě něco dokázat, musíš si občas ušpinit ruce.“ — Henry Tomasino'
    ];

    if (quoteBtn && quoteDisplay) {
        let lastIndex = 0;

        quoteBtn.addEventListener('click', () => {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * quotes.length);
            } while (randomIndex === lastIndex);

            lastIndex = randomIndex;
            quoteDisplay.textContent = quotes[randomIndex];
        });
    }

    const fanForm = document.getElementById('fan-form');
    const feedback = document.getElementById('form-feedback');

    if (fanForm && feedback) {
        fanForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = document.getElementById('username').value.trim();
            const favorite = document.getElementById('favorite').value;
            const message = document.getElementById('message').value.trim();

            if (username.length < 2) {
                showFeedback('Zadej prosím své jméno nebo přezdívku (alespoň 2 znaky).', 'error');
                return;
            }

            if (message.length < 5) {
                showFeedback('Napiš prosím komentář (alespoň 5 znaků).', 'error');
                return;
            }

            showFeedback(
                `Díky, ${username}! Tvá odpověď (oblíbená postava: ${favorite}) byla úspěšně ověřena a zaznamenána.`,
                'success'
            );
            fanForm.reset();
        });
    }

    function showFeedback(text, type) {
        feedback.textContent = text;
        feedback.className = `feedback ${type}`;
    }
});