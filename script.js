// CONFIGURAÇÃO DA DATA LIMITE (Ano, Mês [0-11], Dia, Hora, Minuto)
// Janeiro = 0, Novembro = 10, Dezembro = 11
const DATA_LIMITE = new Date(2026, 9, 30, 23, 59, 59); 

// Dados de envio do WhatsApp
const WHATSAPP_NUMERO = "5582988369610";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-rsvp");
    const mensagemEncerrado = document.getElementById("mensagem-encerrado");
    const btnConfirmar = document.getElementById("btn-confirmar");
    const dataAtual = new Date();

    // Verifica se a data atual passou do prazo
    if (dataAtual > DATA_LIMITE) {
        form.classList.add("hidden");
        mensagemEncerrado.classList.remove("hidden");
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (new Date() > DATA_LIMITE) {
            alert("O prazo para esta confirmação já expirou.");
            form.classList.add("hidden");
            mensagemEncerrado.classList.remove("hidden");
            return;
        }

        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const acompanhantes = document.getElementById("acompanhantes").value;

        let mensagem = `*Confirmação de Presença - Casamento* 💍\n\n`;
        mensagem += `Olá Guilherme, gostaria de confirmar minha presença no casamento.\n\n`;
        mensagem += `👤 *Nome:* ${nome}\n`;
        mensagem += `📞 *Telefone:* ${telefone}\n`;
        mensagem += `👥 *Acompanhantes adicionais:* ${acompanhantes}\n\n`;
        mensagem += `_Enviado via link de confirmação digital._`;

        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMERO}&text=${encodeURIComponent(mensagem)}`;
        window.open(urlWhatsApp, '_blank');
    });
});