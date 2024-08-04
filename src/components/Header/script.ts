const header = document.querySelector(".main-header") as HTMLElement;
const titleContainer = header.querySelector(".main-title-container") as HTMLElement;
const nav = header.querySelector(".main-nav") as HTMLElement
const aboutItem = nav.querySelector("#nav-item-about") as HTMLElement;
const projectItem = nav.querySelector("#nav-item-projects") as HTMLElement;
const skillItem = nav.querySelector("#nav-item-skills") as HTMLElement;
const contactItem = nav.querySelector("#nav-item-contact") as HTMLElement;

const allNavItems = {
    aboutItem,
    projectItem,
    skillItem,
    contactItem,
}

const titleHeight = titleContainer.offsetHeight;
const headerHeight = header.offsetHeight;
const navHeight = nav.offsetHeight;

for (let key in allNavItems) {
    allNavItems[key].addEventListener("click", () => {
        const sectionKey = allNavItems[key].id.replace("nav-item-", "") + "-section"
        const section = document.getElementById(sectionKey) as HTMLElement
        window.scrollTo({
            top: section.offsetTop - navHeight - 20,
            behavior: 'smooth'
        })
    })
}

window.addEventListener('scroll', ()=>{
    header.style.top = `-${headerHeight-navHeight}px`
})

window.addEventListener('DOMContentLoaded', () => {
    if(window.scrollY > 0) header.style.top = `-${headerHeight-navHeight}px`
})