import getTheme from "@utils/getTheme";
import { formattedDarkBadges, formattedLightBadges } from "./svg";
import { capitalizeFirstLetter } from "@utils/modalKey";

const badges = document.querySelectorAll('.badge');
const btnThemeToggle = document.getElementById("theme-toggle");

const updateBadges = () => {
    let theme = capitalizeFirstLetter(getTheme());
    badges.forEach(async (badge: HTMLElement) => {
        badge.innerHTML = "";
        const baseName = badge.getAttribute('data-name')
        if (theme === 'Light') {
            const name = baseName + "Light";
            badge.innerHTML = formattedLightBadges[name];
        }
        if(theme === 'Dark') {
            const name = baseName + "Dark"
            badge.innerHTML = formattedDarkBadges[name]
        }
    })
}

btnThemeToggle.addEventListener("click", updateBadges)

window.addEventListener('DOMContentLoaded', updateBadges)