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

// Validação básica do formulário no Frontend (Evita envio vazio)
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o recarregamento da página

    // Sanitização básica no lado do cliente
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();

    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Aqui futuramente entrará a chamada AJAX (fetch) para o seu backend PHP
    alert("Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.");
    form.reset();
});
