document.getElementById('contactButton').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем переход по ссылке
    const telegramLink = 'https://t.me/IN_commerch'; // Замените на ваш Telegram
    window.open(telegramLink, '_blank'); // Открываем ссылку в новой вкладке
});