const header = document.querySelector("h1");
header.textContent = "Добро пожаловать на наш сайт!";

const h2Elements = document.querySelectorAll("h3");
h2Elements.forEach(h2 => {
    h2.style.color = "red";
});

const firstParagraph = document.querySelector("p");
if (firstParagraph) {
    firstParagraph.textContent = "Это новый текст параграфа.";
}

const iframe = document.querySelector("iframe");
if (iframe) {
    iframe.style.display = "none";
}
