document.getElementById('consultationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    // Получаем значения из полей формы
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const surname = document.getElementById('surname').value;
    const patrname = document.getElementById('patrname').value;

    // Отображаем уведомление об успешной отправке
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `${name}, ваша заявка на консультацию успешно отправлена!\nМы свяжемся с вами втечение 2 дней`;
    messageDiv.style.color = 'green';
});
