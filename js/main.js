// Lógica do FAQ (Accordion)
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const pergunta = item.querySelector('.faq-pergunta');
    pergunta.addEventListener('click', () => {
        // Fecha as outras abas abertas
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('ativo');
            }
        });
        // Alterna o estado da aba atual
        item.classList.toggle('ativo');
    });
});

// Envio do formulário direto para o WhatsApp
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o recarregamento da página

    // Pega os valores digitados
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === "" || mensagem === "") {
        alert("Por favor, preencha seu nome e como podemos ajudar.");
        return;
    }

    // Monta o texto que vai chegar no WhatsApp da empresa
    const textoCustomizado = `Olá, Tecnorod! Vim pelo site.%0A%0A*Nome:* ${nome}%0A*Contato:* ${telefone}%0A*E-mail:* ${email}%0A%0A*Mensagem:* ${mensagem}`;

    // Número do WhatsApp principal da Tecnorod (Apenas números, com o 55)
    const numeroWhatsApp = "5585991306317";

    // Abre a janela do WhatsApp já com o texto preenchido
    window.open(`https://wa.me/${numeroWhatsApp}?text=${textoCustomizado}`, '_blank');

    // Limpa o formulário depois de enviar
    form.reset();
});

document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("cookie-banner");
    const btn = document.getElementById("btn-cookies");

    // Verifica se o usuário já aceitou os cookies antes
    if (!localStorage.getItem("cookiesAceitos")) {
        setTimeout(() => {
            banner.classList.add("show");
        }, 1000); // Aparece 1 segundo depois que a página carrega
    }

    btn.addEventListener("click", function () {
        banner.classList.remove("show"); // Tira a animação

        // Força o sumiço imediato para evitar bugs no mobile
        banner.style.display = "none";

        localStorage.setItem("cookiesAceitos", "true");
    });
});
