// Lógica do FAQ (Accordion)
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const pergunta = item.querySelector('.faq-pergunta');
    pergunta.addEventListener('click', () => {
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('ativo');
            }
        });
        item.classList.toggle('ativo');
    });
});

// Envio do formulário direto para o WhatsApp
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === "" || mensagem === "") {
        alert("Por favor, preencha seu nome e como podemos ajudar.");
        return;
    }

    const textoCustomizado = `Olá, Tecnorod! Vim pelo site.%0A%0A*Nome:* ${nome}%0A*Contato:* ${telefone}%0A*E-mail:* ${email}%0A%0A*Mensagem:* ${mensagem}`;

    const numeroWhatsApp = "5585991306317";

    window.open(`https://wa.me/${numeroWhatsApp}?text=${textoCustomizado}`, '_blank');

    form.reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const btn = document.getElementById("btn-cookies");

    const cookiesAceitos = localStorage.getItem("cookiesAceitos");

    if (!cookiesAceitos) {
        banner.classList.add("active");
    }

    btn.addEventListener("click", function () {
        localStorage.setItem("cookiesAceitos", "true");
        banner.classList.remove("active");
        banner.style.display = "none";
    });
});

