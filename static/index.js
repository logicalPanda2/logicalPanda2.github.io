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
