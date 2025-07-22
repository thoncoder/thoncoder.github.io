const text = "Olá, eu sou o Thalyson\n Moura.";
const speed = 100;
let i = 0;

function typeWriter () {
    if (i < text.length) {
        const char = text.charAt(i) === "\n" ? "<br>" : text.charAt(i);
        document.getElementById("typeWriter").innerHTML += char;
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter