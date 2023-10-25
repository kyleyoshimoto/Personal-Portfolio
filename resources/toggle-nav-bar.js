const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("Dropdown");
const toggleArrow = document.getElementById("Arrow");

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
});

document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
        toggleDropdown();
    };
});