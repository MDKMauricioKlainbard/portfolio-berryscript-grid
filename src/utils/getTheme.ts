export default function getTheme () {
    const theme = localStorage.getItem("theme");
    const body = document.querySelector('body')
    theme === 'dark' ? body.classList.add('dark') : body.classList.remove('dark');
    return theme;
}