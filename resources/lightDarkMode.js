
// Function the checks if system preferences match or not and returns appropriate theme.
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    } else if (systemSettingDark.matches) {
        return "dark";
    } else {
        return "light";
    }
};

// Updates the button accordingly to what mode is currently enabled.
function updateButton({buttonEl, isDark}) {
    if (isDark) {
        document.getElementById("dark").style.background = "var(--secondaryColor)";
        document.getElementById("light").style.background = "var(--backgroundColor)";
    } else {
        document.getElementById("light").style.background = "var(--secondaryColor)";
        document.getElementById("dark").style.background = "var(--backgroundColor)";
    }
};


// Updates theme on html tag.
function updateHtml({theme}) {
    document.querySelector("html").setAttribute("data-theme", theme);
};

// Points to actual button on html doc.
const button = document.querySelector("[data-theme-toggle]")
// Obtain access to a localStorage value that will later allow us to make the change accordingly.
const localStorageTheme = localStorage.getItem("theme");
// Checks to see if system preferences match.
const systemSettingDark = window.matchMedia("(perfers-color-scheme: dark)");

// Constant for current setting.
let currentThemeSetting = calculateSettingAsThemeString({localStorageTheme, systemSettingDark});

// Calls our functions to update theme setting and button display.
updateButton({buttonEl: button, isDark: currentThemeSetting === "light"});
updateHtml({theme: currentThemeSetting});

button.addEventListener("mousedown", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    localStorage.setItem("theme", newTheme);
    updateButton({buttonEl: button, isDark: newTheme === "dark"});
    updateHtml({theme: newTheme});

    currentThemeSetting = newTheme;
});