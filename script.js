




$(document).ready(function () {

    /*(if (typeof jQuery != "undefined") {

    	alert('jQuery is installed!');

       } else {
        
        alert('jQuery is not installed!');

    }*/
    let backButton = document.querySelector('.backward');
    let buttonIcon = document.querySelector('.button--floating__icon');
    let contentWrapper = document.querySelector('.content-wrapper');
    let floatingButton = document.querySelector('.button--floating');
    let forwardButton = document.querySelector('.forward');
    let hero = document.querySelector('.hero');
    let translateValue = 0;


    // Handles showing and hiding the hero screen
    function toggleHero() {
        if (hero.classList.contains('hero--hide')) {
            hero.classList.remove('hero--hide');
            hero.classList.add('hero--show');
        } else {
            hero.classList.remove('hero--show');
            hero.classList.add('hero--hide');

            // reset content when hero is displayed
            translateContentWrapper(0);
        }
    }

    function rotateButtonIcon() {
        if (buttonIcon.classList.contains('rotate')) {
            buttonIcon.classList.remove('rotate');
        } else {
            buttonIcon.classList.add('rotate');
        }
    }

    // Figure out better name for function
    function translateContentWrapper(value) {
        contentWrapper.style.transform = 'translateX(${' + value + '}%)';
    }

    floatingButton.addEventListener('click', function (e) {
        console.log('button clicked!')
        toggleHero();
        rotateButtonIcon();
    });

    backButton.addEventListener('click', function (e) {
        if (translateValue === 0) {
            return translateValue;
        } else {
            translateValue += 33.3;
        }
        translateContentWrapper(translateValue);
    });

    forwardButton.addEventListener('click', function (e) {
        if (translateValue <= -60) {
            translateValue = 0;
        } else {
            translateValue += -33.3;
        }
        translateContentWrapper(translateValue);
    });



});


