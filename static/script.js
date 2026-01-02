const copyEmailBtn = document.getElementById("copyEmail");
const copyGithubBtn = document.getElementById("copyGithub");
const copyLinkedinBtn = document.getElementById("copyLinkedin");
const emailText = document.getElementById("emailText");
const githubText = document.getElementById("githubText");
const linkedinText = document.getElementById("linkedinText");
const copyAlert = document.getElementById("customAlert");
let copyTimeout;
let textTimeout;

copyEmailBtn.addEventListener("click", handleEmailCopy);
copyGithubBtn.addEventListener("click", handleGithubCopy);
copyLinkedinBtn.addEventListener("click", handleLinkedinCopy);
window.addEventListener("load", writeEmail);

async function copyText(textElement) {
    clearTimeout(copyTimeout);
    clearTimeout(textTimeout);
    const text = textElement.textContent;

    try {
        await navigator.clipboard.writeText(text);
        copyAlert.textContent = "Copied successfully";
        copyAlert.classList.remove("hidden");
        copyTimeout = setTimeout(() => {
            copyAlert.classList.add("hidden");
            textTimeout = setTimeout(() => {
                copyAlert.textContent = null;
            }, 300);
        }, 2000);
    } catch(e) {
        console.log(e);
    }
}

function handleEmailCopy() {
    copyText(emailText);
}

function handleGithubCopy() {
    copyText(githubText);
}

function handleLinkedinCopy() {
    copyText(linkedinText);
}

function writeEmail() {
    const a = "marcelrg";
    const b = ".business";
    const c = "@gmail.com";
    emailText.innerHTML = 
    `<a href="mailto:${a}${b}${c}">${a}${b}${c}</a>`;
}