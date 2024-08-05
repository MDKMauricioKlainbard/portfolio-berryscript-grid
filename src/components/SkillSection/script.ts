const skillSection = document.querySelector("#skills-section") as HTMLElement;
const badges = document.querySelectorAll(".badge") as unknown as HTMLElement[];

const observerCallback = () => {
    const callback = (entries: any, observer: any) => {
        entries.forEach((entry: any) => {
            if (entry.isIntersecting) {
                badges.forEach((badge, index) => {
                    badge.animate([
                        { scale: 0, opacity: 0 },
                        { scale: 1, opacity: 1 },
                    ], {
                        fill: 'forwards',
                        duration: 500,
                        delay: 100 * index,
                        easing: 'ease-in-out'
                    })
                })
                observer.unobserve(entry.target)
            }
        })
    }

    const options = {
        root: null,
        marginRoot: '0px',
        threshold: 0.0001,
    }

    const observer = new IntersectionObserver(callback, options);
    observer.observe(skillSection)
}

document.addEventListener('DOMContentLoaded', observerCallback)


