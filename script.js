const app = (function() {

    let activeSection;
    const body = document.querySelector('body');
    const nav = document.querySelector('.js-nav');
    const navButton = document.querySelector('.js-nav-button');
    const previousOffset = []; 
    let timeoutId;   

    const animateNavItemBorder = (target) => {
        const navBorder = document.querySelector('.js-nav-item--active__border');
        previousOffset[0] = target.offsetLeft;
        const currentOffset = target.offseLeft >= previousOffset[0] ? -target.offsetLeft : target.offsetLeft;
        navBorder.style.transform = `translateX(${currentOffset}px)`;
    }

    const setActiveNavItem = (target) => {
        const navItems = document.querySelectorAll('.js-nav-item');
        navItems.forEach((navItem) => navItem.classList.remove('nav-item--active'));
        target.classList.add('nav-item--active');
    }

    const setActiveClass = (target) => {
        const sections = document.querySelectorAll('.js-section');
        sections.forEach((section) => section.classList.remove('section--active'));
        target.classList.add('section--active');
    }

    const setActiveSectionElement = (target) => {
        const navItemText = target.getElementsByTagName('p')[0];
        activeSection = document.getElementById(navItemText.dataset.id);
    }
    
    const scrollToSection = (sectionElement) => {
        sectionElement.scrollIntoView({
            behavior: 'smooth', 
            inline: 'center'
        });
    }

    const toggleNavMenu = () => {
        if (body.classList.contains('nav--visible')) {
            body.classList.add('nav--hidden');
            body.classList.remove('nav--visible');
        } else {
            body.classList.add('nav--visible');
            body.classList.remove('nav--hidden');
        }
    }

    const handleNavItemClick = ({target}) => {
        const currentEl = target.classList.contains('.js-nav-item') ? target : target.parentNode;
        setActiveSectionElement(currentEl);
        setActiveNavItem(currentEl);
        animateNavItemBorder(currentEl);
        scrollToSection(activeSection);
        setActiveClass(activeSection);
    }

    const run = () => {
        navButton.addEventListener('click', toggleNavMenu);
        nav.addEventListener('click', handleNavItemClick);
    }

    return { run }
})();

document.addEventListener('DOMContentLoaded', app.run());