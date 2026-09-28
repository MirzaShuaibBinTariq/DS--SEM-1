/* =========================================
   PENCIL BEATS MAIN JAVASCRIPT
========================================= */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const subjectScreen =
    document.getElementById("subjectScreen");

const themeButton =
    document.getElementById("themeButton");


/* =========================================
   HIDE SUBJECTS AT FIRST
========================================= */

subjectScreen.style.display = "none";


/* =========================================
   OPEN WEBSITE
========================================= */

let websiteOpened = false;


function openWebsite() {

    if (websiteOpened) {
        return;
    }

    websiteOpened = true;

    welcomeScreen.style.opacity = "0";

    setTimeout(function () {

        welcomeScreen.style.display = "none";

        subjectScreen.style.display = "block";

    }, 600);
}


/* Click anywhere */

welcomeScreen.addEventListener(
    "pointerdown",
    openWebsite
);


/* =========================================
   DARK / LIGHT MODE
========================================= */

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeButton.textContent = "☀";

        localStorage.setItem(
            "pencilBeatsTheme",
            "dark"
        );

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem(
            "pencilBeatsTheme",
            "light"
        );
    }

});


/* =========================================
   REMEMBER THEME
========================================= */

const savedTheme =
    localStorage.getItem("pencilBeatsTheme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeButton.textContent = "☀";
}