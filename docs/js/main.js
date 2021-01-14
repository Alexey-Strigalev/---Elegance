document.querySelector('.menu-icon-wrapper').onclick = function () {
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.nav-list-holder').classList.toggle('nav-list-holder--visible');
    document.querySelector('.nav-list').classList.toggle('nav-list--visible');
};

document.querySelector('.nav-list').onclick = function () {
    document.querySelector('.menu-icon').classList.remove('menu-icon-active');
    document.querySelector('.nav-list-holder').classList.remove('nav-list-holder--visible');
    document.querySelector('.nav-list').classList.remove('nav-list--visible');
};

document.querySelector('.nav-list-holder').onclick = function () {
    document.querySelector('.menu-icon').classList.remove('menu-icon-active');
    document.querySelector('.nav-list-holder').classList.remove('nav-list-holder--visible');
    document.querySelector('.nav-list').classList.remove('nav-list--visible');
};
