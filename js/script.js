document.addEventListener('DOMContentLoaded', function() {
    const buttonPlay = document.querySelector('.button--play');
    const intro = document.querySelector('.intro');
    const introAudio = document.querySelector('.intro-audio');
    const audioIntro = document.querySelector('.audio--intro');
    const decisions = document.querySelector('.decisions');

    buttonPlay.addEventListener('click', function() {
        intro.classList.add('d-none');
        introAudio.classList.remove('d-none');
        audioIntro.play();
    });

    audioIntro.addEventListener('ended', function() {
        introAudio.classList.add('d-none');
        decisions.classList.remove('d-none');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttonOne = document.querySelector('.button--one');
    const buttonTwo = document.querySelector('.button--two');
    const decisionsElement = document.querySelector('.decisions');
    const audioOne = document.querySelector('.audio--one');
    const audioTwo = document.querySelector('.audio--two');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');

    buttonOne.addEventListener('click', function() {
        decisionsElement.classList.add('d-none');
        audioOne.classList.remove('d-none');
        one.classList.remove('d-none');
        audioOne.play();
    });

    buttonTwo.addEventListener('click', function() {
        decisionsElement.classList.add('d-none');
        audioTwo.classList.remove('d-none');
        two.classList.remove('d-none');
        audioTwo.play();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const audioOne = document.querySelector('.audio--one');
    const audioTwo = document.querySelector('.audio--two');
    const listenAgain = document.querySelector('.listen-again');
    const buttonListenAgain = document.querySelector('.button--listen-again');
    const intro = document.querySelector('.intro');
    const buttonPlay = document.querySelector('.button--play');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const introAudio = document.querySelector('.intro-audio');
    const audioIntro = document.querySelector('.audio--intro');

    audioOne.addEventListener('ended', function() {
        one.classList.add('d-none');
        listenAgain.classList.remove('d-none');
    });

    audioTwo.addEventListener('ended', function() {
        two.classList.add('d-none');
        listenAgain.classList.remove('d-none');
    });

    buttonListenAgain.addEventListener('click', function() {
        listenAgain.classList.add('d-none');
        introAudio.classList.remove('d-none');
        audioIntro.play();
    });
});
