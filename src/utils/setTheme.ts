import type { Theme } from "@custom-types/theme.types";

export default function setTheme(theme: Theme) {
    const body = document.querySelector('body');
    theme === 'dark' ? body.classList.add('dark') : body.classList.remove('dark');
    return localStorage.setItem("theme", theme)
}