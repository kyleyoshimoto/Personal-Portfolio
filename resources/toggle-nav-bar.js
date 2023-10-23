
const navs = document.querySelectorAll('.navbar-item');
const bars = document.getElementById('nav-icon');


if (window.innerWidth < 560) {
    navs.forEach(function (nav) {
        nav.hidden=true;
    });

    bars.hidden = false;
} else {
    bars.hidden = true;

    navs.forEach(function (nav) {
        nav.hidden = false;
    });
}

const toggle = function classToggle() {
    bars.hidden = true;
    navs.forEach(function (nav) {
        nav.hidden = false;
    });
};

bars.addEventListener("click", toggle);