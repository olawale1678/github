var navMenu = document.querySelector('.navbar__menu');
var homeMenu = document.querySelector('#home-page');
var aboutMenu = document.querySelector('#about-page');
var mobileMenu = document.querySelector('#mobile-menu');
var servicesMenu = document.querySelector('#services-page');
var navLogo = document.querySelector('#nav__logo');
var signUp = document.querySelector('#signup');
var elem = document.querySelector('.highlight');

var menu = () => {
    mobileMenu.classList.toggle('two');
    navMenu.classList.toggle('one');
}

mobileMenu.addEventListener('click', menu);

var hideMenuBar = () => {
    var scrollPos = window.scrollY;
    if (window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    } else if (window.innerWidth > 960 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    
    if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', hideMenuBar);
window.addEventListener('click', hideMenuBar);

var clearNav = () => {
    var one = document.querySelector('.two');
    if (window.innerWidth <= 768 && one) {
        navMenu.classList.remove('one');
        mobileMenu.classList.toggle('two');
    }
};

navMenu.addEventListener('click', clearNav);


var updateDate = () => {
    var a = new Date();
    var b = a.getFullYear();
    document.querySelector('.it').textContent = b;
}

window.onload = updateDate();