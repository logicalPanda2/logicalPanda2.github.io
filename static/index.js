const copyEmail = document.getElementById("copyEmail");
const copyLinkedin = document.getElementById("copyLinkedin");
const copyGithub = document.getElementById("copyGithub");
const emailText = document.getElementById("emailText");
const toast = document.getElementById("toast");
let toastTimeout = -1;

emailText.innerHTML = `<span>marcelrg.business</span><span>@gmail.com</span>`;

copyEmail.addEventListener("click", () => copyText("marcelrg.business@gmail.com"));
copyLinkedin.addEventListener("click", () => copyText("https://www.linkedin.com/in/marcelino-rg/"));
copyGithub.addEventListener("click", () => copyText("https://github.com/logicalPanda2"));

async function copyText(text) {
    await navigator.clipboard.writeText(text);
    toast.style.opacity = 1;
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.style.opacity = 0;
    }, 5000);
}

let lastPageX = 0;
let lastPageY = 0;
let lastClientY = 0;

document.addEventListener("mousemove", setGradientOnScroll);
document.addEventListener("scroll", setGradientOnScroll);

const cards = [
    ...document.querySelectorAll(".tech"),
    ...document.querySelectorAll(".project"),
    ...document.querySelectorAll(".contact"),
].map((el) => ({ el: el, localX: 0 }));

function setGradientOnScroll(e) {
    if(e.type === "mousemove") {
        document.body.style.background = `radial-gradient(circle 300px at ${e.pageX}px ${e.pageY}px, var(--bg-default), var(--bg-dark))`;
        lastPageX = e.pageX;
        lastPageY = e.pageY;
        lastClientY = e.clientY;

        cards.forEach((card) => {
            const rect = card.el.getBoundingClientRect();
            const localX = e.clientX - rect.left;
            const localY = e.clientY - rect.top;
            card.localX = localX;
            
            card.el.style.background = `radial-gradient(circle 300px at ${localX}px ${localY}px, var(--bg-default), var(--bg-dark))`;
        });
    } else if(e.type === "scroll") {
        const currentPageY = window.pageYOffset + lastClientY;
        document.body.style.background = `radial-gradient(circle 300px at ${lastPageX}px ${currentPageY}px, var(--bg-default), var(--bg-dark))`;

        cards.forEach((card) => {
            const rect = card.el.getBoundingClientRect();
            const localX = card.localX;
            const localY = lastClientY - rect.top;
            
            card.el.style.background = `radial-gradient(circle 300px at ${localX}px ${localY}px, var(--bg-default), var(--bg-dark))`;
        });
    }
}
