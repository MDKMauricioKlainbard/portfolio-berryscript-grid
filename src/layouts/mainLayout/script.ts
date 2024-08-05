import setTheme from "@utils/setTheme"
import getTheme from "@utils/getTheme"

document.addEventListener('DOMContentLoaded', () => {
    const theme = getTheme();
    if (!theme) return setTheme('light');
})

let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
}
const callbackObserver = (entries: any, observer: any) => {
    entries.forEach((entry: any) => {
        let id = entry.target.id;
        id = "nav-item-" + id.replace("-section", "")
        const navItem = document.getElementById(id) as HTMLElement;
        const labelItem = navItem.querySelector("label") as HTMLElement
        const underline = navItem.querySelector(".underline-nav-item") as HTMLElement
        if (entry.isIntersecting) {
            labelItem.style.color = "var(--line-color)"
            labelItem.style.scale = "1.1"
            underline.style.scale = "1"
        } else {
            labelItem.style.scale = "1"
            labelItem.style.color = "var(--text-color)"
            underline.style.scale = "0"
        }
    })
}

const allSections = document.querySelectorAll("section");
const sectionsArray = Array.from(allSections);
sectionsArray.shift();
const observer = new IntersectionObserver(callbackObserver, options);

document.addEventListener('DOMContentLoaded', ()=>{
    sectionsArray.forEach(section=>observer.observe(section))
})
