import type { Theme } from "@custom-types/theme.types";
import getTheme from "@utils/getTheme";
import setTheme from "@utils/setTheme";

const btnThemeToggle = document.getElementById("theme-toggle");
const themeIcon = btnThemeToggle.querySelector(".theme-icon");

const sunSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
<path d="M21.4976 14C21.4984 15.4994 21.0536 16.9652 20.2197 18.2113C19.3858 19.4574 18.2004 20.4276 16.814 20.9987C15.4272 21.5712 13.9019 21.7202 12.4305 21.4269C10.9592 21.1336 9.6076 20.4111 8.54636 19.3505C7.48588 18.2902 6.76425 16.9387 6.47301 15.4675C6.18177 13.9964 6.33405 12.4719 6.91052 11.0875C7.48699 9.703 8.46169 8.52096 9.71096 7.69127C10.9602 6.86159 12.4278 6.42166 13.9275 6.42728C15.9369 6.4273 17.8642 7.22521 19.2856 8.64564C19.988 9.34897 20.5448 10.1839 20.9242 11.1027C21.3035 12.0214 21.498 13.006 21.4964 14M2.80382 15.3338H1.33636C0.982379 15.3338 0.642855 15.1934 0.392311 14.9433C0.141768 14.6932 0.00067487 14.354 6.13092e-07 14C-0.000167654 13.8246 0.0343021 13.6509 0.101432 13.4888C0.168563 13.3267 0.267032 13.1795 0.391192 13.0556C0.515352 12.9317 0.662758 12.8335 0.824954 12.7666C0.98715 12.6998 1.16094 12.6657 1.33636 12.6662H2.80382C3.1578 12.6662 3.49733 12.8066 3.74787 13.0567C3.99841 13.3068 4.13951 13.646 4.14018 14C4.14035 14.1754 4.10588 14.3492 4.03875 14.5112C3.97162 14.6733 3.87315 14.8205 3.74899 14.9444C3.62483 15.0684 3.47742 15.1665 3.31523 15.2334C3.15303 15.3002 2.97924 15.3343 2.80382 15.3338ZM26.6636 15.3338H25.2089C24.8551 15.3335 24.5159 15.1929 24.2657 14.9429C24.0154 14.6928 23.8745 14.3538 23.8738 14C23.8736 13.8246 23.9081 13.6509 23.9752 13.4888C24.0424 13.3267 24.1408 13.1795 24.265 13.0556C24.3892 12.9317 24.5366 12.8335 24.6988 12.7666C24.861 12.6998 25.0348 12.6657 25.2102 12.6662H26.6649C27.0187 12.6665 27.3579 12.8071 27.6081 13.0571C27.8584 13.3072 27.9993 13.6462 28 14C28.0002 14.1754 27.9657 14.3492 27.8986 14.5112C27.8314 14.6733 27.733 14.8205 27.6088 14.9444C27.4846 15.0684 27.3372 15.1665 27.175 15.2334C27.0128 15.3002 26.8391 15.3343 26.6636 15.3338ZM13.9809 4.13383C13.6269 4.13383 13.2874 3.99338 13.0369 3.74331C12.7863 3.49325 12.6452 3.15399 12.6445 2.80001V1.33383C12.6444 1.1583 12.6789 0.984466 12.7461 0.822315C12.8133 0.660163 12.9119 0.512888 13.0362 0.388948C13.1605 0.265008 13.308 0.166845 13.4704 0.1001C13.6327 0.0333536 13.8067 -0.00066095 13.9822 9.72801e-06C14.3359 0.000346005 14.6751 0.14094 14.9254 0.39097C15.1757 0.641 15.3166 0.980063 15.3173 1.33383V2.80001C15.3174 2.97543 15.283 3.14916 15.2158 3.31123C15.1487 3.47329 15.0502 3.62051 14.9261 3.74444C14.8019 3.86836 14.6545 3.96655 14.4923 4.03337C14.3301 4.10019 14.1563 4.13433 13.9809 4.13383ZM13.9809 28C13.6271 28 13.2878 27.8597 13.0373 27.6099C12.7868 27.3601 12.6456 27.0212 12.6445 26.6674V25.2C12.6444 25.0246 12.6788 24.8508 12.746 24.6888C12.8131 24.5267 12.9116 24.3795 13.0357 24.2556C13.1599 24.1316 13.3073 24.0335 13.4695 23.9666C13.6317 23.8998 13.8055 23.8657 13.9809 23.8662C14.3347 23.8665 14.6739 24.0071 14.9241 24.2571C15.1744 24.5072 15.3153 24.8462 15.316 25.2V26.6662C15.3162 26.8416 15.2817 27.0153 15.2146 27.1774C15.1474 27.3395 15.049 27.4867 14.9248 27.6106C14.8006 27.7345 14.6532 27.8327 14.491 27.8995C14.3288 27.9664 14.1563 28.0005 13.9809 28ZM6.04927 7.41364C5.87266 7.41299 5.69793 7.37734 5.53518 7.30874C5.37243 7.24015 5.22489 7.13997 5.10109 7.01401L4.05873 5.98692C3.87071 5.79983 3.74256 5.56107 3.69056 5.30098C3.63856 5.04088 3.66505 4.7712 3.76668 4.52621C3.86831 4.28121 4.04048 4.07195 4.26131 3.92504C4.48215 3.77812 4.74167 3.70017 5.00691 3.7011C5.36327 3.7011 5.70436 3.84237 5.95509 4.0931L6.99745 5.13292C7.24631 5.38268 7.38604 5.72088 7.38604 6.07346C7.38604 6.42604 7.24631 6.76425 6.99745 7.01401C6.87366 7.13997 6.72612 7.24015 6.56337 7.30874C6.40062 7.37734 6.22589 7.41299 6.04927 7.41364ZM22.9396 24.2404C22.5891 24.2391 22.2532 24.1001 22.0042 23.8535L20.9631 22.8136C20.7133 22.6039 20.5492 22.3098 20.5017 21.9871C20.4543 21.6644 20.5269 21.3355 20.7057 21.0627C20.8845 20.7899 21.1572 20.5922 21.472 20.507C21.7869 20.4218 22.122 20.455 22.414 20.6004C22.5795 20.6805 22.7258 20.7938 22.8467 20.9338L23.8878 21.9736C24.1363 22.2233 24.2758 22.5613 24.2758 22.9135C24.2758 23.2658 24.1363 23.6037 23.8878 23.8535C23.763 23.9771 23.615 24.0749 23.4523 24.1413C23.2896 24.2077 23.1154 24.2414 22.9396 24.2404ZM21.9113 7.41364C21.7133 7.4144 21.5177 7.37117 21.3385 7.28709C21.1593 7.20301 21.001 7.08018 20.8751 6.92746C20.7492 6.77474 20.6588 6.59596 20.6104 6.40403C20.562 6.21209 20.5568 6.01181 20.5953 5.81764C20.6462 5.55801 20.776 5.32001 20.9644 5.13292L22.0055 4.0931C22.2594 3.85768 22.5948 3.73004 22.9411 3.73707C23.2873 3.74409 23.6172 3.88523 23.8614 4.13075C24.1056 4.37628 24.245 4.707 24.2502 5.05325C24.2553 5.3995 24.1259 5.73423 23.8891 5.98692L22.8455 7.01401C22.5988 7.26502 22.2631 7.40862 21.9113 7.41364ZM5.00691 24.2404C4.8312 24.2413 4.65702 24.2076 4.49433 24.1412C4.33163 24.0749 4.18362 23.9771 4.05873 23.8535C3.80995 23.6039 3.67025 23.2659 3.67025 22.9135C3.67025 22.5612 3.80995 22.2232 4.05873 21.9736L5.10109 20.9338C5.22513 20.8084 5.3728 20.7089 5.53555 20.641C5.6983 20.5731 5.87291 20.5381 6.04927 20.5381C6.22563 20.5381 6.40024 20.5731 6.563 20.641C6.72575 20.7089 6.87342 20.8084 6.99745 20.9338C7.24593 21.1835 7.38541 21.5215 7.38541 21.8737C7.38541 22.226 7.24593 22.5639 6.99745 22.8136L5.95509 23.8535C5.83029 23.9772 5.68228 24.075 5.51957 24.1414C5.35686 24.2078 5.18264 24.2414 5.00691 24.2404Z" fill="#EFE6E6"/>
</svg>`;
const moonSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M28.0001 17.0533C27.7904 19.3229 26.9386 21.4859 25.5444 23.2891C24.1503 25.0922 22.2714 26.4611 20.1277 27.2354C17.984 28.0097 15.6641 28.1575 13.4394 27.6615C11.2148 27.1654 9.17744 26.0461 7.56575 24.4344C5.95405 22.8227 4.8347 20.7853 4.33866 18.5607C3.84261 16.336 3.9904 14.0161 4.76473 11.8724C5.53905 9.72868 6.90789 7.84982 8.71106 6.45567C10.5142 5.06152 12.6772 4.20974 14.9468 4C13.618 5.79769 12.9786 8.0126 13.1448 10.2419C13.3111 12.4712 14.2719 14.5667 15.8526 16.1475C17.4334 17.7282 19.5289 18.689 21.7582 18.8553C23.9875 19.0215 26.2024 18.3821 28.0001 17.0533Z" fill="#F2F0F9"/>
</svg>`


btnThemeToggle.addEventListener("click", () => {
    const currentTheme = getTheme();
    currentTheme === "light" ? setTheme('dark') : setTheme('light');
    currentTheme === "light" ? themeIcon.innerHTML = moonSvg : themeIcon.innerHTML = sunSvg;
    themeIcon.classList.add(currentTheme === "dark" ? "light" : "dark")
    themeIcon.classList.remove(currentTheme === "dark" ? "dark" : "light");
    themeIcon.animate([
        {
            transform: currentTheme === "dark" ? 'translateX(100%)' : 'translateX(-100%)'
        },
        {
            transform: 'translateX(0)'
        }
    ], { duration: 200 })
    return;
})

document.addEventListener('DOMContentLoaded', () => {
    let theme = getTheme();
    theme === "light" ? themeIcon.innerHTML = sunSvg : themeIcon.innerHTML = moonSvg
    themeIcon.classList.add(theme)
    return;
})