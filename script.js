const app = (function () {

    const log = (value, text = "[LOG]: ") => {
        console.log(text, value);
        return value;
    };

    let activeSection;
    const body = document.querySelector('body');
    const nav = document.querySelector('.js-nav');
    const navBorder = document.querySelector('.js-nav-item--active__border');
    const navButton = document.querySelector('.js-nav-button');
    const navItems = document.querySelectorAll('.js-nav-item');
    const navItemsArray = Array.from(navItems);
    const sections = document.querySelectorAll('.js-section');

    const findCssClass = (element, className) => element.classList.contains(className);

    const getActiveNavItem = (element) => findCssClass(element, "nav-item--active");

    const animateNavItemBorder = () => {
        const activeItem = navItemsArray.filter(getActiveNavItem)[0];
        const activeItemIndex = navItemsArray.indexOf(activeItem);
        navBorder.style.transform = `translateX(${(activeItemIndex * 100)}%)`;
    }

    const setActiveNavItem = (target) => {
        navItems.forEach((navItem) => navItem.classList.remove('nav-item--active'));
        target.classList.add('nav-item--active');
    }

    const setActiveClass = (target) => {
        sections.forEach((section) => section.classList.remove('section--active'));
        target.classList.add('section--active');
    }

    const setActiveSectionElement = (target) => {
        const navItemText = target.getElementsByTagName('p')[0];
        return document.getElementById(navItemText.dataset.id);
    }

    const scrollToSection = (sectionElement) => {
        sectionElement.scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
        });
    }

    const toggleNavMenu = () => {
        // nav--hidden already exists on the body so it will be removed
        body.classList.toggle('nav--hidden');

        // nav--visible doesn't exist on the body so it will be added
        body.classList.toggle('nav--visible');
    }

    const handleNavItemClick = ({ target }) => {
        const currentEl = findCssClass(target, '.js-nav-item') ? target : target.parentNode;
        setActiveNavItem(currentEl);
        animateNavItemBorder();
        activeSection = setActiveSectionElement(currentEl);
        scrollToSection(activeSection);
        setActiveClass(activeSection);
    }

    const run = () => {
        nav.addEventListener('click', handleNavItemClick);
        navButton.addEventListener('click', toggleNavMenu);
    }

    return { run }
})();

document.addEventListener('DOMContentLoaded', app.run());