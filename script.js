const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');
const resultado = document.getElementById('resultado');

simButton.addEventListener('click', () => {
    resultado.textContent = "Gostosa! Que bom que aceitou, usufruindo do seu livre arbítrio KKKKK";
    setTimeout(() => {
        window.location.href = 'https://www.tiktok.com/@cortesdofelca/video/7187380892325645573?is_from_webapp=1&sender_device=pc&web_id=7379732554338878982';
    }, 2000); // Redireciona após 3 segundos
});

naoButton.addEventListener('click', () => {
    resultado.textContent = "Você não tem essa escolha!";
});