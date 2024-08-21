document.addEventListener('DOMContentLoaded', () => {
    const heartButton = document.getElementById('heart-button');
    const momentsList = document.getElementById('moments-list');

    heartButton.addEventListener('click', () => {
        momentsList.classList.toggle('hidden');
    });

    const photos = document.querySelectorAll('.photo');
    const photoCaption = document.getElementById('photo-caption');

    photos.forEach(photo => {
        photo.addEventListener('mouseover', () => {
            photoCaption.textContent = photo.dataset.caption;
        });

        photo.addEventListener('mouseout', () => {
            photoCaption.textContent = '';
        });
    });

    const quizOptions = document.querySelectorAll('.quiz-option');
    const quizFeedback = document.getElementById('quiz-feedback');

    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            const answer = option.textContent;
            if (answer === 'En tu universidad') {
                quizFeedback.textContent = '¡Correcto! Nuestra primera cita fue en tu universidad.';
            } else {
                quizFeedback.textContent = 'Incorrecto. La respuesta correcta es "En tu universidad".';
            }
            quizFeedback.classList.remove('hidden');
        });
    });

    const secretInput = document.getElementById('secret-input');
    const secretMessage = document.getElementById('secret-message');

    secretInput.addEventListener('input', () => {
        if (secretInput.value.toLowerCase() === 'te amo') {
            secretMessage.classList.remove('hidden');
        } else {
            secretMessage.classList.add('hidden');
        }
    });
    const revealMessageButton = document.getElementById('reveal-message-button');
    const hiddenMessage = document.getElementById('hidden-message');

    revealMessageButton.addEventListener('click', () => {
        hiddenMessage.classList.remove('hidden');
    });

    const surpriseSection = document.getElementById('surprise-message');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollPosition >= documentHeight) {
            surpriseSection.classList.remove('hidden');
        }
    });
});
