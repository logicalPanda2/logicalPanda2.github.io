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
let lastClientY = 0;

document.addEventListener("mousemove", setGradientOnScroll);
document.addEventListener("scroll", setGradientOnScroll);

function setGradientOnScroll(e) {
    if(e.type === "mousemove") {
        document.body.style.background = `radial-gradient(circle 300px at ${e.pageX}px ${e.pageY}px, var(--bg-default), var(--bg-dark))`;
        lastPageX = e.pageX;
        lastClientY = e.clientY;   
    } else if(e.type === "scroll") {
        const currentY = window.pageYOffset + lastClientY;
        document.body.style.background = `radial-gradient(circle 300px at ${lastPageX}px ${currentY}px, var(--bg-default), var(--bg-dark))`;
    }
}